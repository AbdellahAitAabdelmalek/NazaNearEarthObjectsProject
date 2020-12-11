import { colors } from "../../core/theme/colors";
import React, {
  FunctionComponent,
  useState,
  useReducer,
  useContext,
} from "react";
import { EpicReviewProps } from "./EpicReview.interface";
import { Text, StyleSheet, Picker, View, Button, Image } from "react-native";
import { EpicListComponent } from "../../modules/Epic/components/EpicListComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface action {
  type: string;
  payload: any;
}

interface states {
  date: Date;
  mode: string;
}
const appReducer = (
  states: { date: Date; mode: string },
  action: action
): states => {
  switch (action.type) {
    case "changeDate":
      states.date = action.payload;
      return { ...states };
    case "changeMode":
      states.mode = action.payload;
      return { ...states };
    default:
      return { ...states };
  }
};

export const MyContext = React.createContext([
  { date: new Date(), mode: "enhanced" },
]);

export const EpicReview: FunctionComponent<EpicReviewProps> = ({
  navigation,
}) => {
  const [states, dispatch] = useReducer(appReducer, {
    date: new Date(),
    mode: "enhanced",
  });
  return (
    <MyContext.Provider value={[states, dispatch]}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: "stretch" }}>
          <CustomDatePicker datePickerText="Choose the Picture Date" />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
          <Text style={{ fontSize: 16, color: colors.white }}>
            Choose the Picture mode :{" "}
          </Text>
          <Picker
            selectedValue={states.mode}
            style={styles.picker}
            onValueChange={(itemValue) =>
              dispatch({ type: "changeMode", payload: itemValue })
            }
          >
            <Picker.Item label="Natural" value="natural" />
            <Picker.Item label="Enhanced" value="enhanced" />
          </Picker>
        </View>
        <View style={{ flex: 8 }}>
          <EpicListComponent />
        </View>
      </SafeAreaView>
    </MyContext.Provider>
  );
};

const CustomDatePicker = (props: { datePickerText: string }) => {
  const [states, dispatch] = useContext(MyContext);
  const [show, setShow] = useState<boolean>(false);

  // pour quoi le event type n'est pas le même
  const onChange = (event: any, selectedDate: Date | undefined) => {
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
        Date : {states.date.toDateString()}{" "}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={states.date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
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
