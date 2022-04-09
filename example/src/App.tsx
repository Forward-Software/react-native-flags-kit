import React from 'react';

import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Flag } from '@forward-software/react-native-flags-kit';

import { useFlagSize } from './hooks';

const flags = ['US', 'JP', 'IT', 'ES', 'CN', 'RU', 'KH', 'VN', 'SG', 'HK', 'MY'].sort();

export const App: React.FC = () => {
  const { flagSize, increase, decrease } = useFlagSize();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.col}>CODE</Text>
        <Text style={styles.col}>Shiny</Text>
        <Text style={styles.col}>Flat</Text>
      </View>

      <ScrollView>
        {flags.map((code) => (
          <View key={code} style={styles.row}>
            <Text style={styles.col}>{code}</Text>

            <View style={styles.col}>
              <Flag code={code} size={flagSize} />
            </View>

            <View style={styles.col}>
              <Flag code={code} type="flat" size={flagSize} />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.row}>
        <View style={styles.col}>
          <Button title="Size -" onPress={decrease} />
        </View>

        <Text style={styles.col}>{flagSize}</Text>

        <View style={styles.col}>
          <Button title="Size +" onPress={increase} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5FCFF',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  col: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '800',
  },
});
