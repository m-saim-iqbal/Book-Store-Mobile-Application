import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../components/Redux/action';
import React, { useState } from 'react'

const ModalComponent = ({ item }) => {
  // const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    // const existingItem = cartItems.find((cartItem) => cartItem.ISBN === item.ISBN);

    // if (existingItem) {
    //   if (existingItem.quantity > 1) {
    //     // If quantity > 1, decrement the quantity
    //     dispatch(removeFromCart({ ...item, quantity: 1 }));
    //   } else {
    //     // If quantity is 1 or less, remove the entire item from the cart
    dispatch(removeFromCart(item));
    //   }
    // }
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.90,
        shadowRadius: 1.91,
        backgroundColor: 'white',
        elevation: 5,
        width: '100%',
        paddingLeft: 5,
        borderRadius: 5, borderColor: 'gray',
        borderWidth: 1
      }}
    >
      <Image
        resizeMode='stretch'
        style={{ height: 120, width: 80 }}
        source={{ uri: item.image }}
      />
      <View
        style={{
          margin: 10,
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View>
            <Text
              style={styles.title}
            >
              {item.title}</Text>
            <Text
              style={styles.author}
            >
              {item.author}</Text>
            <Text
              style={styles.price}
            >
              Quantity: {item?.quantity}</Text>
            <Text
              style={styles.price}
            >
              ${item.price?.value * item?.quantity}</Text>
          </View>

        </View>
        <View
          style={styles.buttons}
        >
          <Pressable
            style={styles.pressablebtn}
            onPress={() => handleRemoveFromCart(item)}
          >
            <Text
              style={styles.pressabletxt}
            >Remove from Cart</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={{
        flexDirection: 'row',
        // marginTop: 25,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        margin: 5
      }}>
        <Pressable style={{ backgroundColor: '#8f9194' }} onPress={() => setQuantity(Math.max(0, quantity - 1))}>
          <Text style={styles.qauntity}>-</Text>
        </Pressable>
        <Text style={styles.qauntity}>{quantity}</Text>
        <Pressable style={{ backgroundColor: '#8f9194' }} onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.qauntity}>+</Text>
        </Pressable>
      </View> */}
    </View>

  )
}

export default ModalComponent

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    height: '100%',
  },
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
    // textAlign: 'center'
  },
  author: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: '#4D506C',
    fontSize: 11,
    marginTop: 5,
    // textAlign: 'center'
  },
  qauntity: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    margin: 5
  },
  price: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    color: '#4D506C',
    fontSize: 15,
    marginTop: 5,
    // textAlign: 'center'
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  pressablebtn: {
    backgroundColor: '#DE7773',
    width: 150,
    borderRadius: 11,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
  },
  pressabletxt: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  pressabletxt2: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    textAlign: 'center',
    color: '#4D506C',
    fontSize: 11
  },
})