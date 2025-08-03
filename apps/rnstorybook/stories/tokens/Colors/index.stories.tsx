import { SectionList, View } from 'react-native';
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

const sections = Object.keys(colors).map(key => ({ title: key, data: [key] }));

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <SectionList
      sections={sections}
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => colors[item]}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <View key={item} style={styles.content}>
          {Object.entries<string>(colors[item]).map(([keyColor, color]) => (
            <View
              key={color}
              style={[styles.ghostContent, { backgroundColor: color }]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: getTextColor(item as ColorsKeysType, keyColor),
                  },
                ]}
              >
                {item}/{keyColor} - {color}
              </Text>
            </View>
          ))}
        </View>
      )}
    />
  ),
};

export default meta;

export const Colors: StoryObj = {};
