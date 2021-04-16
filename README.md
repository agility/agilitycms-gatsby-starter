# Agility CMS & Gatsby Starter

This is sample Gatsby starter site that uses Agility CMS and aims to be a foundation for building fully static sites using Gatsby and Agility CMS.

[Live Website Demo]()

[New to Agility CMS? Sign up for a FREE account](https://agilitycms.com/free)

## About This Starter
- Uses [Gatsby V3](https://www.gatsbyjs.com/blog/gatsby-v3/) - The latest version of Gatsby’s core framework which introduces massive improvement to the developer and user experience.
- Uses [AgilityImage](https://github.com/agility/gatbsy-image-agilitycms) - A custom image component utilizing the new Gatsby Image Plugin that take's images stored within Agility CMS and handles all of the hard parts of displaying responsive images that follow best practices for performance on your website or application.
- Uses [`gatsby-source-agilitycms`](https://github.com/agility/gatsby-source-agilitycms) - Our official Gatsby plugin that will only refresh content that has changed since your last build, so you can rest easy your builds will be fast, regardless of how many pages you have.
- Supports full [Page Management](https://help.agilitycms.com/hc/en-us/articles/360055805831)
- Supports Preview Mode
- Provides a functional structure that loads a Page Templates dynamically, and also dynamically loads and renders appropriate Agility CMS Page Modules (as React components)

### Tailwind CSS

This starter uses [Tailwind CSS](https://tailwindcss.com/), a simple and lightweight utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

It also comes equipped with [Autoprefixer](https://www.npmjs.com/package/autoprefixer), a plugin which use the data based on current browser popularity and property support to apply CSS prefixes for you.

## Getting Started

To start using the Agility CMS & Gatsby Starter, [sign up](https://agilitycms.com/free) for a FREE account and create a new Instance using the Blog Template.

1. Clone this repository
2. Run `npm install` or `yarn install`
3. Rename the `.env.development.example` file to `.env.development`
4. Rename the `.env.production.example` file to `.env.production`
5. Retrieve your `GUID`, `API Keys (Preview/Fetch)`, and `Security Key` from Agility CMS by going to [Settings > API Keys](https://manager.agilitycms.com/settings/apikeys).

[How to Retrieve your GUID and API Keys from Agility](https://help.agilitycms.com/hc/en-us/articles/360031919212-Retrieving-your-API-Key-s-Guid-and-API-URL-)


## Running the Site Locally

### Development Mode

When running your site in `development` mode, you will see the latest content in real-time from the CMS.

#### yarn

1. `yarn install`
2. `yarn start` or `gatsby develop`

#### npm

1. `npm install`
2. `npm run dev`

To clear your content cache locally, run `gatsby clean`

### Production Mode

When running your site in `production` mode, you will see the published from the CMS.

#### yarn

1. `yarn build` or `gatsby build`
2. `yarn serve` or `gatsby serve`

#### npm

1. `npm run build` or `gatsby build`
2. `npm run start` or `gatsby serve`
