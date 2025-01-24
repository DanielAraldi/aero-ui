import { ScrollView, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';
import {
  borderWidths,
  BorderWidthsKeysType,
  BorderWidthsObjectType,
} from '@aero-ui/tokens';

import { globalStyles } from '../../../styles';
import { getKeyObjectByValue, getValuesSortedOfObject } from '../../../utils';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens/Borders',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {getValuesSortedOfObject<number>(borderWidths).map(borderWidth => (
        <View key={borderWidth} style={[styles.content, { borderWidth }]}>
          <Text.Base style={globalStyles.text}>
            {getKeyObjectByValue<BorderWidthsObjectType, BorderWidthsKeysType>(
              borderWidths,
              borderWidth
            )}
          </Text.Base>

          <Text.Base style={globalStyles.text}>{borderWidth}px</Text.Base>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Widths: StoryObj = {};
