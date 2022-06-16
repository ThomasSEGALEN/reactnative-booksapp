import { Image, StatusBar, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BookTag from '../components/BookTag';

export default function BookDetailsScreen({ route }) {
    const { book } = route.params;

    const renderItem = ({ item }) => (
        <BookTag book={item}/>
      );

    return (
        <>
            <StatusBar style="auto" />
            <Image style={styles.image} source={{uri: book.cover_url}}/>
            <FlatList
              data={book}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              contentContainerStyle={styles.mainContainer}
              automaticallyAdjustContentInsets={false}
            />
        </>
    );
  } 
  
  const styles = StyleSheet.create({
    image: {
        width: 231,
        height: 301,
        alignSelf: 'center',
        marginVertical: 21
    },
    mainContainer: {}
  });
  