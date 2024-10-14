import { NextRequest, NextResponse } from "@/node_modules/next/server";

export const GET = async (res: NextResponse , req:NextRequest) => {
    try {
        const client = await clientPromise

        const db = client.db('mydatabase')

        const menu = db.collection("menu").find().toArray()


        return NextResponse.json({success : true, data: menu , message: "got menu" })

    } catch(e: any) {
        return NextResponse.json({success: false , message: e.message});
    }
}   
export const PATCH = async (res: NextResponse , req:NextRequest) => {}
export const DELETE = async (res: NextResponse , req:NextRequest) => {}