import {API_ENDPOINT} from '@/constants/appConstant';
// import { getSiteProps } from "@/utils";
// import { headers } from "next/headers";
import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const headerLinks = API_ENDPOINT.thorApi.headerLinks;

  try {
    const response = await fetch(headerLinks);
    const data = await response.json();

    if (data.errorMessage) {
      return NextResponse.json(data, {status: 404});
    }
    return NextResponse.json(data, {status: data.status});
  } catch (error) {
    console.log('Error,', error);
    // Handle errors, e.g., invalid base64 encoding
    return new NextResponse('Error processing', {
      status: 500,
    });
  }
}
