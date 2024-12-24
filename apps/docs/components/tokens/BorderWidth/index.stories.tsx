import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import {
  borderWidths,
  BorderWidthsKeysType,
  BorderWidthsObjectType,
} from '@zephyr/tokens';

import { globalStyles } from '../../styles';
import { getKeyObjectByValue, getValuesSortedOfObject } from '../../utils';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {getValuesSortedOfObject<number>(borderWidths).map(borderWidth => (
        <View key={borderWidth} style={[styles.content, { borderWidth }]}>
          <Text style={globalStyles.text}>
            {getKeyObjectByValue<BorderWidthsObjectType, BorderWidthsKeysType>(
              borderWidths,
              borderWidth
            )}
          </Text>

          <Text style={globalStyles.text}>{borderWidth}px</Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const BorderWidths: StoryObj = {};
