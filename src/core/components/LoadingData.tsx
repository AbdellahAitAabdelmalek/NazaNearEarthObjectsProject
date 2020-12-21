import { colors } from "../../core/theme/colors";
import React, { ReactElement } from "react";
import Spinner from "react-native-loading-spinner-overlay";

export default function LoadingData(loadingText = "Loading..."): ReactElement {
  return (
    <Spinner textContent={loadingText} textStyle={{ color: colors.white }} />
  );
}
