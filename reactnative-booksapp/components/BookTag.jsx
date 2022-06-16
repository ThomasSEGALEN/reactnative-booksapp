import { StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

export default function BookTag({ book }) {
    console.log(book);
  return (
    <> 
        <Badge style={styles.tag}>{book.details.subject[0]}</Badge>
        <Badge style={styles.tag}>{book.details.subject[1]}</Badge>
    </>
  );
} 

const styles = StyleSheet.create({
    tag: {
        color: '#000000DE',
        backgroundColor: '#21212114',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4
    }
});
