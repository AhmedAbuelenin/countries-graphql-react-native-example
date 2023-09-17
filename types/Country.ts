import {Continent, Language, State, Subdivision} from './index';

export type Country = {
  awsRegion: string;
  capital: string;
  code: string;
  continent: Continent;
  currency: string;
  currencies: [string];
  emoji: string;
  emojiU: string;
  languages: [Language];
  name: string;
  native: string;
  phone: string;
  phones: [string];
  states: [State];
  subdivisions: [Subdivision];
};

export type CountryIndexed = {
  [key: string]: Country[keyof Omit<
    Country,
    | 'continent'
    | 'currencies'
    | 'languages'
    | 'phones'
    | 'states'
    | 'subdivisions'
  >];
};
