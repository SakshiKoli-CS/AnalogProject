// functions/user/[name].js


export default function handler(request, response) {

    response.send(`Hello ${request.params.name}!`);
  
  }
  