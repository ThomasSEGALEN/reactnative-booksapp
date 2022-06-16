import { Image, StatusBar, StyleSheet, View } from 'react-native';

import BookTag from '../components/BookTag';

export default function BookDetailsScreen({ route }) {
    const { book } = route.params;

    return (
        <>
            <StatusBar style="auto" />
            <Image style={styles.image} source={{uri: book.cover_url}}/>
            <View style={styles.tags}>
                {book.details.subjects[0] ? <BookTag book={book} index={0} /> : null}
                {book.details.subjects[1] ? <BookTag book={book} index={1} /> : null}
            </View>
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
    tags: {
        flex: 1,
        marginHorizontal: 75,
        marginBottom: 180,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  