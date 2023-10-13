import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.STRAPI_ADDRESS,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk3MTcxNTc0LCJleHAiOjE2OTk3NjM1NzR9.iBwqrfB30UBknMLVaRDiosjRmFWB4zHyeHLygisxs7Y",
  },
  cache: new InMemoryCache(),
});

export default client;
