import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { EpicReviewProps } from './EpicReview.interface';
import {Text, StyleSheet , Picker, View, Button,Image} from 'react-native';
import CustomDatePicker from '../../core/components/CustomDataPicker';
import {EpicListComponent} from '../../modules/Epic/components/EpicListComponent'
import LoadingData from '../../core/components/LoadingData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


export const EpicReview: FunctionComponent<EpicReviewProps> = ({ navigation }) => {
  
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<string>('natural');

    return (
      <SafeAreaView  style={styles.container}>
            <View style={{flex:1, alignItems:'stretch'}}>
              <CustomDatePicker date={date} onDateChanges={(selectedDate:Date)=>setDate(selectedDate)} 
                datePickerText="Choose the Picture Date"/>
            </View>  
            <View style={{flex:1, flexDirection:'row', alignItems:'stretch'}}>
              <Text style={{fontSize:16, color:colors.white}}>Choose the Picture mode : </Text>
              <Picker selectedValue={mode} 
                      style={styles.picker} 
                      onValueChange={(itemValue) => setMode(itemValue)}>
                <Picker.Item label="Natural"  value="natural" />
                <Picker.Item label="Enhanced" value="enhanced" />
              </Picker>
            </View>     
            <View style={{ flex:8}}>
              <EpicListComponent date={date} mode={mode}/>
            </View>       
      </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
  },
  picker: { 
    height: 30, 
    width: 150, 
    fontSize: 20, 
    backgroundColor:colors.nightRider, 
    color: colors.lightBlue }
});
