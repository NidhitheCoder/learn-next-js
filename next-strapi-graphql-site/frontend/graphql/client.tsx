import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.STRAPI_ADDRESS,
  headers: {
    authorization:
      "Bearer 236746c52d7f59c479082aec99965e5cb889f8543c3707e28876205c4ea285a18fa6d352b248537a04e9767b526d27b27eb414aba46e4c7aebcd13a64534b36b007b63d3c08eff83bc4dabbdbccc88acc29e415276bd705134b20f9747af96c718469fd810184dda563a3e8fa5e1d5b8f44ebfa625d81308aeaa8b50a696c58b",
  },
  cache: new InMemoryCache(),
});

export default client;
