import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Import FontAwesomeIcon
// import { faLCheckist } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import OnboardThree from './OnboardThree';

export default function OnboardMain() {
  const navigation = useNavigation();

  const slides = [
    {
      key: '1', // Changed key to string since keys should be unique strings
      text: 'Only Books Can Help You',
      description: 'Books can help you increase your knowledge and become more successful.',
      image: require('../images/imageone.png'),
      backgroundColor: 'white',
    },
    {
      key: '2',
      text: 'Learn Smartly',
      description: "It's 2022 and it's time to learn quickly and smartly. All books are stored in the cloud, and you can access them from your laptop or PC.",
      image: require('../images/imagetwo.png'),
      backgroundColor: 'white',
    },
    // Add more slides if needed
  ];

  const [isRealApp, setIsRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image resizeMode='contain' style={styles.slideImage} source={item.image} />
        <Text style={styles.slideText}>{item.text}</Text>
        <Text style={styles.slideDescription}>{item.description}</Text>
      </View>
    );
  };

  function onDone() {
    setIsRealApp(true);
  }

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isRealApp ? (
        <OnboardThree />
      ) : (
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          renderDoneButton={renderDoneButton}
          onDone={onDone}
          showDoneButton={true}
          activeDotStyle={{ backgroundColor: "#DE7773", width: 50 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImage: {
    height: 420,
    width: '100%',
  },
  slideText: {
    fontFamily: 'HankenGrotesk-Regular',
    textAlign: 'center',
    margin: 7,
    marginTop: 25,
    lineHeight: 36,
    color: '#292B38',
    fontSize: 24,
    fontWeight: '700',
  },
  slideDescription: {
    fontFamily: 'HankenGrotesk-Regular',
    textAlign: 'center',
    margin: 7,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    lineHeight: 18,
    color: '#4D506C',
    fontSize: 14,
    fontWeight: '400',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
