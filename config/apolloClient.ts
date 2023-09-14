import ApolloClient from 'apollo-boost';
import {baseUrl} from './baseUrl';

const client = new ApolloClient({
  uri: baseUrl,
});

export default client;
