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

## 🖼 **<"Image"> component**

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

## 🗳 **Creating new Database with Vercel**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-postgres-database">To create new Database, follow this steps </a>
- After everything is done, 👉 **npm i @vercel/postgres** run this command.

## 🌱 **Seed your Database**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#seed-your-database"> To Seed your Database </a>

## 👏 **Data Fetching**

- By default, Next.js applications use **React Server Components**. Fetching data with Server Components is a relatively **new approach** and there are a few **benefits** of using them.
- Server Components **support promises**, providing a simpler solution for asynchronous tasks like data fetching. You can use **async/await** syntax without reaching out for **useEffect, useState** or data fetching libraries.
- Server Components execute **on the server**, so you can keep expensive data fetches and logic on the server and only send the **result to the client**.
- **<a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"> Route Handlers Request & Response</a>**

## ❔ **Using SQL to Queries**

- SQL is the industry standard for querying relational databases.
- Having a **basic understanding** of SQL can help you understand the fundamentals of relational databases, allowing you to **apply your knowledge to other tools**.
- SQL is versatile, allowing you to **fetch and manipulate** specific data.

## 🌊 **What are Request WaterFalls?**

- A "waterfall" refers to a sequence of network requests **that depend on the completion of previous requests**. In the case of data fetching, each request can only begin once the **previous request has returned** data.
- A common way to avoid waterfalls is to initiate all data requests at the **same time - in parallel**. **Promise.all or Promise.allSettled( )** forexample.

## ⏹ **What is Static Rendering?**

- With static rendering, data fetching and rendering **happens on the server** at build time or during revalidation. The result can then be distributed and cached in a **CDN (Content Delivery Network)**
- Static rendering is useful for **UI with no data** or data that is shared across users.
- **Benefits of static rendering 👇**
- **Faster Websites |** Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
- **Reduced Server Load |** Because the content is cached, your server does not have to dynamically generate content for each user request.
- **SEO |** Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

## 🙇‍♂️ **What is Dynamic Rendering?**

- With dynamic rendering, content is rendered on the **server for each user at request time** ( when the user visits the page )
- **Benefits of dynamic rendering 👇**
- **Real-Time Data |** Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where **data changes often**.
- **User-Specific Content |** It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
- To make our application dynamic, we need to import 👉 **import { unstable_noStore as noStore } from 'next/cache'** into data.ts file, and call it in every function **which is related with database**.
- unstable_noStore is an experimental API and may change in the future. If you prefer to use a stable API 👉 **export const dynamic = "force-dynamic"**.

## ↔ **Streaming**

- Streaming is a data transfer technique that allows you to **break down a route into smaller "chunks"** and progressively stream them from the server to the client as they become ready.
- When your application is dynamic but you have any slow data requests, **so it blocks whole page**. Streaming comes into play.
- This allows the user to **see and interact** with parts of the page **without waiting** for all the data to load before any UI can be shown to the user.
- There are two ways you **implement streaming** in Next.js.
- **1 |** At the page level, with the loading.tsx file.
- **2 |** For specific components, with <"Suspense"> component.

## ↔ **Streaming Components**

- You can stream specific components using **React Suspense**.
- Suspense allows you to defer rendering parts of your application until **some condition is met**.
- You can **wrap your dynamic components** in Suspense.
- Then, pass it a fallback component to show **while the dynamic component loads**. ( Loader etc. ).
- For a good practice when working with Suspense and data fetching, move data fetches down to the components that need it.

## 🤔 **Deciding Where to Place your Suspense Boundaries**

- How you want the **user to experience** the page as it streams.
- What content you want to **prioritize**.
- If the components rely on **data fetching**.

## ⏳ **Loading.tsx file**

- loading.tsx is a **special Next.js file** built on top of **Suspense**, it allows you to create fallback UI to show as a replacement while page content loads.

## ⌛ **Adding Loading Skeletons**

- A loading skeleton is a simplified version of the UI. Many websites use them as a **placeholder (or fallback)** to indicate to users that the **content is loading**. Any UI you embed into **loading.tsx** will be embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be streamed from the server to the client.

## ➕ **Route Groups**

- Route groups allow you to organize files into logical groups **without affecting the URL path structure**. When you create a new folder using **parentheses ()**, the name won't be included in the URL path.
- 👉 So **/dashboard/(overview)/page.tsx becomes /dashboard**

## ➕ **Grouping Components**

- You can use this pattern when you want multiple components to load in at the same time.
- <a href="https://nextjs.org/learn/dashboard-app/streaming#grouping-components">Grouping Components in NextJS</a>

## ↔ **Combining Static & Dynamic Content**

- Currently, if you call a dynamic function inside your route ( noStore(), cookies(), etc ), your **entire route becomes dynamic**.
- You either choose between **static and dynamic** rendering for your **entire application** or for a **specific route**.
- However, most routes are **not fully** static or dynamic.

## ❔ **What is Partial Prerendering?**

- Next.js 14 contains a preview of Partial Prerendering – an experimental feature that allows you to render a route with a **static loading shell**, while keeping **some parts dynamic**.
- **<a href="https://nextjs.org/learn/dashboard-app/partial-prerendering#how-does-partial-prerendering-work">How it works?</a>**

## ❔ **Why use URL Search Params**

- There are a couple of **benefits** of implementing search with URL params.
- **Bookmarkable and Shareable URLs |** Since the search parameters are in the URL, users can **bookmark** the current state of the application, including their search **queries and filters**, for future reference or **sharing**.
- **Server-Side Rendering and Initial Load |** URL parameters can be directly consumed on the server to **render the initial state**, making it easier to handle server rendering.
- **Analytics and Tracking |** Having search queries and filters directly in the URL makes it easier to **track user behavior** without requiring additional client-side logic.

## 🔍 **Adding Search Functionality**

- **useSearchParams( ) ||** Allows you to access the parameters of the current URL.
- **usePathname( ) ||** Lets you read the current URL's pathname.
- **useRouter( ) ||** Enables navigation between routes within client components programmatically. **replace( )** method into **useRouter( )** allow us to change URL immediately user searchs.
- **URLSearchParams( ) ||** Is a Web API that provides utility methods for manipulating the URL query parameters
- Page components can be accept a prop called **searchParams**.

## ⏲ **Best practice: Debouncing**

- You're updating the URL on every keystroke, and therefore querying your database on every keystroke! This isn't a problem if your application is small, but imagine if your application had thousands of users, each sending a new request to your database on each keystroke.
- Debouncing is a programming practice that limits the rate at which a function can fire. In our case, you only want to query the database when the user has **stopped typing**.
- Debouncing working on 3 steps:
- 1 | Trigger Event 👉🏻 When an event that should be debounced (like a keystroke in the search box) occurs, a timer starts.
- 2 | Wait 👉🏻 If a new event occurs before the timer expires, the timer is reset.
- 3 | Execution 👉🏻 If the timer reaches the end of its countdown, the debounced function is executed.

## **What are Server Actions ❓**

- React Server Actions allow you to run **asynchronous code directly on the server**. They eliminate the need to create API endpoints to mutate your data.
- Instead, you write **asynchronous functions that execute on the server** and can be invoked from your **Client or Server** Components.
- **Security** is a top priority for web applications, as they can be vulnerable to various threats. This is where Server Actions come in.
- They offer an effective security solution, **protecting against different types of attacks, securing your data, and ensuring authorized access**.

## 📜 **Using Forms with Server Actions**

- In React, you can use the **action** attribute in the <"form"> element to invoke actions. The action will automatically receive the **native FormData object**, containing the captured data.
- An advantage of invoking a **Server Action within a Server Component** is progressive enhancement - forms work even if **JavaScript is disabled** on the client.
- When a form is **submitted** through a Server Action, not only can you use the **action to mutate data**, but you can also revalidate the associated cache using APIs like **revalidatePath( )** and **revalidateTag( )**.
- We have **6 steps** to use forms with Server actions.
- **1 |** we need to **create a new route**, and form.
- **2 |** we need to create a actions file and say **'use server'** [ Means we mark all the exported functions in the file as server functions ], create new Server-Action and pass it into your form component as an action prop.
- **2.1 |** We can also write Server-Actions directly **inside Server Components** by adding "use server" inside the action.
- **3 |** Extract the data from formData <a href="https://nextjs.org/learn/dashboard-app/mutating-data#3-extract-the-data-from-formdata"> Working with FormData</a>
- **4 |** **Validate and prepare** the data. Before sending the form data to your database, you want to ensure it's in the **correct format and with the correct types**. Never forget forms **returns numbers to strings**. We will use **Zod**, a TypeScript-first validation library that can simplify this task for you. **<a href="https://nextjs.org/learn/dashboard-app/mutating-data#4-validate-and-prepare-the-data"> Validation Schema with Zod </a>**
- **4.1 |** It's usually good practice to store **monetary values in cents** in your database to eliminate **JavaScript floating-point errors** and ensure greater accuracy.
- **5 |** Inserting the data into your database. After you have every data you need, create an **SQL query to insert new data** into your database.
- **6 |** Revalidate and Redirect. On this step, we use **revalidatePath("/dashboard/invoices")** for the refresh database with new data and display it into UI. And we **redirect("/dashboard/invoices")** user to the where new data will be saved.

## 🔀 **How to handle Dynamic Route Segments**

- When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
- <a href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes">Check this Page</a> for Dynamic Route Segments.
- In addition to **searchParams**, page components also accept a prop called **params** which you can use to access the URL params.
- To mutating data <a href="https://nextjs.org/learn/dashboard-app/mutating-data"> How to Mutate Data </a>

## 🔷 **UUIDs vs. Auto-incrementing Keys**

- We use **UUIDs** instead of incrementing keys (e.g., 1, 2, 3, etc.). This makes the URL longer; however, **UUIDs eliminate the risk** of ID collision, are globally unique, and reduce the risk of enumeration attacks - making them ideal for large databases.
- However, if you prefer cleaner URLs, you might prefer to use auto-incrementing keys.

## ❌ **Handling Errors**

- Wrapping **SQL statements into try/catch** blocks except revalidate and redirect. Only if try is success then **revalidate and redirect works**.
- The **error.tsx** file can be used to define a UI boundary for a route segment. It serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.
- **<a href="https://nextjs.org/docs/app/api-reference/file-conventions/error"> Error.tsx File Schema </a>**
- error.tsx needs to be a **Client Component** so **'use client'** top of the file.
- It accepts two props, **error:** Instance of JS native Error object && **reset:** A function to reset the error boundary, when executed, function try to re-render route.
- Another way you can handle errors is by using the **notFound( )** function. While error.tsx is useful for catching all errors, notFound can be used when you try to fetch **a resource that doesn't exist**.
- To handle errors with **notFound( )** create another file named **not-found.jsx** and create a component which is shown to user.
- That's something to keep in mind, **notFound will take precedence over error.tsx**, so you can reach out for it when you want to handle more **specific errors**!

## 👨🏻‍💻 **Improving Accessibility**

- First **<a href="https://web.dev/learn/accessibility/"> Web.dev Accessibility Course </a>** you can check later.
- By default, Next.js includes the **eslint-plugin-jsx-a11y** plugin to help catch accessibility issues early. For example, this plugin warns if you have **images without alt text, use the aria and role attributes incorrectly**, and more.
- To use that plugin, add as a script **"lint": "next lint"** into package.json file. Then run **npm run lint** in your terminal. And it works!

## 📜 **Improving form accessibility**

- **Semantic HTML |** Using semantic elements ( <"input>, <"option>, etc. ) instead of <"div>. This allows assistive technologies to focus on the input elements and provide appropriate contextual information to the user, making the form easier to navigate and understand.
- **Labelling |** Including <"label> and the **htmlFor** attribute ensures that each form field has a descriptive text label. This improves AT support by providing context and also enhances usability by allowing users to click on the label to focus on the corresponding input field.
- **Focus Outline |** The fields are properly styled to show an outline when they are in focus. This is critical for accessibility as it visually indicates the active element on the page, helping both keyboard and screen reader users to understand where they are on the form. You can verify this by pressing tab.

## 🌐 **Client Side & Server Side Form Validation**

- The simplest would be to rely on the form validation provided by the browser by adding the **required** attribute to the **input and select** elements in your forms on Client-Side.
- By validating forms on the server, you can:
- Ensure your data is in the **expected format** before sending it to your database.
- Reduce the risk of malicious users bypassing client-side validation.
- Have one source of truth for what is considered valid data.
- Check **actions.ts** file and **create-form.tsx/edit-form.tsx** files to learn how to implement error handling.

## **What is Authentication**

- Authentication is a key part of many web applications today. It's how a **system checks if the user is who they say they are**.
- A secure website often uses multiple ways to check a user's identity. For instance, after entering your username and password, the site may send a **verification code to your device** or use an external app like Google Authenticator. **This 2-factor authentication** (2FA) helps increase security. Even if someone learns your password, they can't access your account without your unique token.

## **Authentication vs. Authorization**

- In web development, authentication and authorization serve different roles
- **Authentication** is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password.
- **Authorization** is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use.
- So, **authentication** checks who you are, and **authorization** determines what you can do or access in the application.

## **NextAuth.js**

- NextAuth.js **abstracts away much of the complexity** involved in managing sessions, sign-in and sign-out, and other aspects of authentication. While you can **manually implement** these features, the process can be **time-consuming and error-prone**. NextAuth.js simplifies the process, providing a unified solution for auth in Next.js applications.
- To setup 👉 **npm install next-auth@beta**
- Next, **generate a secret key** for your application. This key is used to encrypt **cookies**, ensuring the security of **user sessions**.
- To generate a key 👉 **openssl rand -base64 32** then use this key into **.env** file as AUTH_SECRET.
- For this Auth, create into Root directory an **auth.config.ts** file. and handle pages like **signIn, signOut or error**.
- After create another file into root which called **middleware.ts** and import your **authConfig object** into it.

## **Protecting Routes with Next.js Middleware**

- Next, add the logic to protect your routes. This will prevent users from accessing the dashboard pages unless **they are logged in**.
- The advantage of employing **Middleware** for this task is that the protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the **security and performance** of your application.

## **Password Hashing**

- It's good practice to hash passwords before storing them in a database. Hashing converts a password into a fixed-length string of characters, which appears random, providing a layer of security even if the user's data is exposed.
