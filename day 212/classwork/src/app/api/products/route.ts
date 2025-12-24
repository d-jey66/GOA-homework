import { NextResponse } from "next/server"
import { dbConnect } from "@/lib/db"
import Product from "@/models/products"

export async function GET() {
  await dbConnect()
  const data = await Product.find().sort({ createdAt: -1 })
  return NextResponse.json({ data })
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const item = await Product.create(body);
  return NextResponse.json({ data: item }, { status: 201 });
}
