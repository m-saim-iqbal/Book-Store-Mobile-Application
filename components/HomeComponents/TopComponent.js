import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopComponent = () => {
  return (
     <View style={{ flex: 1, marginBottom: 150 }}>
        <ImageBackground
          resizeMode='contain'
          style={{ height: 500, width: "100%" }}
          source={require('../images/Vector.png')}
        >
          <View style={{}}>
            <Text style={styles.toptxt}>Book of the week</Text>
            <View style={styles.topwrapper}>
              <Image
                resizeMode='stretch'
                style={{ height: 200, width: 150, marginLeft: 15 }}
                source={{ uri: randomBook?.image }}
              />
              <View style={{
                flexDirection: 'column', flexShrink: 1,
                flex: 1,
                marginLeft: 20,
                marginRight: 10,
                marginTop: 40
              }}>
                <View>

                  <Text style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '700',
                    color: '#4D506C',
                    flexShrink: 1,
                    fontSize: 15
                  }}>{randomBook?.title}</Text>
                  <Text style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '400',
                    color: '#9091A0',
                    fontSize: 10,
                    flexShrink: 1,
                    marginTop: 10,
                  }}>
                    {randomBook?.author}
                  </Text>
                  <Text style={{
                    fontFamily: 'HankenGrotesk-Regular',
                    fontWeight: '400',
                    color: '#9091A0',
                    fontSize: 10,
                    flexShrink: 1,
                    marginTop: 10,
                  }}>
                    {randomBook?.summary}
                  </Text>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                    <Pressable style={styles.pressablebtn} >
                      <Text style={styles.pressabletxt}>Grab Now</Text>
                    </Pressable>
                    <Pressable style={styles.pressablebtn2} >
                      <Text style={styles.pressabletxt2}>Learn More</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View >
  )
}

export default TopComponent

const styles = StyleSheet.create({})