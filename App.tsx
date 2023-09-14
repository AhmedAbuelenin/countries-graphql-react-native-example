import {NativeBaseProvider, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ApolloProvider, Query, QueryResult} from 'react-apollo';
import {Text, View} from 'react-native';
import styles from './App.style';
import {Card, SectionTitle} from './components';
import Select from './components/Select';
import client from './config/apolloClient';
import {
  GET_CONTINENTS,
  GET_COUNTRIES_OF_CONTINENT,
  GET_COUNTRY_DETAILS,
} from './services';
import {Country, CountryIndexed} from './types';
import {countryAttrs} from './data';
import InfoList from './components/InfoList';

export const App = () => {
  const [continentCode, setContinentCode] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryCode, setCountryCode] = useState('');
  const [countryDetails, setCountryDetails] = useState<CountryIndexed | null>(
    null,
  );
  const [countryLoading, setCountryLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const {data} = await client.query({
        query: GET_COUNTRIES_OF_CONTINENT,
        variables: {continentCode},
      });
      setCountries(data.continents[0].countries);
    };

    if (continentCode) {
      fetchCountries();
    }
  }, [continentCode]);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setCountryLoading(true);
      const {data} = await client.query({
        query: GET_COUNTRY_DETAILS,
        variables: {countryCode: countryCode},
      });
      setCountryLoading(false);
      setCountryDetails(data.country);
    };

    if (countryCode) {
      fetchCountryDetails();
    }
  }, [countryCode]);

  const onContinentChange = (value: string) => {
    if (value !== continentCode) {
      setContinentCode(value);
      setCountryDetails(null);
    }
  };

  const onCountryChange = (value: string) => {
    setCountryCode(value);
  };

  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <View style={styles.mainContainer}>
          <Query query={GET_CONTINENTS} client={client}>
            {({loading, error, data}: QueryResult) => {
              if (loading) {
                return loading ? <Spinner color="green" /> : null;
              }
              if (error) {
                return <Text> {error.message}</Text>;
              }
              return (
                <>
                  <View style={styles.selectCont}>
                    <SectionTitle title="Choose Continent" />
                    <Select
                      placeholder="Choose a continent"
                      data={data.continents}
                      selectedValue={continentCode}
                      onValueChange={onContinentChange}
                    />
                  </View>
                  <View style={styles.selectCont}>
                    <SectionTitle title="Choose Country" />
                    <Select
                      placeholder="Choose a country"
                      data={countries}
                      selectedValue={countryCode}
                      onValueChange={onCountryChange}
                    />
                  </View>
                  <View>
                    <SectionTitle title="Country Info" />
                    <Card>
                      <InfoList
                        loading={countryLoading}
                        data={countryDetails}
                        keys={countryAttrs}
                      />
                    </Card>
                  </View>
                </>
              );
            }}
          </Query>
        </View>
      </ApolloProvider>
    </NativeBaseProvider>
  );
};
