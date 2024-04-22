import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
export async function POST(req) {
  try {
    const { idToken, secret } = await req.json();
    console.log(idToken, secret);
    const decoded = jwt.verify(idToken, secret, function (err, decoded) {
      console.log(err);
      
      if (decoded?.email) {
        console.log('ett');
        return decoded
      }
      if (err.message) {
        console.log("ERRORR:", err.message);
        return err
      }
    });
    if(decoded?.email){
        return NextResponse.json({ ...decoded}, { status: 200 });
    }else{
        return NextResponse.json({ ...decoded}, { status: 400 });
    }
   
  } catch (error) {
    console.log("logerrror",error);
    return NextResponse.json(error, { status: 500 });
  }
}
