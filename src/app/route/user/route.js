
import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        { name: 'Samiul Islam', email: "sa"},
        { name: 'Al-Amin Khan', email: "df"}
    ]

    return NextResponse.json({
        message: 'Users fetched successfully',
        data: users
    }, { status: 200 });

}