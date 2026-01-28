import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
}

export default SecondScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4fff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});