import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import Course from "../screens/course";
import User from "../screens/user";
import CourseDetails from "../screens/course-details";
import Menu from "../components/menu";
import type { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "left",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
            },
          }}
        />
      </Stack.Navigator>
      <Menu />
    </NavigationContainer>
  );
}
