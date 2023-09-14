import {gql} from 'apollo-boost';

export const GET_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;
