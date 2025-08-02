import { NewMovie } from "@/Types/NewMovie";
import Button from "./Button";
import { Star } from "./Icons";

const getLandImage = async ({ movie_id }: { movie_id: string }) => {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    const response = await request.json();
    return response.backdrops[0];
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
};

const Heading = async ({ movieDetail }: { movieDetail: NewMovie }) => {
  const landImage = await getLandImage({ movie_id: movieDetail.id.toString() });

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat  overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${landImage.file_path})`,
      }}
    >
      <div className="size-full relative">

      <div className="size-full absolute top-0 right-0 left-0 bottom-0 bg-black/55" />
      <div className="px-2 lg:px-0 container mx-auto size-full flex flex-col justify-end pb-10 items-start relative z-20  ">
        <div className=" space-y-5">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            {movieDetail.title}
          </h1>
          <p className="text-sm text-white lg:w-1/3">{movieDetail.overview}</p>
          <span className="text-sm text-white flex items-center gap-2">
            <Star />
            {movieDetail.vote_average.toFixed(1)}
          </span>
          <Button>Watch movie</Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Heading;
