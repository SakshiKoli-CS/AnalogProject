export default function handler(request, response) {
    const timestamp = new Date().toISOString();
  response.send(`Hello ${request.params.name}! Timestamp: ${timestamp}`);
}