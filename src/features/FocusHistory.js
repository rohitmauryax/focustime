import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../utils/Color';
import { fontSizes, spacing } from '../utils/Sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItem=({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things We've have focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  item:{
    fontSize:fontSizes.md,
    color:colors.white,
    paddingTop:spacing.sm
     
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
