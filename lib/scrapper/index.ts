
"use server"



export async function scrapeAmazonProduct(url: string) {
    if(!url) return;


    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_CURL_PASSWORD);
    const port = process.env.BRIGHT_DATA_PORT;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
          username: `${username}-session-${session_id}`,
          password,
        },
        host: String(process.env.BRIGHT_DATA_HOST_STRING),
        port,
        rejectUnauthorized: false,
      }

      
}