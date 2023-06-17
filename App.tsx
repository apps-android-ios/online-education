import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_300Light,
} from "@expo-google-fonts/josefin-sans";

import AppLoading from "expo-app-loading";
import { SWRConfig } from "swr";
import swrConfig from "./swr-config";

import Navigation from "./routes/navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    JosefinSans_300Light,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <SWRConfig value={swrConfig}>
      <Navigation />
    </SWRConfig>
  );
}
