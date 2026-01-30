import { GraphQLClient } from "graphql-hooks";
import awsconfig from "./awsConfig";

const client = new GraphQLClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey
  }
})
  
export default client;
  