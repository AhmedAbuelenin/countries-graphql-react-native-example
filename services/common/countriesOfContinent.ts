import {gql} from 'apollo-boost';

export const GET_COUNTRIES_OF_CONTINENT = gql`
  query CountriesOfContinent($continentCode: String) {
    continents(filter: {code: {eq: $continentCode}}) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
