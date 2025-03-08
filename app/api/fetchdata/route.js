import { NextResponse } from "next/server";
import DBconnect from "@/libs/mongodb";
import Article from "@/models/article";

export async function GET(req) {
  await DBconnect();
  const reqstats = req.nextUrl.searchParams.get("reqstats");
  let results;

  switch (reqstats) {
    case "all":
      results = await Article.find();
      break;
    case "pending":
      results = await Article.find({ stat: "pending" });
      break;
    case "accepted":
      results = await Article.find({ stat: "accepted" });
      break;
    case "rejected":
      results = await Article.find({ stat: "rejected" });
      break;
    default:
      return NextResponse.json(
        { error: "Invalid request status" },
        { status: 400 },
      );
  }

  if (!results || results.length === 0) {
    return NextResponse.json({ message: "No articles found" }, { status: 404 });
  }

  return NextResponse.json({ results }, { status: 200 });
}
