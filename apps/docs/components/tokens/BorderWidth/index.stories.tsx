import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import {
  borderWidths,
  BorderWidthsKeysType,
  BorderWidthsObjectType,
  colors,
  spacings,
} from '@zephyr/tokens';

import { globalStyles } from '../../styles';
import { getKeyObjectByValue, getValuesSortedOfObject } from '../../utils';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {getValuesSortedOfObject<number>(borderWidths).map(borderWidth => (
        <View
          key={borderWidth}
          style={{
            width: '100%',
            height: spacings[12],
            backgroundColor: colors.blue[200],

            justifyContent: 'center',
            alignItems: 'center',

            padding: spacings[1],
            borderColor: colors.blue[900],
            borderWidth,
          }}
        >
          <Text style={globalStyles.text}>
            {getKeyObjectByValue<BorderWidthsObjectType, BorderWidthsKeysType>(
              borderWidths,
              borderWidth
            )}{' '}
            - {borderWidth}px
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const BorderWidths: StoryObj = {};
