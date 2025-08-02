import { NewMovie } from "@/Types/NewMovie";
const Heading = dynamic(()=>import("./components/Heading"))
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import MovieCard from "./components/MovieCard";
import Link from "next/link";
import LandingPageSections from "./components/LandingPageSections";

const getNewMovie = async()=>{
  try {
    const request = await fetch(`${process.env.API_URL}/movie/now_playing?language=en-US&page=1` , {
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })
    const response = await request.json();
    return response.results.slice(0,4); 
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
}

const getNewSeries = async()=>{
  try {
    const request = await fetch(`${process.env.API_URL}/tv/on_the_air?language=en-US&page=1` , {
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })
    const response = await request.json();
    return response.results.slice(0, 4);
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
}

const getTrending = async()=>{
  try {
    const request = await fetch(`${process.env.API_URL}/trending/all/day?language=en-US` , {
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })
    const response = await request.json();
    return response.results.slice(0, 4);
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
}


const Home = async () => {
  const newMovie:NewMovie[] = await getNewMovie();
  const newSeries = await getNewSeries();
  const trending = await getTrending();
  const movie = newMovie[0];
  console.log(newSeries)
  return (
    <div  className="bg-[#070707] size-full  dark:bg-white ">
      <Navbar />
      <Heading  movieDetail={movie}/>
      <div className="space-y-5">
      {/* new movies */}
      <LandingPageSections movie={newMovie} sectionName="New Movies" />
      {/* new series */}
      <LandingPageSections movie={newSeries} sectionName="New Series" />
      {/* trending */}
      <LandingPageSections movie={trending} sectionName="Trending" />

      </div>

    </div>
  );
}
export default Home;