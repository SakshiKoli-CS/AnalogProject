export default async function handler(request, context) {
    const url = new URL(request.url);
  
    console.log("Request received at:", url.pathname);
  
    if (url.pathname === "/legacy") {
      return new Response(
        JSON.stringify({ message: "Hello from Edge Function!", time: new Date() }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  
    return fetch(request);
  }