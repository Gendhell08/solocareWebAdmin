import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("SIKRETP:",process.env.JWT_SIGN);
    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SIGN,
      { expiresIn: "1h" }
    );

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
