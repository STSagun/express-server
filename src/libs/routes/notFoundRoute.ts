export default function notFoundRoutes(req, res, next) {
  next({ error: "Not Found", status: 400 });
}
