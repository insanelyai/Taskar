import connect from "@/lib/conn";
import { NextResponse } from "next/server";

connect();
export async function GET(req) {
  try {
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
