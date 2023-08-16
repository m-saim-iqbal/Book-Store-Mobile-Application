import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


const Splash = () => {
  // const dimensions = Dimensions.get('window');
  // const ratio = dimensions.width/1712
  return (
    <View style={{ flex: 1}}>

    <Image
    style={{width: '100%',height: '100%'}}
    source={require('../images/Splash.png')}
    />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  SplashWrapper: {
    flex: 1
  },
})