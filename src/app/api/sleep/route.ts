import { sleep } from '@/utils/sleep';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const delay = searchParams.get('delay');
  const t1 = performance.now();
  await sleep(Number(delay));
  const t2 = performance.now();
  return NextResponse.json({ timeUsed: `${t2 - t1}ms` });
}
