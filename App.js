import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Screens
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        imageStyle={styles.imageBackground}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15
  },
});
