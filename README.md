# learn-next-js

Learning next js from the beginning

## introduction

- Next js is an open source web development framework providing react based web applications with server side rendering and static website generation.
  In next js you use react components to build user interfaces and next.js for additional features and optimization.
- Next js have multiple sever rendering strategies

### 1. SSG(Static generation / pre-rendering)

- In static generation render all pages at the build time
- getStaticProps() function helps to fetch data from api and provide the data to the component as props.
- Drawbacks- data may become stale, hard to scale to many pages.

### 2. SSR(Server side rendering)

- In server side rendering generate page on each request time.
- getServerSideProps function helps to fetch data from api and provide the data to the component as props.

### 3. Incremental static generation

- Re-generate single pages in the background.
- Here we use the same getStaticProps() function with a key revalidate in it's return statement.We can set value for the revalidate key in seconds. revalidate key is allow us to rebuild page in every revalidate value.
- For eg:
  ```
  export async function getStaticProps() {
      <!-- fetch -->
      return {
          props: data,
          revalidate: 30
      }
  }
  ```
  - In this example the page is rebuilding on every 30 seconds

## API routes

- API routes provide a solution to build public apis with next.js.
- Any files inside `pages/api` directory will be treated as an api endpoint instead of a page.
- They are server side only bundles and won't increase your client side bundle-size.
