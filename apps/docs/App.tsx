import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

let AppEntryPoint = require('./.storybook').default;

export default AppEntryPoint;
