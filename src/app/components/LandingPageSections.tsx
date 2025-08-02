  
import { NewMovie } from "@/Types/NewMovie"
import MovieCard from './MovieCard';
import Link from "next/link";


const LandingPageSections = ({movie , sectionName , seeAllLink}:{movie:NewMovie[],sectionName:string , seeAllLink:string}) => {
  return (
    <div className="px-2 lg:px-0 container mx-auto py-3 size-full">
        <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl text-red-700 font-bold ">{sectionName}</h3>
        <Link href={`/list/${encodeURIComponent(seeAllLink)}`} className="text-red-500 font-semibold">See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full gap-3">
          {movie.map((movie:NewMovie)=>{
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
          </div>
      </div>
  )
}

export default LandingPageSections