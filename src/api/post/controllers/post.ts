/**
 * post controller
 */

import { toXML } from "jstoxml";
import cheerio from "cheerio";
import { factories } from '@strapi/strapi'


const getContent = (_postItem) => {
  if (_postItem.attributes.content) {
    return { type: "html", content: _postItem.attributes.content };
  } else if (_postItem.attributes.upload_pdf_file) {
    return { type: "link", content: _postItem.attributes.upload_pdf_file };
  } else {
    return { type: "link", content: _postItem.attributes.pdf_link };
  }
};

const getExcerpt = (entity) => {
  if (entity.type != "link") {
    const $ = cheerio.load(`<body>${entity.content}</body>`);
    return $("body").text().split(" ").slice(0, 115).join(" ") + "...";
  }
  return entity.content;
};

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async rssFind(ctx) {
    ctx.query.populate = "deep";
    ctx.query = {
      ...ctx.query,
      _sort: "publishedAt:desc",
    };

    // Call the default find method to get the data
    console.log('hello')
    console.log(super.find(ctx))
    const { data } = await super.find(ctx);
    const lastPublished = data[0] ? data[0].attributes.publishedAt : Date.now();
    const contentItems = [];
    data.forEach((postItem) => {
      if (postItem && postItem.attributes) {
        const postContent = getContent(postItem);
        contentItems.push({
          item: {
            id: postItem.id,
            title: postItem.attributes.title,
            link: "https://nnpcgroup.com/insights/" + postItem.attributes.slug,
            description: getExcerpt(postContent),
            content: postContent.content,
            pubDate: postItem.attributes.publishedAt,
            image: postItem.attributes.post_image.data
              ? "https://cms1977.nnpcgroup.com" +
                postItem.attributes.post_image.data.attributes.url
              : "",
            publishedOn: postItem.attributes.publishedAt,
            updatedOn: postItem.attributes.updatedAt,
          },
        });
      }
    });

    const feed = {
      _name: "rss",
      _attrs: {
        version: "2.0",
      },
      _content: {
        channel: [
          {
            title: "NNPC - Insights RSS Feeds",
          },
          {
            description:
              "NNPC Limited is a dynamic global energy company with businesses and operations across the entire spectrum of energy value chain.",
          },
          {
            link: "https://nnpcgroup.com/",
          },
          {
            lastBuildDate: lastPublished,
          },
          {
            pubDate: lastPublished,
          },
          {
            language: "en",
          },
          ...contentItems,
        ],
      },
    };

    const xmlString = toXML(feed, {
      header: false,
      indent: "  ",
    });

    ctx.set("Content-Type", "application/rss+xml");
    ctx.body = xmlString;
  },

  async find(ctx) {
    ctx.query.populate = "*";
    const { data, meta } = await super.find(ctx);

    data.forEach((post) => {
      post.attributes.publishedOn = post.attributes.publishedAt;
      post.attributes.updatedOn = post.attributes.updatedAt;
    });

    return { data, meta };
  }
}));
