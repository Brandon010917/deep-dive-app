import { StyleSheet, Text } from "react-native";

// Constants
import COLORS from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: COLORS.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 12,
  },
});

export default Title;
