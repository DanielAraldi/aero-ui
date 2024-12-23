import { LogBox, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '@zephyr/tokens';

import { FontLoader } from './containers';

LogBox.ignoreAllLogs();

function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </FontLoader>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.white[100],
  },
});

export default AppEntryPoint;
