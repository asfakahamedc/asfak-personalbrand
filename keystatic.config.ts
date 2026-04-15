import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: process.env.NODE_ENV === 'production'
    ? { 
        kind: 'github', 
        repo: 'asfakahamedc/asfak-personalbrand',
        mergeStrategy: 'squash'
      }
    : { kind: 'local' },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/writing/*",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        publishedAt: fields.date({ label: "Published at" }),
        pillar: fields.select({
          label: "Pillar",
          options: [
            { label: "Geopolitics Applied", value: "geopolitics" },
            { label: "Tech & AI for Non-Devs", value: "tech-ai" },
            { label: "Ops & Business Reality", value: "ops-business" },
            { label: "Bangladesh Professional Lens", value: "bd-lens" },
            { label: "Founder / Life Transparency", value: "founder-life" },
          ],
          defaultValue: "geopolitics",
        }),
        summary: fields.text({ label: "Summary", multiline: true }),
        content: fields.markdoc({
          label: "Content",
          options: {
            images: {
              directory: 'public/content/writing',
              publicPath: '/content/writing/',
            },
          },
        }),
      },
    }),
  },
  ui: {
    brand: { name: "Lens Authority" },
    publicPath: "/admin",
  },
});
