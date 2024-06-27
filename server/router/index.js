const userRouter = require("../userRouter");

const router = (app) => {
  return app.use("/api/v1", userRouter);
};

module.exports = router;
