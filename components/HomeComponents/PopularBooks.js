import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import PopularBooksChild from './PopularBooksChild';

const PopularBooks = ({ books }) => {
  // const [books] = useState(require('../../books.json'));

  const renderItem = ({ item, index }) => (
    <PopularBooksChild item={item} index={index} books={books} />
  );

  return (
    <View>
      <Text style={styles.sectionTitle}>Popular Books</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.bottomwrapper}
      />
    </View>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'HankenGrotesk-Regular',
    fontSize: 20,
    fontWeight: '700',
    color: '#292B38',
    padding: 10,
  },
  bottomwrapper: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  bookDetails: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: '#4D506C',
    fontSize: 15,
  },
  author: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: '#4D506C',
    fontSize: 11,
    marginTop: 5,
  },
  price: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: '#4D506C',
    fontSize: 15,
    marginTop: 5,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  pressablebtn: {
    backgroundColor: '#DE7773',
    width: 100,
    borderRadius: 11,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressablebtn2: {
    backgroundColor: 'white',
    width: 70,
    borderRadius: 11,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressabletxt: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    fontSize: 10
  },
  pressabletxt2: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    textAlign: 'center',
    color: '#4D506C',
    fontSize: 11
  },
});
