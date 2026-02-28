import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";

interface Props {
  progress: number;
}

const CProgressBar = ({ progress }: Props) => {
  return <ProgressBar progress={progress} color="#534DB3" />;
};

export default CProgressBar;
