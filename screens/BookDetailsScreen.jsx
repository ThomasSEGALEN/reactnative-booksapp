import { Image, StatusBar, StyleSheet, View } from 'react-native';

import BookTag from '../components/BookTag';

export default function BookDetailsScreen({ route }) {
    const { book } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.image} source={{uri: book.cover_url}}/>
            <View style={styles.tags}>
                {book.details.subjects[0] ? <BookTag book={book} index={0} /> : null}
                {book.details.subjects[1] ? <BookTag book={book} index={1} /> : null}
            </View>
        </View>
    );
  } 
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFF'
    },
    image: {
        width: 231,
        height: 301,
        alignSelf: 'center',
        marginVertical: 21
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
  });
  