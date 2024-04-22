import { db } from "@/app/firebase_config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    var bcrypt = require("bcryptjs");
    const regInfo = await req.json();
    const hash = bcrypt.hashSync(regInfo.password, 10);

    let finalData = { ...regInfo, hash };

    delete finalData.password;
    delete finalData.cPassword;

    const ref = generateNumericId(6);
    finalData.ref = ref

    await addDoc(collection(db, "users"), finalData);

    return NextResponse.json(
      { ref:finalData.ref, message: "success",finalData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function OPTIONS(request) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
export function generateNumericId(length) {
  const min = Math.pow(10, length - 1); // Minimum value with specified length
  const max = Math.pow(10, length) - 1; // Maximum value with specified length
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
