import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { Courses } from "../data";
import { CoursesProps } from "../types/global";
import { RootStackParamList } from "../types";

type StakeScreenProps = StackScreenProps<RootStackParamList, "Course">;

const Course = ({ navigation }: StakeScreenProps) => {
  function CourseCard({ item }: { item: CoursesProps }) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.coursesConatiner}>
          <View>
            <Image
              style={styles.cardImg}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <View style={styles.cardButton}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={Courses}
        renderItem={CourseCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 25,
  },
  coursesConatiner: {
    padding: 30,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 1,
    marginVertical: 20,
  },
  cardImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  cardTitle: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    paddingTop: 5,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  cardDescription: {
    fontFamily: "JosefinSans_400Regular",
    textAlign: "left",
    paddingBottom: 15,
    lineHeight: 20,
    color: "#7d7d7d",
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
});
