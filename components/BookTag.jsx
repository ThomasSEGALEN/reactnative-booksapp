import { StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

export default function BookTag({ book, index }) {
    return (
        <> 
            <Badge style={styles.tag}>{book.details.subjects[index]}</Badge>
        </>
    );
} 

const styles = StyleSheet.create({
    tag: {
        color: '#000000DE',
        backgroundColor: '#21212114',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        height: 32,
        marginHorizontal: 4
    }
});
