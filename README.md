# **What is Next.js❓**

#### Next.js offers developers _flexibility and performance_ by combining a number of important features. Used with React, it provides a powerful toolset for creating modern and interactive web applications.

## 👀 **Overview**

- **Styling** 👉 The different ways to style your application in Next.js.
- **Optimizations** 👉 How to optimize images, links, and fonts.
- **Routing** 👉 How to create nested layouts and pages using file-system routing.
- **Data Fetching** 👉 How to set up a database on Vercel, and best practices for fetching and streaming.
- **Search and Pagination** 👉 How to implement search and pagination using URL Search Params.
- **Mutating Data** 👉 How to mutate data using React Server Actions, and revalidate the Next.js cache.
- **Error Handling** 👉 How to handle general and 404 not found errors.
- **Form Validation and Accessibility** 👉 How to do serve- side form validation and tips for improving accessibility.
- **Authentication** 👉 How to add authentication to your application using NextAuth.js and Middleware.
- **Metadata** 👉 How to add metadata and prepare your application for social sharing.

## 🛠 **Setup**

- 👉 **npx create-next-app@latest**

## 🎨 **Styling**

- In NextJs projects usually using CSS Modules or Tailwind CSS. Also we can use SCSS.

## 📕 **CLSX**

- There may be cases where you may need to **conditionally style** an element based on state or some other condition. Clsx is a library that lets you **toggle class** names easily.

## **Fonts and Images & Optimizing**

## ✍ **Optimizing Fonts**

- Fonts play a **significant** role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be **fetched and loaded**.
- Next.js **automatically optimizes** fonts in the application when you use the next/font module. It downloads font files at **build time** and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

## 🖼 **Optimizing Images**

- Image Optimization is a large topic in web development that could be considered a specialization in itself. Instead of manually implementing these optimizations, you can use the **next/image** component to automatically optimize your images.

## **The <"Image"> component**

The **<"Image">** Component is an **extension** of the HTML <"img"> tag, and comes with automatic image optimization, such as:

- Preventing **layout shift** automatically when images are loading.
- **Resizing** images to avoid shipping large images to devices with a smaller viewport.
- **Lazy loading** images by default (images load as they enter the viewport).
- Serving images in modern formats, like **WebP and AVIF**, when the browser supports it.

## 🖇 **Nested Routing**

- Next.js uses **file-system routing** where folders are used to create nested routes. **Each folder** represents a route segment that maps to a URL segment.
- You can create **separate UI's** for each route.
- To create a **nested route**, create a new folder, inside that folder create another **page.tsx file** and export it, than your **folder name** becomes a route.
- The layout file is the best way to **create a shared layout** that all pages in your application can use.
- One benefit of using **layouts** in Next.js is that on navigation, only the page components update while the **layout won't re-render**. This is called **Partial Rendering**

## 📑 **Navigation Between Pages**

## 🔗 **The Link Component**

- In Next.js, you can use the **<"Link"> ( Same as React-Router )** Component to link between pages in your application. <"Link"> allows you to do **client-side navigation** with JavaScript. ( **Avoiding full-page refresh** )

## 🔓 **Showing Active Links**

- A common UI pattern is to **show an active** link to indicate to the user what page they are **currently on**. To do this, you need to get the user's current path from the URL. **usePathname( )** comes in to play.

## 🪓 **Automatic Code-Splitting**

- Next.js automatically **code splits** your application by route segments. This is different from a **traditional React SPA**, where the browser loads all your application code on initial load. ( **We can change this with lazy import in traditional React SPA** or **React-Router "loader" feature** )
- Splitting code by routes means that **pages become isolated**. If a certain page throws an **error**, the rest of the application will **still work**.
- By the time the user **clicks** the link, the code for the destination page will **already be loaded in the background**, and this is what makes the page transition **near-instant**.

### **Creating new Database with Vercel**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-postgres-database">To create new Database, follow this steps </a>
- After everything is done, 👉 **npm i @vercel/postgres** run this command.

### **Seed your Database**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#seed-your-database"> To Seed your Database </a>

## 👏 **Data Fetching**

- By default, Next.js applications use **React Server Components**. Fetching data with Server Components is a relatively **new approach** and there are a few **benefits** of using them.
- Server Components **support promises**, providing a simpler solution for asynchronous tasks like data fetching. You can use **async/await** syntax without reaching out for **useEffect, useState** or data fetching libraries.
- Server Components execute **on the server**, so you can keep expensive data fetches and logic on the server and only send the **result to the client**.
- **<a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"> Route Handlers Request & Response</a>**

## **Using SQL to Queries**

- SQL is the industry standard for querying relational databases.
- Having a **basic understanding** of SQL can help you understand the fundamentals of relational databases, allowing you to **apply your knowledge to other tools**.
- SQL is versatile, allowing you to **fetch and manipulate** specific data.

## **What are Request WaterFalls?**

- A "waterfall" refers to a sequence of network requests **that depend on the completion of previous requests**. In the case of data fetching, each request can only begin once the **previous request has returned** data.
- A common way to avoid waterfalls is to initiate all data requests at the **same time - in parallel**. **Promise.all or Promise.allSettled( )** forexample.

## **What is Static Rendering?**

- With static rendering, data fetching and rendering **happens on the server** at build time or during revalidation. The result can then be distributed and cached in a **CDN (Content Delivery Network)**
- Static rendering is useful for **UI with no data** or data that is shared across users.
- **Benefits of static rendering 👇**
- **Faster Websites |** Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
- **Reduced Server Load |** Because the content is cached, your server does not have to dynamically generate content for each user request.
- **SEO |** Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

## **What is Dynamic Rendering?**

- With dynamic rendering, content is rendered on the **server for each user at request time** ( when the user visits the page )
- **Benefits of dynamic rendering 👇**
- **Real-Time Data |** Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where **data changes often**.
- **User-Specific Content |** It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
- To make our application dynamic, we need to import 👉 **import { unstable_noStore as noStore } from 'next/cache'** into data.ts file, and call it in every function **which is related with database**.
- unstable_noStore is an experimental API and may change in the future. If you prefer to use a stable API 👉 **export const dynamic = "force-dynamic"**.

## **Streaming**

- Streaming is a data transfer technique that allows you to **break down a route into smaller "chunks"** and progressively stream them from the server to the client as they become ready.
- When your application is dynamic but you have any slow data requests, **so it blocks whole page**. Streaming comes into play.
- This allows the user to **see and interact** with parts of the page **without waiting** for all the data to load before any UI can be shown to the user.
- There are two ways you **implement streaming** in Next.js.
- **1 |** At the page level, with the loading.tsx file.
- **2 |** For specific components, with <"Suspense"> component.

## **Streaming Components**

- You can stream specific components using **React Suspense**.
- Suspense allows you to defer rendering parts of your application until **some condition is met**.
- You can **wrap your dynamic components** in Suspense.
- Then, pass it a fallback component to show **while the dynamic component loads**. ( Loader etc. ).
- For a good practice when working with Suspense and data fetching, move data fetches down to the components that need it.

## **Deciding Where to Place your Suspense Boundaries**

- How you want the **user to experience** the page as it streams.
- What content you want to **prioritize**.
- If the components rely on **data fetching**.

## **Loading.tsx file**

- loading.tsx is a **special Next.js file** built on top of **Suspense**, it allows you to create fallback UI to show as a replacement while page content loads.

## **Adding Loading Skeletons**

- A loading skeleton is a simplified version of the UI. Many websites use them as a **placeholder (or fallback)** to indicate to users that the **content is loading**. Any UI you embed into **loading.tsx** will be embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be streamed from the server to the client.

## **Route Groups**

- Route groups allow you to organize files into logical groups **without affecting the URL path structure**. When you create a new folder using **parentheses ()**, the name won't be included in the URL path.
- 👉 So **/dashboard/(overview)/page.tsx becomes /dashboard**

## **Grouping Components**

- You can use this pattern when you want multiple components to load in at the same time.
- <a href="https://nextjs.org/learn/dashboard-app/streaming#grouping-components">Grouping Components in NextJS</a>
