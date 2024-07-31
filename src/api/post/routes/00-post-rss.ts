export default {
  routes: [
    {
      method: "GET",
      path: "/posts/rss",
      handler: "post.rssFind",
    },
  ],
};