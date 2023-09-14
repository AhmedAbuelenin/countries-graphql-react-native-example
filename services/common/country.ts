import {gql} from 'apollo-boost';

export const GET_COUNTRY_DETAILS = gql`
  query Country($countryCode: ID!) {
    country(code: $countryCode) {
      name
      native
      emoji
      currency
      code
      phone
    }
  }
`;
