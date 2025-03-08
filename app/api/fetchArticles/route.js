import Article from "@/models/article";
import { NextResponse } from "next/server";
import DBconnect from "@/libs/mongodb";

export async function GET(req) {
  await DBconnect();
  const category = req.nextUrl.searchParams.get("category");
  try {
    const results = await Article.find({ category: category });
    if (!results || results.length === 0)
      return NextResponse.json(
        { message: "Article not found." },
        { status: 404 },
      );
    const articles = results.reverse();
    return NextResponse.json(
      { message: `${articles.length} articles found.`, articles },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
