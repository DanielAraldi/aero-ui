import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { zIndexes } from '@aero-ui/tokens';

import { styles } from './styles';
import { globalStyles } from '../../styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(zIndexes).map(([key, zIndex]) => (
        <View key={key} style={styles.content}>
          <Text style={globalStyles.text}>
            {key} - {zIndex}
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const ZIndex: StoryObj = {};
