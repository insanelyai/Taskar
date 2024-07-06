import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (req) => {
  try {
    const token = await req.cookies.get("JWT")?.value;

    if (!token) {
      return null;
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    return decodedToken.id;
  } catch (error) {
    console.log("TOKEN ERROR", error);
  }
};
