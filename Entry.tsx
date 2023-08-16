import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash from './components/Splash'
import OnboardMain from './components/OnboardMain'

const Entry = () => {

  const [isSplash, setIsSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsSplash(false), 2000)
  }, [])

  return (
    <View style={{flex: 1}}>
      {
        isSplash ?
        <Splash />
        :
        <OnboardMain />
      }
    </View>
  )
}

export default Entry

const styles = StyleSheet.create({})