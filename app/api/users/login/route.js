import connect from "@/lib/conn";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connect();
export async function POST(req) {
  try {
    const { username, password } = await req.json();

    console.log(username, password);

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: `Welcome back! ${user.username}`, payload },
      { status: 200 }
    );

    response.cookies.set("JWT", token, { httpOnly: true });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
