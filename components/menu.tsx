import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../types";

const Menu = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.manuStyle}>
      <View style={styles.lineStyle}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency/48/home.png",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Course")}>
          <Image
            source={{
              uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-courses-recruitment-agency-flaticons-lineal-color-flat-icons.png",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Image
            source={{
              uri: "https://img.icons8.com/parakeet/48/contact-card.png",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/user.png",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Image
            source={{
              uri: "https://img.icons8.com/office/16/about.png",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingVertical: 20,
  },
  iconStyle: {
    width: "100%",
    height: 30,
    aspectRatio: 1,
  },
  manuStyle: {
    width: "100%",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#ebebeb",
  },
});
