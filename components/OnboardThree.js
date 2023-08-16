import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OnboardThree = () => {

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff" }} >
      {/* <ScrollView> */}
        <View style={{ height: 500, width: "100%" }}>
          <Image
            resizeMode='contain'
            style={{ height: 500, width: "100%" }}
            source={require('../images/Onboard.png')}
          />
        </View>
        <Text style={styles.txtone}>Book Has Power To Chnage
          Everything</Text>
        <Text style={styles.txttwo}>We have true friend in our life and the books is that. Book has power to chnage yourself and make you more valueable.</Text>
        <View style={styles.pressable}>
          <Pressable style={styles.pressablebtn} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.pressabletxt}>Get Started</Text>
          </Pressable>
        </View>
      {/* </ScrollView> */}
    </View>
  )
}

export default OnboardThree

const styles = StyleSheet.create({
  txtone: {
    fontFamily: 'HankenGrotesk-Regular',
    textAlign: 'center',
    margin: 7,
    marginTop: 5,
    lineHeight: 36,
    color: '#292B38',
    fontSize: 24,
    fontWeight: '700'
  },
  txttwo: {
    fontFamily: 'HankenGrotesk-Regular',
    textAlign: 'center',
    margin: 7,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 18,
    color: '#4D506C',
    fontSize: 14,
    fontWeight: '400'
  },
  pressable: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 25,
  },
  pressablebtn: {
    backgroundColor: '#DE7773',
    width: 230,
    borderRadius: 11,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressabletxt: {
    fontFamily: 'HankenGrotesk-Regular',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white'
  }
})