import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  FlatList,
  Pressable,
  // Image,
  // TouchableOpacity
} from 'react-native'
// import Splash from './components/Splash';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import OnboardOne from './components/OnboardOne';
// import OnboardTwo from './components/OnboardTwo';
// import OnboardThree from './components/OnboardThree';
import Home from './components/Home';
// import Details from './components/Details';
// import OnboardMain from './components/OnboardMain';
import Entry from './Entry';
import { useSelector, useDispatch } from 'react-redux'
// import { addToCart, removeFromCart } from './components/Redux/action';
import ModalComponent from './components/ModalComponent';


function App() {

  const cartData = useSelector((state) => state.reducer)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState([])
  const dispatch = useDispatch();

  const Stack = createNativeStackNavigator();
  console.log('cartData: ', cartData);
  function handleButtonPress() {
    setIsModalVisible(true);
  }
  // const handleRemoveFromCart = (item) => {
  //   dispatch(removeFromCart(item))
  // }

  const totalQuantity = cartData.reduce((total, item) => total + item.quantity, 0);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Entry' component={Entry} options={{ title: '', headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{
          headerRight: () => (<Text onPress={handleButtonPress} style={{ color: "black" }}>View Cart: {totalQuantity}</Text>
          )
        }} />
      </Stack.Navigator>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        {/* Content of your modal */}
        <View style={styles.modalContent}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text style={{
              fontSize: 25, fontFamily: 'HankenGrotesk-Regular',
              fontWeight: '700',
              color: '#292B38',
            }}>Items: </Text>
            <Pressable
              onPress={() => setIsModalVisible(false)}>
              {/* <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>Close</Text> */}
              <Text style={{ fontSize: 25, color: 'black' }}>x</Text>
            </Pressable>
          </View>
          {/* <Text>Cart Items:</Text> */}
          <FlatList
            data={cartData}
            renderItem={({ item }) => <ModalComponent item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Proceed TO Checkout" width='100%' onPress={() => setIsModalVisible(false)} />

        </View>
      </Modal>
    </NavigationContainer>
    // <View>
    //   <OnboardMain />
    // </View>
  );

}

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
    color: '#4D506C',
    fontSize: 25,
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
});

export default App;
