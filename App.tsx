import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";
import Course from "./screens/course";
import User from "./screens/user";

type RootStackParamList = {
  Home: undefined;
  Course: undefined;
  Contact: undefined;
  User: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
