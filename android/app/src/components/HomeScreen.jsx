// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const HomeScreen = ({ navigation, showButton }) => {
  return (
    <ImageBackground
      source={require('../main/res/drawable/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.aboutUsContainer}>
          <Text style={styles.aboutUsTitle}>About Us</Text>
          <Text style={styles.aboutUsText}>
            Welcome to Virtual Watch Try On! Explore our collection of virtual watches and try them on in the comfort of your home.
          </Text>
        </View>

        {showButton && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WatchModels')}
          >
            <Text style={styles.buttonText}>Try Watch Model</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutUsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutUsTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutUsText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
