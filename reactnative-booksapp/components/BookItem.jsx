import { StyleSheet, Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function BookItem({ book, onDetailsPress }) {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>
          {book.details.title}
        </Title>
        <Paragraph style={styles.paragraph}>
            {book.details.description}{"\n"}
            written by <Text style={styles.name}>{book.details.authors[0].name}</Text>{"\n"}
            published by <Text style={styles.name}>{book.details.publishers}</Text>{"\n"}
            <Text style={styles.date}>{book.details.publish_date}</Text>
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => onDetailsPress && onDetailsPress()}
        >
          Details
        </Button>
      </Card.Actions>
    </Card>
  );
} 

const styles = StyleSheet.create({
  container: {
    marginVertical: 11.5,
    marginHorizontal: 16,
    borderColor: '#0000001F',
    borderWidth: 1,
    borderRadius: 4,
    width: 343
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: '#000000DE'
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: '#00000099'
  },
  name: {
    fontWeight: 'bold'
  },
  date: {
    fontStyle: 'italic'
  }
});
