import { db } from "@/app/firebase_config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(){

    const docSnapshots = await getDocs(collection(db,'users'));
 
    const users = docSnapshots.docs.map(doc=>({
        id:doc.id,...doc.data()
    }))

    return NextResponse.json(users);
}

