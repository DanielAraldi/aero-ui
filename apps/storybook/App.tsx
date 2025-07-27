import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const AppEntryPoint = require('./.rnstorybook').default;

export default AppEntryPoint;
