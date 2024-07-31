# 🚀 Getting started with Strapi

### `NB`

in `package.json` the name value('strapi-template') is a placeholder, change to project name

in `database.json` the database value('strapi-template') is a placeholder, change to project name

For new single/collection types add to that new collections controllers file `./src/api/{{collection-name}}/controllers/{{collection.js}}`:

```javascript
"use strict";

/**
 *  [name of single/collection type] controller
 */

const schema = require("../content-types/ [name of single/collection type ]/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(
  "api::[name of single/collection type].[name of single/collection type]",
  schema
);
```

an example

```javascript
"use strict";

/**
 *  team-page controller
 */

const schema = require("../content-types/team-page/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::team-page.team-page", schema);
```

---

### `env`

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=IqPlZ1jB9UySfA21pLHtuQ==,9NGO51+Gnuk5uxrc/+8rvQ==,29rhGpcf4VGoOeZIFnwefQ==,VfbcPeYwTEhtZpAleQLqeA==
API_TOKEN_SALT=wuLuakyBuudQ4hf/QgC5lw==
ADMIN_JWT_SECRET=6XgElg70iyiLAnGsYM218A==
JWT_SECRET=K8NtSAIwCcnOnlsdsUHO0w==

```

---

### `optional env`

<br>

#### `netlify`

**buildHook**: Url of the build hook in Netlify.

**accessToken**: Access token of your Netlify account used to fetch the list of deployments
Access tokens can be created and managed inside your user settings

**siteId**: Site ID of your Netlify site used to filter the list of deployments
Set the Site ID of your Netlify Site to see only the deployments you need. This can be found at Site settings > General.

```
NETLIFY_DEPLOYMENTS_PLUGIN_BUILD_HOOK=""
NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN=""
NETLIFY_DEPLOYMENTS_PLUGIN_SITE_ID=""
```

---

### `plugins used`

1. [Netlify Deployments](https://market.strapi.io/plugins/strapi-plugin-netlify-deployments).
2. [SEO](https://market.strapi.io/plugins/@strapi-plugin-seo).
3. [Random Sort](https://market.strapi.io/plugins/strapi-plugin-random-sort).
4. [CKEditor 5](https://market.strapi.io/plugins/@_sh-strapi-plugin-ckeditor).

---

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
