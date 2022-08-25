import { Appbar } from 'react-native-paper';

export default function Header({ navigation, back, options }) {
  return (
    <>
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={options.title} />
      </Appbar.Header>
    </>
  );
} 