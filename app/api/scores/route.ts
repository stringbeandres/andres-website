import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { score } = await request.json();
  await sql`INSERT INTO scores (score) VALUES (${score})`;
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const result = await sql`SELECT AVG(score)::float AS average, COUNT(*) AS count FROM scores`;
  const row = result.rows[0];
  return NextResponse.json({
    average: row.average ? Math.round(row.average * 10) / 10 : 0,
    count: Number(row.count),
  });
}
