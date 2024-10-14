import { NextRequest, NextResponse } from "@/node_modules/next/server";

export const GET = async () => {
    try {
        const client = await clientPromise;
        const db = client.db('mydatabase');

        const menu = await db.collection("menu").find().toArray();

        return NextResponse.json({ success: true, data: menu, message: "success" });

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
}; 

export const POST = async (res: NextResponse , req:NextRequest) => {

}