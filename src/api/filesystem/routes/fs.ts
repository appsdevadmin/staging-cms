module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fs/:name",
      handler: "fs.getOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
