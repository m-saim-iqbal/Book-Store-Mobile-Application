import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}} >
      <ImageBackground
        resizeMode='stretch'
        style={{ height: 300, width: "100%" }}
        source={require('../images/Vector2.png')}
      >
        <View style={styles.topwrapper}>
          <Image
            resizeMode='stretch'
            style={{ height: 200, width: 150, marginLeft: 15 }}
            source={require('../images/book1.png')}
          />
          <View style={{
            flexDirection: 'column', flexShrink: 1,
            flex: 1,
            marginLeft: 20,
            marginRight: 10,
            marginTop: 20
          }}>
            <Text style={{
              fontFamily: 'HankenGrotesk-Regular',
              fontWeight: '700',
              color: 'white',
              flexShrink: 1,
              fontSize: 15
            }}>The Psychology of Money</Text>
            <Text style={{
              fontFamily: 'HankenGrotesk-Regular',
              fontWeight: '400',
              color: '#DDDDE2',
              fontSize: 10,
              flexShrink: 1,
              marginTop: 10,
            }}>The psychology of money is the study of our behavior
              with money. Success with money isn't about knowledge,
              IQ or how good you are at math. It's about behavior,
              and everyone is prone to certain behaviors over others.
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{
        margin: 20
      }}>
        <Text
          style={{
            color: '#4D506C',
            fontSize: 18,
            fontWeight: '800',
            fontFamily: 'HankenGrotesk-Regular',
          }}
        >
          About The Book
        </Text>
        <Text
          style={{
            color: '#4D506C',
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'HankenGrotesk-Regular',
            marginTop: 15,
          }}
        >
          'The Psychology of Money' is an essential read for anyone interested in being better with money.
          Fast-paced and engaging, this book will help you refine your thoughts towards money.
          You can finish this book in a week, unlike other books that are too lengthy.

          The most important emotions in relation to money are fear, guilt, shame and envy.
          It's worth spending some effort to become aware of the emotions that are especially tied to money for you because,
          without awareness, they will tend to override rational thinking and drive your actions.
        </Text>
      </View>

      <View style={{
        margin: 20
      }}>
        <Text
          style={{
            color: '#4D506C',
            fontSize: 18,
            fontWeight: '800',
            fontFamily: 'HankenGrotesk-Regular',
            marginBottom: 15
          }}
        >
          News
        </Text>
        <Image
            source={require('../images/rectangle3.png')}
          />
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  topwrapper: {
    margin: 15,
    marginTop: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})