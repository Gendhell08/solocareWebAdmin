import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
export async function POST(req, res) {
  try {
    const { password } = await req.json();
    const hash = await bcrypt.hash(password, 10);
    if (hash) {
      return NextResponse.json(
        { message: "Hashing success", hash },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Hashing failed" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
