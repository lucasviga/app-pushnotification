import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App() {
  useEffect(() => {
    OneSignal.init('0760b424-f6cd-4a7b-acc1-5ac06a997b9c');
    OneSignal.addEventListener('opened', onOpened);
  }, []);

  const onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('openResult: ', openResult);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.sectionDescription}>
          Testando notificação.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
