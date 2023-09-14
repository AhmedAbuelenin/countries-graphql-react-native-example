import React from 'react';
import {View} from 'react-native';
import styles from '../App.style';

interface ICardProps {
  children: React.ReactNode;
}

const Card = ({children}: ICardProps) => {
  return <View style={styles.cardView}>{children}</View>;
};

export default Card;
