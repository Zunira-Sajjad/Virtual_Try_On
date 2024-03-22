import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';

const MyCamera = () => {
  const devices = useCameraDevices();
  const device = devices.back; // use the back camera
  const camera = useRef(null);
  const [imageUri, setImageUri] = useState(null);

  const takePicture = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      setImageUri(photo.path);
    }
  };

  if (device == null || device.cameraPermissionStatus !== CameraPermissionStatus.AUTHORIZED) {
    return (
      <View style={styles.container}>
        <Text>No camera access. Check permissions.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <TouchableOpacity
        style={styles.captureButton}
        onPress={takePicture}
      >
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>
      {imageUri && <Text>Photo taken!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF0037',
    position: 'absolute',
    bottom: 50,
  },
  captureButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyCamera;
