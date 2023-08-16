import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const OnboardTwo = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView>

        <View style={{ padding: 5, height: 500, width: "100%" }}>
          <Image
            resizeMode='contain'
            style={{ height: 500, width: "100%" }}
            source={require('../images/imagetwo.png')}
          />
        </View>
        <Text style={styles.txtone}>Learn Smartly</Text>
        <Text style={styles.txttwo}>It’s 2022 and it’s time to learn every quickly and smartly. All books are storage in cloud and
          you can access a
          ll of them from your laptop or PC. </Text>
      </ScrollView>
    </View>
  )
}

export default OnboardTwo

const styles = StyleSheet.create({
  txtone: {
    fontFamily: 'HankenGrotesk-Regular',
    textAlign: 'center',
    margin: 7,
    marginTop: 55,
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
})