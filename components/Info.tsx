import React from 'react';
import {View, Text} from 'react-native';
import styles from '../App.style';
import {Country} from '../types';

interface IInfoProps {
  title: string;
  value: Country[keyof Omit<Country, 'continent' | 'currencies' | 'languages'>];
}

const Info = ({title, value}: IInfoProps) => {
  return (
    <View style={styles.itemView}>
      <Text>{title}</Text>
      <Text style={styles.itemText}>{value}</Text>
    </View>
  );
};

export default Info;
