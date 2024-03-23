// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const MySplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const init = async () => {
      // Simulate any asynchronous initialization tasks here
      await someAsyncInitializationTask();

      // After initialization, hide the splash screen and call the onFinish callback
      SplashScreen.hide();
      onFinish();
    };

    init();
  }, [onFinish]);

  const someAsyncInitializationTask = async () => {
    // Simulate a 2-second initialization task
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../main/res/drawable/launch_screen2.png')}
        style={styles.splashImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  splashImage: {
    width: '70%',
    height: '30%',
  },
});

export default MySplashScreen;
