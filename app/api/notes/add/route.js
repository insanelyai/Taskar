import connect from "@/lib/conn";
import { getDataFromToken } from "@/lib/getDataFromToken";
import Notes from "@/models/Notes";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();
export async function POST(req) {
 try {
    const data = await req.json()
    console.log(data);
    const uid = await getDataFromToken(req)

    if (!uid) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = await User.findById(uid).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const newNote = new Notes({
      user: user._id,
      content: data,
    });
    await newNote.save();
    return NextResponse.json({ message: "Note added successfully" }, { status: 200 });

  } catch (error) {
   
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
