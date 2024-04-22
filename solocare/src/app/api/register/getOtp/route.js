import { db } from "@/app/firebase_config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import { instance } from "@/app/config/axios";
import { generateNumericId } from "../uploadInitialInfo/route";
import { addHours } from "date-fns";
export async function POST(req) {
  try {
    const { phoneNumber, refNumber } = await req.json();

    const docSnaps = await getDocs(
      query(collection(db, "users"), where("ref", "==", parseInt(refNumber)))
    );
    let docId;
    if (!docSnaps.empty) {
      docId = docSnaps.docs[0].id;
    } else {
      return NextResponse.json(
        { error: "No such information.", refNumber },
        { status: 400 }
      );
    }

    const otp = generateNumericId(4);
    await setDoc(
      doc(db, "users", docId),
      {
        phoneNumber: parseInt(phoneNumber),
        otp,
        otpExpiry: addHours(new Date(), 1),
      },
      {
        merge: true,
      }
    );
    const res = await instance.post("/messages", {
      apikey: process.env.SEMAPHORE_KEY,
      number: parseInt(phoneNumber),
      message: `Hello! We are from SoloCare, your OTP is: ${otp}. This is valid for only one (1) hour.`,
    });

    return NextResponse.json(
      { number: phoneNumber, docId, message: "success", otp },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function OPTIONS(request) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
