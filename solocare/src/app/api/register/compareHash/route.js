import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
export async function POST(req, res) {
  try {
    const { password, dbHash } = await req.json();
    console.log(password,dbHash);
    const isMatch = await bcrypt.compare(password, dbHash);
    console.log(isMatch);
    if (isMatch) {
      return NextResponse.json({ message: "password match" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "password does not match" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
