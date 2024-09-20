import { Text, View, StyleSheet, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
export default function Header({ setIsModalVisible }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Welcome Back!</Text>
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Feather name="align-justify" style={styles.icon} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  icon: {
    fontSize: 24,
  },
  greetingText: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
