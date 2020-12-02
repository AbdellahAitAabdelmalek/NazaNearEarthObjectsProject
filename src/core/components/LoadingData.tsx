import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadingData (){
 return (
        <View style={styles.container}>
          <Spinner
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />        
        </View>
    );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});