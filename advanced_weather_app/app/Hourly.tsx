import { useState } from "react";
import CProgressBar from "./CProgressBar";
import { View } from "react-native";
import { Text } from "react-native-paper";
import getWeatherCode from "./weatherCodes";

export const truncate = (str: string, maxLength: number = 10) =>
  str.length > maxLength ? str.slice(0, maxLength) + "…" : str;

interface HourlyProps {
  hourly: {
    time: Date;
    temperature_2m: number | undefined;
    weather_code: number | undefined;
    wind_speed_10m: number | undefined;
  }[];
}

const HourlyData = ({ hourly }: HourlyProps) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {!!hourly.length &&
        hourly.map((h, i) => {
          return (
            <View key={`hourly_detailed_${i}`}>
              <Text>
                {h.time.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Text>{h.temperature_2m?.toFixed(1)}°C</Text>
              <Text>{h.wind_speed_10m?.toFixed(1)}km/h</Text>
              <Text>{truncate(getWeatherCode(h.weather_code), 10)}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default HourlyData;
