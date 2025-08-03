import { NewMovie } from "@/Types/NewMovie";
import { Play, Star } from "./Icons";
import Button from "./Button";
import Link from "next/link";



const MovieCard = async ({
  movie,
  mediaType
}: {
  movie: NewMovie;
  mediaType:string
}) => {


  return (
    <Link
    href={`/detail/${movie.id}/${movie.media_type ? movie.media_type : mediaType}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
      className="w-full h-60 rounded-lg bg-cover bg-no-repeat bg-center overflow-hidden relative "
    >
      <div className="size-full absolute top-0 right-0 left-0 bottom-0 bg-black/70" />
      <div className="size-full flex flex-col gap-2 relative z-20 p-2">
        <div className="flex flex-col size-full justify-between">
          <h3 className="text-2xl text-white font-bold">{movie.title || movie.name}</h3>
          <p className="text-sm text-white line-clamp-3">{movie.overview}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-white font-bold">
            <Star />
            {movie.vote_average.toFixed(1)}
          </span>
          <Button className="rounded-full bg-red-700 min-w-10 size-10 p-2 ">
            <Play />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
