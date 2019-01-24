export default function notFoundRoutes(req, res, next) {
  console.log("in not found");
  next({ error: "Not Found", status: 400 });
}
