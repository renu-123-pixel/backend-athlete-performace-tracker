export function coachOnly(req, res, next) {
  const role = req.headers.role;

  if (role !== "coach") {
    return res.status(403).json({
      error: "Coach access required"
    });
  }

  next();
}
