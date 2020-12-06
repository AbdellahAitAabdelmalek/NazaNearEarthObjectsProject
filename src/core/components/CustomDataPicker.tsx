import React, {useState} from 'react';
import {View, Button,Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from '../theme/colors'

interface dataPickerProps{
  datePickerText: string;
  defaultMode?: "date" | "time";
  isVisible?: boolean;
  date: Date;
  onDateChanges: (selectedDate: Date) => void;
}
export default function CustomDatePicker (props: dataPickerProps ) {
  const [mode, setMode] = useState<"date" | "time">( 'date');
  const [show, setShow] = useState<boolean>(false);
  const [localDate, setLocalDate] = useState<Date>(props.date);
  // pour quoi le event type n'est pas le même 
  const onChange = (event: any, selectedDate: Date | undefined) => {
    setShow(Platform.OS === 'ios');
   if (selectedDate){
    props.onDateChanges(selectedDate);
    setLocalDate(selectedDate);
   }
  };

  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={{ flexDirection:'row'}}>
      <Button onPress={()=>showMode('date')} title={props.datePickerText} />
      <Text style={{fontSize:16, color:colors.white}}> Date : {localDate.toDateString()} </Text>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};