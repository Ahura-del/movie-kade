'use client'
import { NewMovie } from '@/Types/NewMovie'
import React from 'react'
import MovieCard from '../components/MovieCard'

const List = ({movies}: {movies: NewMovie[]}) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-28">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
  )
}

export default List