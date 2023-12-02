import {API_ENDPOINT} from '@arpittyagi/foundit-utils';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Get the request headers.
  const headers = request.headers;
  //   const baseURL = headers.get('Base-Url')
  const mssoat = request.cookies.get('MSSOAT')?.value;

  if (!mssoat) {
    // Handle the case when 'MSSOAT' cookie is not present
    return new NextResponse('MSSOAT cookie is missing.', {status: 401});
  }

  try {
    // Attempt to decode the base64-encoded 'MSSOAT' value
    const encryptedCookies = Buffer.from(mssoat, 'base64')
      .toString('utf-8')
      .split('::')[0];

    // Set the request headers in the fetch() call.
    const referer = headers.get('referer') || '';
    const response = await fetch(API_ENDPOINT.robinApi.cart, {
      headers: {
        Authorization: 'Bearer ' + encryptedCookies,
        'X-Source-Site-Context': 'rexmonster',
        cookie: `MSSOAT=${mssoat};`,
        referer,
      },
    });
    const data = await response.json();
    // Cast the Response to a NextResponse.

    // Return the response from the external API.
    if (data.errorMessage) {
      return NextResponse.json(data, {status: 404});
    }
    return NextResponse.json(data, {status: data.status});
  } catch (error) {
    console.log('Error,', error);
    // Handle errors, e.g., invalid base64 encoding
    return new NextResponse("Error processing 'MSSOAT' cookie.", {
      status: 500,
    });
  }
}
