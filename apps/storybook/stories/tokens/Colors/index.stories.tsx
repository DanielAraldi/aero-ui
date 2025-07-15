import { ScrollView, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';
import { colors, ColorsKeysType } from '@aero-ui/tokens';

import { styles } from './styles';
import { globalStyles } from '../../styles';

function getTextColor(key: ColorsKeysType, keyColor: string): string {
  if (key === 'black') return colors.white[100];
  else if (Number(keyColor) <= 400) return colors.black[100];
  else return colors.white[100];
}

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      {Object.keys(colors).map(key => (
        <View key={key} style={styles.content}>
          {Object.entries<string>(colors[key]).map(([keyColor, color]) => (
            <View
              key={color}
              style={[styles.ghostContent, { backgroundColor: color }]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: getTextColor(key as ColorsKeysType, keyColor),
                  },
                ]}
              >
                {key}/{keyColor} - {color}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Colors: StoryObj = {};
