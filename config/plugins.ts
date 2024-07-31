export default () => ({
  "import-export-entries": {
    enabled: true,
  },

  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.office365.com", //SMTP Host
        port: 587, //SMTP Port
        secure: false,
        username: 'do-not-reply@nnpcgroup.com',
        password: 'Password@123',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        defaultFrom: "do-not-reply@nnpcgroup.com",
        defaultReplyTo: "do-not-reply@nnpcgroup.com",
      },
    },
  },

  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },

  seo: {
    enabled: true,
  },

  // "random-sort": {
  //   enabled: true,
  // },

});
