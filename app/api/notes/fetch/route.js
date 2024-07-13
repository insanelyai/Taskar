import connect from "@/lib/conn";
import { getDataFromToken } from "@/lib/getDataFromToken";
import Notes from "@/models/Notes";
import { NextResponse } from "next/server";

connect();
export async function GET(req) {
  try {
    const uid = await getDataFromToken(req);
    const notes = await Notes.find({ user: uid });

    const content = notes.map((note) => {
      return {
        id: note._id,
        content: note.content,
      };
    });

    return NextResponse.json({ notes: content }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
