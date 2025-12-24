import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Product from "@/models/products";
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const item = await Product.findById(params.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: item });
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const body = await req.json();
  const item = await Product.findByIdAndUpdate(params.id, body, { new: true });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: item });
}
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const item = await Product.findByIdAndDelete(params.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
