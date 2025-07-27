import { useCallback, useState } from 'react';
import { Easing, Image, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps, Button, Text } from '@aero-ui/ui';

import { borderRadius, dimensions } from '../../../constants';
import { globalStyles } from '../../../styles';
import { styles } from './styles';

const meta = {
  title: 'Components/Atoms/Skeleton',
  args: {
    width: 'auto',
    height: 'auto',
    round: 'none',
    activated: true,
    duration: 2000,
    useNativeDriver: false,
    easing: Easing.bezier(0.4, 0, 0.6, 1),
  },
  argTypes: {
    width: {
      control: 'select',
      options: dimensions,
    },
    height: {
      control: 'select',
      options: dimensions,
    },
    round: {
      control: 'select',
      options: borderRadius,
    },
    activated: {
      control: {
        type: 'boolean',
      },
    },
    duration: {
      control: {
        type: 'number',
        min: 100,
        max: 10_000,
      },
    },
    useNativeDriver: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: props => <Skeleton {...props} />,
  decorators: Component => (
    <View style={[globalStyles.center, styles.container]}>
      <Component />
    </View>
  ),
} satisfies Meta<SkeletonProps>;

export default meta;

export const Default: StoryObj<SkeletonProps> = {
  render: props => <Skeleton {...props} width='100%' height={256} />,
};

export const WithButton: StoryObj<SkeletonProps> = {
  render: props => (
    <Skeleton {...props} width='100%' round='full'>
      <Button title='Aero UI' />
    </Skeleton>
  ),
};

export const WithParagraph: StoryObj<SkeletonProps> = {
  render: props => (
    <>
      <Skeleton {...props} round='sm' style={styles.paragraph}>
        <Text>Aero UI</Text>
      </Skeleton>

      <Skeleton {...props} round='sm' style={styles.paragraph}>
        <Text>Aero UI is lightness</Text>
      </Skeleton>

      <Skeleton {...props} round='sm' style={styles.paragraph}>
        <Text>Aero UI is fluidity</Text>
      </Skeleton>

      <Skeleton {...props} round='sm' style={styles.paragraph}>
        <Text>Aero UI sophistication</Text>
      </Skeleton>

      <Skeleton {...props} round='sm'>
        <Text>Aero UI is amazing!</Text>
      </Skeleton>
    </>
  ),
};

export const WithImage: StoryObj<SkeletonProps> = {
  render: props => {
    const [isActivated, setIsActivated] = useState<boolean>(true);

    const onLoadEnd = useCallback(() => {
      setTimeout(() => setIsActivated(false), 3000);
    }, []);

    return (
      <Skeleton {...props} activated={isActivated} round='full'>
        <Image
          src='https://fastly.picsum.photos/id/42/192/192.jpg?hmac=TPtMagXYeqbZSq0aGqmn6jF8xQh72E-AjFEatqbay8o'
          style={styles.image}
          resizeMode='cover'
          onLoadEnd={onLoadEnd}
        />
      </Skeleton>
    );
  },
};
