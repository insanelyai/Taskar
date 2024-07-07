import connect from "@/lib/conn";
import { getDataFromToken } from "@/lib/getDataFromToken";
import Notes from "@/models/Notes";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();
export async function POST(req) {
  try {
    const { content } = await req.json();

    const note = content;

    //console.log(content);

    const uid = await getDataFromToken(req);
    if (!uid) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = await User.findById(uid).select("-password");

    const newNote = new Notes({
      user: user._id,
      content: note,
    });

    await newNote.save();

    return NextResponse.json(
      { message: "Task created successfully", note: newNote },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
