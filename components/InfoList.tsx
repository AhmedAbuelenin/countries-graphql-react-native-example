import React from 'react';
import styles from '../App.style';
import Info from './Info';
import {View, Text} from 'react-native';
import {CountryIndexed} from '../types';
import {Spinner} from 'native-base';

interface InfoListProps {
  loading: boolean;
  data: CountryIndexed | null;
  keys: string[];
}

const InfoList = ({loading, data, keys}: InfoListProps) => {
  return loading ? (
    <View style={styles.growCenterCont}>
      <Spinner color="green" />
    </View>
  ) : data ? (
    keys.map(itemKey => {
      return <Info key={itemKey} title={`${itemKey}:`} value={data[itemKey]} />;
    })
  ) : (
    <View style={styles.growCenterCont}>
      <Text>No Data</Text>
    </View>
  );
};

export default InfoList;
