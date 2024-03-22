import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MySplashScreen from './android/app/src/components/MySplashScreen';
import HomeScreen from './android/app/src/components/HomeScreen';
import WatchModelsScreen from './android/app/src/components/WatchModelsScreen'; 
import MyCamera from './android/app/src/components/MyCamera'; 

const Stack = createStackNavigator();

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hideSplashScreen = () => {
      setShowButton(true);
    };

    // Set the duration to 3000 milliseconds (3 seconds)
    const splashScreenTimeout = setTimeout(hideSplashScreen, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(splashScreenTimeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!showButton ? (
          <Stack.Screen
            name="Splash"
            component={MySplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
          <Stack.Screen
              name="Home"
              component={(props) => <HomeScreen {...props} showButton={showButton} />}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WatchModels"
              component={WatchModelsScreen}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="MyCamera"
              component={MyCamera}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
