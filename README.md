Project Stack:

- Next.js
- Typescript
- React-Query in order to handle backends calls
- React-Hook-Form in order to handle forms
- Boostrap & React Boostrap to have some accesible components without having to do them adhoc for this challenge
- Jest & React Testing library to test components
- fetch-mock to intercept fetch calls

Things to remark:

- In terms of app logic I think everything is pretty much simple and easy to maintain, using React-Query makes things like refetching videos list after adding a new one just one line and these kind logic are out of components.
- As I didn't write too much CSS I directly used CSS files but if this was a work project I'd be using some library liked StyledComponents, Stitches, Tailwind, etc doesn't really matter which one. But something like CSS-in-JSX is cool since you can verify the syntax of the CSS.
- The FE part is not totally correct since Strapi offers REST by default and the page size by default is 25 so frontend just shows the first page. So pagination is missing in FE.
- Everything from bonus has been done :)

Things to improve:

- There are quite a lot of tests even thought more things could've been tested.
- All literals should've been converted into i18 constants.
- Adding local CI with husky, eslint, prettier, etc
- Design of the app is totally not the best and it is half responsive, needed to work a bit more on this and even customize it as it's Bootstrap.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
