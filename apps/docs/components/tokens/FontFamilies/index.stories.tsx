import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { fontFamilies } from '@zephyr/tokens';

import { globalStyles } from '../../styles';
import { styles } from './styles';

function getFirstWordBeforeUnderline(text: string): string {
  const [word] = text.split('_');
  return word || '';
}

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(fontFamilies).map(([key, fontWeight]) => (
        <View key={key} style={styles.content}>
          {Object.entries(fontWeight).map(([keyFontStyle, fontFamily]) => (
            <View key={keyFontStyle} style={styles.fontFamilyContainer}>
              <Text
                style={[
                  globalStyles.text,
                  {
                    fontFamily: fontFamily.default,
                    textTransform: 'capitalize',
                  },
                ]}
              >
                {key}/{keyFontStyle}/default -{' '}
                {getFirstWordBeforeUnderline(fontFamily.default)} {keyFontStyle}
              </Text>
              <Text
                style={[
                  globalStyles.text,
                  {
                    fontFamily: fontFamily.italic,
                    textTransform: 'capitalize',
                  },
                ]}
              >
                {key}/{keyFontStyle}/italic -{' '}
                {getFirstWordBeforeUnderline(fontFamily.italic)} {keyFontStyle}{' '}
                Italic
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const FontFamilies: StoryObj = {};
