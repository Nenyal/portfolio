import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/db";

export async function GET(req: NextRequest, res: NextResponse) {
  try {    
    const url = req.nextUrl.searchParams.get("project-url");
    console.log(url)

    if (!url) {
      return NextResponse.json({ message: "URL is required" }, { status: 400 });
    }

    try {
      const project = await prisma.projects.findFirstOrThrow({
        where: { url: url },
      });

      return NextResponse.json({ project });
    } catch (error) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
