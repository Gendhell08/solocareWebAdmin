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
import { addHours, isBefore } from "date-fns";
export async function POST(req) {
  try {
    console.log("sheeeesh");
    const res = await req.json();

    const { otp, number } = res;

    const docSnap = await getDocs(
      query(collection(db, "users"), where("phoneNumber", "==", Number(number)))
    );
    if (!docSnap.empty) {
      const snapshot = docSnap.docs[0];
      const { otp: validOtp, otpExpiry, id} = {
        id: snapshot.id,
        ...snapshot.data(),
      };

      if (validOtp == otp) {
        if (isBefore(new Date(), otpExpiry.toDate())) {
          await setDoc(doc(db, "users",id), { validated: true }, { merge: true });
          return NextResponse.json({ message: "success" }, { status: 200 });
        } else {
          return NextResponse.json(
            { message: "OTP already expired." },
            { status: 400 }
          );
        }
      } else {
        return NextResponse.json(
          { message: "OTP does not match", validOtp,otp },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Phone number is not registered in the system" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
