import { StyleSheet, Text, Image, View, StatusBar } from "react-native";
import React from "react";

import i18n from "../i18n";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.homeSection}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/education.jpg")}
          resizeMode="contain"
        />
        <Text style={[styles.imageTitle, styles.textStyle]}>
          Welcome to education plaform to learn cources
        </Text>
        <Text style={[styles.description, styles.textStyle]}>{i18n.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  homeSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageStyle: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  textStyle: {
    color: "#344055",
    marginTop: 10,
    textAlign: "center",
  },
  imageTitle: {
    textTransform: "uppercase",
    fontSize: 20,
  },
  description: {
    fontSize: 18,
  },
});
