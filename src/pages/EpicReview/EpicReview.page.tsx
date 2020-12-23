import { colors } from "../../core/theme/colors";
import React, { FunctionComponent, useState, useContext } from "react";
import { Text, StyleSheet, Picker, View, Button } from "react-native";
import { EpicListComponent } from "../../modules/Epic/components/EpicListComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  ContextProvider,
  StateContext,
  DispatchContext,
} from "./EpicReview.hooks";

export const EpicReview: FunctionComponent = () => {
  return (
    <ContextProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: "stretch" }}>
          <CustomDatePicker datePickerText='Choose the Picture Date' />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
          <CustomPicker />
        </View>
        <View style={{ flex: 8 }}>
          <EpicListComponent />
        </View>
      </SafeAreaView>
    </ContextProvider>
  );
};
const CustomPicker = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error("CustomDatePicker must be used within a Dispatch Provider");
  }
  if (state === undefined) {
    throw new Error("CustomDatePicker must be used within a States Provider");
  }

  return (
    <>
      <Text style={{ fontSize: 16, color: colors.white }}>
        Choose the Picture mode :{" "}
      </Text>
      <Picker
        selectedValue={state.mode}
        style={styles.picker}
        onValueChange={(itemValue) =>
          dispatch({ type: "changeMode", payload: itemValue })
        }
      >
        <Picker.Item label='Natural' value='natural' />
        <Picker.Item label='Enhanced' value='enhanced' />
      </Picker>
    </>
  );
};
const CustomDatePicker = (props: { datePickerText: string }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [show, setShow] = useState<boolean>(false);
  if (dispatch === undefined) {
    throw new Error("CustomDatePicker must be used within a Dispatch Provider");
  }
  if (state === undefined) {
    throw new Error("CustomDatePicker must be used within a State Provider");
  }

  // pour quoi le event type n'est pas le même
  const onChange = (selectedDate: Date | undefined) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) {
      dispatch({ type: "changeDate", payload: selectedDate });
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Button onPress={() => setShow(true)} title={props.datePickerText} />
      <Text style={{ fontSize: 16, color: colors.white }}>
        {" "}
        Date : {state.date.toDateString()}{" "}
      </Text>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={state.date}
          mode={"date"}
          is24Hour={true}
          display='default'
          onChange={() => onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: "center",
  },
  picker: {
    height: 30,
    width: 150,
    fontSize: 20,
    backgroundColor: colors.nightRider,
    color: colors.lightBlue,
  },
});
