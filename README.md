# **What is Next.js?**

#### Next.js offers developers _flexibility and performance_ by combining a number of important features. Used with React, it provides a powerful toolset for creating modern and interactive web applications.

## **Overview**

- _Styling_: The different ways to style your application in Next.js.
- _Optimizations_: How to optimize images, links, and fonts.
- _Routing_: How to create nested layouts and pages using file-system routing.
- _Data Fetching_: How to set up a database on Vercel, and best practices for fetching and streaming.
- _Search and Pagination_: How to implement search and pagination using URL Search Params.
- _Mutating Data_: How to mutate data using React Server Actions, and revalidate the Next.js cache.
- _Error Handling_: How to handle general and 404 not found errors.
- _Form Validation and Accessibility_: How to do serve- side form validation and tips for improving accessibility.
- _Authentication_: How to add authentication to your application using NextAuth.js and Middleware.
- _Metadata_: How to add metadata and prepare your application for social sharing.

<!-- - **Server-Side Rendering (SSR)**: Next.js, sayfaların sunucu tarafında render edilmesine izin verir. Bu, sayfaların sunucu tarafında oluşturulup istemci tarayıcısına gönderilmesi anlamına gelir. Bu, daha hızlı yükleme süreleri ve daha iyi SEO sonuçları sağlar.
- **Static Site Generation (SSG)**: Next.js, sayfaları önceden oluşturarak statik dosyalar haline getirebilir. Bu, sayfaların her istendiğinde yeniden oluşturulması gerekmediği anlamına gelir, böylece performans artar.
- **Client-Side Routing:** Sayfa geçişleri için istemci tarafında yönlendirme sağlar. Bu, web uygulamasının kullanıcı dostu ve hızlı bir şekilde tepki vermesini sağlar.
- **CSS-in-JS Desteği**: Next.js, CSS-in-JS kütüphaneleriyle uyumlu çalışır ve stil yönetimi için çeşitli seçenekler sunar.
- **API Routes**: Next.js, sunucu tarafında çalışan basit API'ları oluşturmanıza izin verir. Bu, veri alışverişi için kullanışlıdır ve genellikle RESTful veya GraphQL API'larını çağırmak için kullanılır. -** Code Splitting**: Projenizdeki JavaScript kodunu otomatik olarak bölerek yalnızca kullanıcının ihtiyaç duyduğu kısmı yükler. Bu, daha hızlı yükleme süreleri ve daha düşük başlangıç ​​zamanları sağlar. ( React-Router Lazy import ile benzer ) -->

## **Setup**

- 👉 **npx create-next-app@latest**

## **Styling**

- In NextJs projects usually using CSS Modules or Tailwind CSS. Also we can use SCSS.

## **CLSX**

- There may be cases where you may need to **conditionally style** an element based on state or some other condition. Clsx is a library that lets you **toggle class** names easily.

## **Fonts and Images & Optimizing**

### **Optimizing Fonts**

- Fonts play a **significant** role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be **fetched and loaded**.
- Next.js **automatically optimizes** fonts in the application when you use the next/font module. It downloads font files at **build time** and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

### **Optimizing Images**

- Image Optimization is a large topic in web development that could be considered a specialization in itself. Instead of manually implementing these optimizations, you can use the **next/image** component to automatically optimize your images.

#### **The <"Image"> component**

The **<"Image">** Component is an **extension** of the HTML <"img"> tag, and comes with automatic image optimization, such as:

- Preventing **layout shift** automatically when images are loading.
- **Resizing** images to avoid shipping large images to devices with a smaller viewport.
- **Lazy loading** images by default (images load as they enter the viewport).
- Serving images in modern formats, like **WebP and AVIF**, when the browser supports it.

### **Nested Routing**

- Next.js uses **file-system routing** where folders are used to create nested routes. **Each folder** represents a route segment that maps to a URL segment.
- You can create **separate UI's** for each route.
- To create a **nested route**, create a new folder, inside that folder create another **page.tsx file** and export it, than your **folder name** becomes a route.
- The layout file is the best way to **create a shared layout** that all pages in your application can use.
- One benefit of using **layouts** in Next.js is that on navigation, only the page components update while the **layout won't re-render**. This is called **Partial Rendering**

## **Navigation Between Pages**

### **The Link Component**

- In Next.js, you can use the **<"Link"> ( Same as React-Router )** Component to link between pages in your application. <"Link"> allows you to do **client-side navigation** with JavaScript. ( **Avoiding full-page refresh** )

### **Showing Active Links**

- A common UI pattern is to **show an active** link to indicate to the user what page they are **currently on**. To do this, you need to get the user's current path from the URL. **usePathname( )** comes in to play.

### **Automatic Code-Splitting**

- Next.js automatically **code splits** your application by route segments. This is different from a **traditional React SPA**, where the browser loads all your application code on initial load. ( **We can change this with lazy import in traditional React SPA** or **React-Router "loader" feature** )
- Splitting code by routes means that **pages become isolated**. If a certain page throws an **error**, the rest of the application will **still work**.
- By the time the user **clicks** the link, the code for the destination page will **already be loaded in the background**, and this is what makes the page transition **near-instant**.

#### **Creating new Database with Vercel**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-postgres-database">To create new Database, follow this steps </a>
- After everything is done, 👉 **npm i @vercel/postgres** run this command.

#### **Seed your Database**

- <a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database#seed-your-database"> To Seed your Database </a>
