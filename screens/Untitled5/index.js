import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled5 = () => {
  return <View style={styles.container}>
      <View style={styles.column1}></View>
      <View style={styles.column2}></View>
      <View style={styles.column3}></View>
      </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    padding: 10,
    backgroundColor: '#f0f0f1'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  }
});
export default Untitled5;