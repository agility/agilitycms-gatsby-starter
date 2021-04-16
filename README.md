# Agility CMS & Gatsby Starter

This is sample Gatsby starter site that uses Agility CMS and aims to be a foundation for building fully static sites using Gatsby and Agility CMS.

[Live Website Demo]()

[New to Agility CMS? Sign up for a FREE account](https://agilitycms.com/free)

## About This Starter
- Uses [Gatsby V3](https://www.gatsbyjs.com/blog/gatsby-v3/) - The latest version of Gatsby’s core framework which introduces massive improvement to the developer and user experience.
- Uses [AgilityImage](https://github.com/agility/gatbsy-image-agilitycms) - A custom image component utilizing the new Gatsby Image Plugin that take's images stored within Agility CMS and handles all of the hard parts of displaying responsive images that follow best practices for performance on your website or application.
- Uses [`gatsby-source-agilitycms`](https://github.com/agility/gatsby-source-agilitycms) - Our official Gatsby plugin that will only refresh content that has changed since your last build, so you can rest easy your builds will be fast, regardless of how many pages you have.
- Supports full [Page Management](https://help.agilitycms.com/hc/en-us/articles/360055805831).
- Supports Preview Mode.
- Provides a functional structure that loads a Page Templates dynamically, and also dynamically loads and renders appropriate Agility CMS Page Modules (as React components).

### Tailwind CSS

This starter uses [Tailwind CSS](https://tailwindcss.com/), a simple and lightweight utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

It also comes equipped with [Autoprefixer](https://www.npmjs.com/package/autoprefixer), a plugin which use the data based on current browser popularity and property support to apply CSS prefixes for you.

## Getting Started

To start using the Agility CMS & Gatsby Starter, [sign up](https://agilitycms.com/free) for a FREE account and create a new Instance using the Blog Template.

1. Clone this repository
2. Run `npm install` or `yarn install`
3. Rename the `.env.development.example` file to `.env.development`
4. Retrieve your `GUID`, `API Keys (Preview/Fetch)`, and `Security Key` from Agility CMS by going to [Settings > API Keys](https://manager.agilitycms.com/settings/apikeys).

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

## Deploying Your Site

The easiest way to deploy a Gatsby website to production is to use Gatsby Cloud from the Gatsby team. Gatsby Cloud is a platform that gives your Gatsby website superpowers! With intelligent caching and incremental builds, Gatsby Cloud takes the speed and performance of your Gatsby website to another level.

[Deploy your site to Gatsby Cloud](https://help.agilitycms.com/hc/en-us/articles/360050426711)

## Notes

### How to Register Page Modules

1. To create a new Page Module, create a new React component within the `/src/components/agility-pageModules` directory.
2. Make sure the name of your React component matches the name of the Page Module you created in Agility, i.e. If you have a Page Module named "Featured Post", your React component should be named `FeaturedPost.jsx`.

### How to Register Page Templates

1. To create a new Page Template, create a new React component within the `/src/components/agility-pageTemplates` directory.
2. Make sure the name of your React component matches the name of the Page Template you created in Agility, i.e. If you have a Page Template named "Main Template", your React component should be named `MainTemplate.jsx`.

### How to Properly Link to an Internal Page

To link to internal pages, use the `Link` component from gatsby.

```
import { Link } from 'gatsby';

// where post.path is the url path 
<Link to={post.path}>
  {post.title}
</Link>
```

### How to Resolve Linked Content

While you are sourcing and querying content in gatsby, you are likely to come across a scenario where you need to retrieve a content item and its related content. In Agility CMS, Linked Content fields are used to related content to one another in various ways.

When querying a Post, for example, you may want to also retrieve the details for the Author. On your Post GraphQL node, you may notice an author property, however, it will only contain a contentid reference, not the entire node representing the Author.

You'll need to resolve this Linked Content when you need it.

[How to Resolve Linked Content](https://help.agilitycms.com/hc/en-us/articles/360042606992)

### How to Preview Content

Previewing content prior to publishing is crucial for Editors. We can set up and configure Previews to work with Gatsby Cloud so editors can preview content as their making edits within Agility CMS.

[Set up Preview with Gatsby Cloud](https://help.agilitycms.com/hc/en-us/articles/360049998492)

## Resources

### Agility CMS
- [Official site](https://agilitycms.com)
- [Documentation](https://help.agilitycms.com/hc/en-us)

### Gatsby
- [Official site](https://www.gatsbyjs.com/)
- [Documentation](https://www.gatsbyjs.com/docs/)

### Gatsby Cloud
- [Official site](https://www.gatsbyjs.com/cloud/)

### Tailwind CSS
- [Official site](http://tailwindcss.com/)
- [Documentation](http://tailwindcss.com/docs)

### Community
- [Official Slack](https://join.slack.com/t/agilitycommunity/shared_invite/enQtNzI2NDc3MzU4Njc2LWI2OTNjZTI3ZGY1NWRiNTYzNmEyNmI0MGZlZTRkYzI3NmRjNzkxYmI5YTZjNTg2ZTk4NGUzNjg5NzY3OWViZGI)
- [Blog](https://agilitycms.com/resources/posts)
- [GitHub](https://github.com/agility)
- [Forums](https://help.agilitycms.com/hc/en-us/community/topics)
- [Facebook](https://www.facebook.com/AgilityCMS/)
- [Twitter](https://twitter.com/AgilityCMS)

## Feedback and Questions
If you have feedback or questions about this starter, please use the [Github Issues](https://github.com/agility/agilitycms-nextjs-starter/issues) on this repo, join our [Community Slack Channel](https://join.slack.com/t/agilitycommunity/shared_invite/enQtNzI2NDc3MzU4Njc2LWI2OTNjZTI3ZGY1NWRiNTYzNmEyNmI0MGZlZTRkYzI3NmRjNzkxYmI5YTZjNTg2ZTk4NGUzNjg5NzY3OWViZGI) or create a post on the [Agility Developer Community](https://help.agilitycms.com/hc/en-us/community/topics).

