import {gql} from 'apollo-boost';

export const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;
