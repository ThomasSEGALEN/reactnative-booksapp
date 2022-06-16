import { FlatList, StatusBar, StyleSheet } from 'react-native';
import routes from '../routes';
import books from '../books.json';

import BookItem from '../components/BookItem';

export default function BooksListScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <BookItem
          book={item}
          onDetailsPress={() => navigation.navigate(routes.BookDetails, { name: item.details.title, book: item })}
        />
      );

    return (
        <>
        <StatusBar style="auto" />
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.mainContainer}
          automaticallyAdjustContentInsets={false}
        />
      </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
  });