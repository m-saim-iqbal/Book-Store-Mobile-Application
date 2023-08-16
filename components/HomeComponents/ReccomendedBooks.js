import { StyleSheet, Text, View, FlatList,Image } from 'react-native'
import React, {useState} from 'react'

const ReccomendedBooks = () => {

  const [books] = useState(require('../../books.json'))
  const firstFiveBooks = books.slice(0, 5); // Get the first five books

  const renderItem = ({ item, index }) => (
    <View key={index}  style={styles.bookContainer}>
      <Image
        resizeMode='contain'
        style={styles.bookImage}
        source={{ uri: item.image }}
      />
    </View>
  );

  return (
    <View style={styles.recbooks}>
      <Text style={styles.title}>
        Recommended for you
      </Text>
      <FlatList
        data={firstFiveBooks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ReccomendedBooks;

const styles = StyleSheet.create({
  recbooks: {
    marginVertical: 20,
  },
  title: {
    fontFamily: 'HankenGrotesk-Regular',
    fontSize: 20,
    fontWeight: '700',
    color: '#292B38',
    padding: 10,
  },
  bookContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bookImage: {
    height: 150,
    width: 100,
  },
});