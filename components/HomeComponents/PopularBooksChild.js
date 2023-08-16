import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const PopularBooksChild = ({ item, index, books }) => {

  // const [element, setElements] = useState({})

  const dispatch = useDispatch()
  // const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (item) => {
    // setElements(item);
    // const existingItem = cartItems.find((cartItem) => cartItem.ISBN === item.ISBN);
  
    // if (existingItem) {
    //   console.log('first')
    //   const updatedCart = cartItems.map((cartItem) =>
    //     cartItem.ISBN === item.ISBN ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    //   );
    //   console.log('data going to redux',updatedCart);
    //   dispatch(addToCart(updatedCart));
    // } else {
    //   dispatch(addToCart([...cartItems, { ...item, quantity: 1 }]));
    // }
      dispatch(addToCart(item));
  };
  
  

  // const handleRemoveFromCart = (item) => {
  //   dispatch(removeFromCart(item.name))
  // }

  const cartItems = useSelector((state) => state.reducer)

  // useEffect(() => {
  //   let result = cartItems.filter((element) => {
  //     return element.name === books.name;
  //   });
  //   if (result.length) {
  //     setIsAdded(true)
  //   }
  //   else {
  //     setIsAdded(false)
  //   }
  // }, [cartItems])
  return (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        margin: 10,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 5,
        padding: 5,
      }}>
      <Image
        resizeMode='stretch'
        style={{ height: 180, width: 120 }}
        source={{ uri: item.image }}
      />
      <View style={styles.bookDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.price}>${item.price.displayValue}</Text>
      </View>
      <View style={styles.buttons}>
        {
          // isAdded
          //   ?
          //   <Pressable style={styles.pressablebtn} onPress={() => handleRemoveFromCart(item)}>
          //     <Text style={styles.pressabletxt}>Remove From Cart</Text>
          //   </Pressable>
          //   :
            <Pressable style={styles.pressablebtn} onPress={() => handleAddToCart(item)}>
              <Text style={styles.pressabletxt}>Grab Now</Text>
            </Pressable>
        }
        <Pressable style={styles.pressablebtn2} >
          <Text style={styles.pressabletxt2}>Learn More</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default PopularBooksChild

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
})