import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { colors, ColorsKeysType } from '@zephyr/tokens';

import { styles } from './styles';

function handleTextColor(key: ColorsKeysType, keyColor: string): string {
  if (key === 'black') return colors.white[100];
  else if (Number(keyColor) <= 400) colors.black[100];
  else return colors.white[100];
}

const meta: Meta = {
  title: 'Tokens',
  component: () => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {Object.keys(colors).map((key: ColorsKeysType) => (
          <View key={key} style={styles.content}>
            {Object.entries(colors[key]).map(
              ([keyColor, color]: [string, string]) => (
                <View
                  key={color}
                  style={[styles.ghostContent, { backgroundColor: color }]}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color: handleTextColor(key, keyColor),
                      },
                    ]}
                  >
                    {key}/{keyColor} - {color}
                  </Text>
                </View>
              )
            )}
          </View>
        ))}
      </ScrollView>
    );
  },
};

export default meta;

export const Colors: StoryObj = {};
