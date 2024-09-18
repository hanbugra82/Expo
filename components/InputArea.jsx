import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
export default function InputArea({ pressed, setIsPressed, text, setText, addGoalHandler }) {
  return (
    <>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Add Goal"
          value={text}
          onChangeText={(txt) => setText(txt)}
        ></TextInput>
        <Pressable
          onPress={() => {
            setIsPressed(!pressed);
            addGoalHandler();
          }}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#065f46" : "#059669" },
            styles.addButton,
          ]}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 12,
    gap: 8,
  },
  input: {
    width: "75%",
    borderWidth: 2,
    borderColor: "#eff6ff",
    borderRadius: 4,
    padding: 8,
  },
  addButton: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6%",
  },
  addButtonText: {
    color: "white",
    fontWeight:"semibold"
  },
});
