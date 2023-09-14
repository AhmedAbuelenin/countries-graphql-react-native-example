import React from 'react';
import {Text} from 'react-native';
import styles from '../App.style';

interface ISectionTitleProps {
  title: string;
}

const SectionTitle = ({title}: ISectionTitleProps) => {
  return <Text style={styles.itemTitle}>{title}</Text>;
};

export default SectionTitle;
