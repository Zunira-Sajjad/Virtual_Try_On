import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const WatchModelsScreen = () => {
    const navigation = useNavigation();
    const [isDialogVisible, setDialogVisible] = useState(false);
  
    const handleImageClick = () => {
      // Set the state to show the custom dialog
      setDialogVisible(true);
    };
  
    const handleDialogClose = () => {
      // Close the custom dialog
      setDialogVisible(false);
    };
  
    const handleBackPress = () => {
      navigation.goBack();
    };
  
    const handleCameraOpen = () => {
      // Close the dialog
      setDialogVisible(false);
      // Navigate to the Camera screen
      navigation.navigate('MyCamera');
    };
  

    return (
        <ImageBackground
          source={require('../main/res/drawable/background.jpg')}
          style={styles.containerBackground}
        >
          <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
              <Text style={styles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>
    
            {/* Display four images in two rows */}
            <View style={styles.imageContainer}>
              <View style={styles.row}>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try7.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try1.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                {/* Add similar TouchableOpacity components for other images */}
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try3.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try5.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                {/* Add similar TouchableOpacity components for other images */}
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try4.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImageClick}>
                  <View style={styles.imageBackground}>
                    <Image source={require('../assets/images/try2.jpg')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                {/* Add similar TouchableOpacity components for other images */}
              </View>
              <View style={styles.row}>
                {/* Add more images with TouchableOpacity components */}
              </View>
            </View>
    
       
        {/* Button */}
        <View style={styles.button} >
          <Text style={styles.buttonText}>Try your favorite watch by simply clicking on it!</Text>
        </View>


        {/* Custom Dialog */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDialogVisible}
          onRequestClose={handleDialogClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Do you want to open the camera?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButton} onPress={handleDialogClose}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handleCameraOpen}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    containerBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 8,
      zIndex: 1,
    },
    backButtonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    imageContainer: {
      marginBottom: 30,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      padding: 15,
    },
    imageBackground: {
      backgroundColor: 'black',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
    },
    button: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 8,
      width: 360,
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'purple',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalText: {
      color: 'white',
      fontSize: 18,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 8,
      marginLeft: 10,
      marginRight: 10,
      width: 100,
      alignItems: 'center',
    },
    modalButtonText: {
      color: 'purple',
      fontWeight: 'bold',
    },
  });

export default WatchModelsScreen;
