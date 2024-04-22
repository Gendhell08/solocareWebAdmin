import { NextResponse } from "next/server";

export async function GET(){


    return NextResponse.json({
        id:'20-00000',
        password:'AAAAA',
    },{status:200});
}
export async function POST(req){
    const form = await req.json();
    console.log(form);
    return NextResponse.json({},{status:200})
}