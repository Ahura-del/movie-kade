import Button from "@/app/components/Button";
import { Star } from "@/app/components/Icons";
import React from "react";

const getDetail = async ({
  movieId,
  category,
}: {
  movieId: string;
  category: string;
}) => {
  try {
    const request = await fetch(
      `${process.env.API_URL}/${category}/${movieId}?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch data", { status: 500 });
  }
};

const DetailsData = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const {slug} = await params;
  const data = await getDetail({
    movieId: slug[0].toString(),
    category: slug[1],
  });

  return (
    <div
      className="bg-[#070707] w-full h-screen overflow-hidden dark:bg-[#eee] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="size-full absolute top-0 right-0 left-0 bottom-0 z-20 bg-black/30" />
      <div className="container mx-auto size-full space-y-5 pt-28 pb-10 flex flex-col justify-end relative z-30">
        <h1 className="text-6xl text-white font-bold">
          {data.original_title || data.title || data.name}
        </h1>
        <p className="w-1/3 text-lg text-[#eee]">{data.overview}</p>
        <p className="text-lg font-bold text-[#eee]">
          Languages :{" "}
          {data.spoken_languages
            ?.map((lang: any) => lang.english_name)
            .join(", ")}
        </p>
        <p className="text-lg font-bold text-[#eee]">
          Production Country :{" "}
          {data.production_countries
            ?.map((country: any) => country.iso_3166_1)
            .join(", ")}
        </p>
        <p className="text-lg font-bold text-[#eee]">Status : {data.status}</p>
        <span className="flex items-center gap-2 text-base text-[#eee] font-semibold">
          <Star /> {data.vote_average?.toFixed(1)}
        </span>
        {data.homepage && (
            <Button className="bg-zinc-700 dark:bg-zinc-950">
          <a href={data.homepage} target="_blank" rel="noreferrer noopener">
            Go to website
          </a>
        </Button>
        )}
      </div>
    </div>
  );
};

export default DetailsData;
