import { db } from "@/app/firebase_config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    var bcrypt = require("bcryptjs");
    let data = {};
    const { refNumber, password } = await req.json();
    console.log(`password ${typeof password}`);
    const docSnapshots = await getDocs(
      query(collection(db, "users"), where("ref", "==", Number(refNumber)))
    );
    if (!docSnapshots.empty) {
      const applicant = { ...docSnapshots.docs[0].data() };
      const { address, ref, pickupDate, hash,givenName,surname,middleName,applicationStatus } = applicant;
      const passwordMatch = await bcrypt.compareSync(password, hash);
       
      if (passwordMatch) {
       
        data = { address, ref, pickupDate,givenName,surname,middleName,applicationStatus };
      } else {
        return NextResponse.json(
          { message: "Credentials do not match" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Credentials do not match" },
        { status: 400 }
      );
    }

    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
