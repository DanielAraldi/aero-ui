import { LogBox, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Text } from '@aero-ui/ui';
import { colors } from '@aero-ui/tokens';

LogBox.ignoreAllLogs();

function App() {
  return (
    <View style={styles.container}>
      <Text.Base>Open up App.tsx to start working on your app!</Text.Base>
    </View>
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
