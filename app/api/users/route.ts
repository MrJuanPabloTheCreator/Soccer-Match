import { NextResponse } from "next/server";
const db = require('@/app/db')

export async function GET() {
    const connection = await db.getConnection();
    const [records] = await db.query(`SELECT * FROM users;`)
    connection.release()
    return new NextResponse(JSON.stringify(records));
}