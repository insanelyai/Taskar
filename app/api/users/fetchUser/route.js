import connect from "@/lib/conn";
import { getDataFromToken } from "@/lib/getDataFromToken";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();
export async function GET(req) {
  try {
    const uid = await getDataFromToken(req);
    if (!uid) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(uid).select("-password");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "OK", user }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
