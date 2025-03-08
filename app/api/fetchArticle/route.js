import Article from "@/models/article";
import { NextResponse } from "next/server";
import DBconnect from "@/libs/mongodb";

export async function GET(req) {
  await DBconnect();
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
  try {
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(
      { article, message: "Article found" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
