import { FlatList, StatusBar, StyleSheet } from 'react-native';
import routes from '../routes';
import books from '../books.json';

import BookItem from '../components/BookItem';

export default function BooksListScreen({ navigation }) {
    return (
        <>
        <StatusBar style="auto" />
       
      </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      padding: 16,
      paddingBottom: 4,
    },
  });