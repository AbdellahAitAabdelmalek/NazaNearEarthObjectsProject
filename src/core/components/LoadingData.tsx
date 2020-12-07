import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadingData ({loadingText='Loading...'}){
 return (
          <Spinner 
            textContent={loadingText}
            textStyle={{color: colors.white,
                        textAlign: 'center'}}
          />        
    );
}
