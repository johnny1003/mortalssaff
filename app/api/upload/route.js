import { writeFile } from "fs/promises";
import Article from "@/models/article";
import DBconnect from "@/libs/mongodb";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request) {
  await DBconnect();
  const formData = await request.formData();

  const fields = ["file", "img", "title", "subTitle", "summary", "category"];
  const data = Object.fromEntries(
    fields.map((field) => [field, formData.get(field)]),
  );

  const buffers = await Promise.all([
    data.file.arrayBuffer(),
    data.img.arrayBuffer(),
  ]);
  const [fileBuffer, imageBuffer] = buffers;

  const uploadDir = path.join(process.cwd(), "/public/articles");
  const imageDir = path.join(process.cwd(), "/public/images");

  const filePath = path.join(uploadDir, data.file.name);
  const imagePath = path.join(imageDir, data.img.name);

  await Promise.all([
    writeFile(filePath, Buffer.from(fileBuffer)),
    writeFile(imagePath, Buffer.from(imageBuffer)),
  ]);

  try {
    const article = await Article.create({
      title: data.title,
      subTitle: data.subTitle,
      summary: data.summary,
      category: data.category,
      stat: "pending",
      pdfPath: path.join("/articles", data.file.name),
      imgPath: path.join("/images", data.img.name),
    });
    return NextResponse.json(
      { message: "Article Uploaded", article },
      { status: 201 },
    );
  } catch (error) {
    const status = error.code === "11000" ? 409 : 500;
    const message =
      error.code === "11000" ? "Title already exists" : error.message;
    return NextResponse.json({ error: message }, { status });
  }
}
