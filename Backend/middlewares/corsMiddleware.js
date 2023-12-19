// corsMiddleware.js
const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://fast-food-app-five.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "POST") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    res.status(200).end();
    return;
  }
  if (req.method === "PUT") {
    res.status(200).end();
    return;
  }
  if (req.method === "DELETE") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

export default allowCors;
