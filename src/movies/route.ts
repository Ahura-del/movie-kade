import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const request = await fetch(`${process.env.API_URL}/movie/now_playing?language=en-US&page=1` , {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      
    })
    const response = await request.json();
    console.log(response)
    return NextResponse.json(response , {status: 200})
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
} 