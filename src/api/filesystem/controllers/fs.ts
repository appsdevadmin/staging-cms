"use strict";

/**
 * A set of functions called "actions" for `folder`
 */

module.exports = {

  getOne: async (ctx, next) => {
    try {
      const { name } = ctx.params;
      const folder = await strapi.query("plugin::upload.folder").findOne({
        where: {
          name: {
            $eqi: name,
          },
        },
        populate: ["files", "children"],
      });
      if (folder) {
        ctx.body = folder;
      } else {
        ctx.assert({}, 404);
      }
    } catch (err) {

    }
  },
};
