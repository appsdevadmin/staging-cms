import AuthLogo from './extensions/webclip.png';
import MenuLogo from './extensions/webclip.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
      // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },

     // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "NNPC's Website Content Editor",
        "app.components.HomePage.welcome": "Welcome to your Website Content Editor 👋",
        "app.components.HomePage.welcome.again": "Welcome to your Website Content Editor 👋"
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
