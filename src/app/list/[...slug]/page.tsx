import React from "react";
import { NewMovie } from "@/Types/NewMovie";
import dynamic from "next/dynamic";
const List = dynamic(() => import("../List"),{ssr: true})

const getMovies = async ({ link }: { link: string }) => {
  try {
    const request = await fetch(`${process.env.API_URL}${link}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      cache: "no-store",
    });
    const response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error)
    return [];
  }
};

const Lists = async ({ params }: { params: Promise<{ slug:string[]}> }) => {
  const {slug} = await params
  const movies: NewMovie[] = await getMovies({link:decodeURIComponent(slug[0])});
  return (
    <div className="bg-[#070707] size-full  dark:bg-[#eee] ">
      <List movies={movies} mediaType={slug[1]} /> 
    </div>
  );
};

export default Lists;
