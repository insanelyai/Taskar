import connect from "@/lib/conn";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connect();
export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user && user.username === username) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 401 }
      );
    } else if (user && user.email === email) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 401 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server", error },
      { status: 500 }
    );
  }
}
