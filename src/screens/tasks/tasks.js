import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BaseButton } from '@/components';
import { routes } from '@/navigation';

export default (props) => {
  const { navigation } = props;
  const navigateToTask1 = () => navigation.navigate(routes.LOGIN);
  const navigateToTask2 = () => navigation.navigate(routes.N_BUTTONS_FIELDS);
  return (
    <View style={styles.cont}>
      <BaseButton title={'TASK 1'} onPress={navigateToTask1} />
      <BaseButton title={'TASK 2'} onPress={navigateToTask2} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
