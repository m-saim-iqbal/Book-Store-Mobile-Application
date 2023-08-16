import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import PopularBooks from './HomeComponents/PopularBooks';
import ReccomendedBooks from './HomeComponents/ReccomendedBooks';
import { addToCart } from './Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const [isAdded, setIsAdded] = useState(false)
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    // console.warn('yes', item);
    dispatch(addToCart(item))
  }

  const cartItems = useSelector((state) => state.reducer)

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach((elements) => {
        if (elements.name == books.name) {
          setIsAdded(true)
        }
      })
    }
  }, [cartItems])

  const [books] = useState(require('../books.json'))
  const [randomBook, setRandomBook] = useState({})
  // const dispatch = useDispatch();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * books.length);
    setRandomBook(books[randomIndex]);
  }, [books])

  const renderHeader = () => (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageBackground
        resizeMode='contain'
        style={{ height: 500, width: '100%' }}
        source={require('../images/Vector.png')}
      >
        <View>
          <Text style={styles.toptxt}>Book of the week</Text>
          <View style={styles.topwrapper}>
            <Image
              resizeMode='stretch'
              style={{ height: 200, width: 150, marginLeft: 15 }}
              source={{ uri: randomBook?.image }}
            />
            <View
              style={{
                flexDirection: 'column',
                flexShrink: 1,
                marginLeft: 20,
                marginRight: 10,
                marginTop: 40,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '700',
                    color: '#4D506C',
                    fontSize: 15,
                  }}
                >
                  {randomBook?.title}
                </Text>
                <Text
                  style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '600',
                    color: '#4D506C',
                    fontSize: 10,
                    marginTop: 10,
                  }}
                >
                  {randomBook?.author}
                </Text>
                <Text
                  style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '400',
                    color: '#9091A0',
                    fontSize: 10,
                    marginTop: 10,
                  }}
                >
                  {randomBook?.summary}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 15,
                  }}
                >
                  {
                    // isAdded
                    //   ?
                    //   <Pressable style={styles.pressablebtn} onPress={() => handleAddToCart(item)}>
                    //     <Text style={styles.pressabletxt}>Remove From Cart</Text>
                    //   </Pressable>
                    //   :
                      <Pressable style={styles.pressablebtn} onPress={() => handleAddToCart(randomBook)}>
                        <Text style={styles.pressabletxt}>Grab Now</Text>
                      </Pressable>

                  }
                  <Pressable style={styles.pressablebtn2}>
                    <Text style={styles.pressabletxt2}>Learn Nore</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ReccomendedBooks />
      <PopularBooks books={books} />
    </View>
  );

  return (
    <FlatList
      data={books}
      ListHeaderComponent={renderHeader}
      // renderItem={<ReccomendedBooks />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  toptxt: {
    fontFamily: 'HankenGrotesk-Regular',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#293B38',
    marginTop: 15
  },
  topwrapper: {
    height: 'auto',
    backgroundColor: 'white',
    // borderColor: 'black',
    // borderWidth: 1,
    margin: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  pressable: {
    alignItems: 'center',
    marginBottom: 25,
  },
  pressablebtn: {
    backgroundColor: '#DE7773',
    width: 70,
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

  bottomwrapper: {
    backgroundColor: 'white',
    margin: 10,
    height: 200,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})