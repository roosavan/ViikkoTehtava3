import React from 'react'
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

export default function CustomNavigationBar({ navigation, back, options }: StackHeaderProps) {
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title ?? '';

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}

      <Appbar.Content title={typeof title === 'string' ? title : ''} />

      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      ) : null}
    </Appbar.Header>
  );
}