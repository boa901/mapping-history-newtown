import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { searchParams } = new URL(req.url);
  const street_no = searchParams.get('street_no');
  const street_name = searchParams.get('street_name');


  const residents = await supabase
    .from('residents')
    .select()
    .eq('street_no', street_no)
    .eq('street_name', street_name);

  return NextResponse.json(residents);
}
