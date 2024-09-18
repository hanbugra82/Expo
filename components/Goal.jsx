import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Goal({ goal, removeGoalHandler }) {

  return (
    <>
      <View key={goal.index} style={styles.goalArea}>
        <View id="goal-text">
          <View style={styles.goalTextArea}>
            <Pressable>
              <Feather name="square" style={styles.icon} />
            </Pressable>
            <Text style={styles.goalText}>{goal.goal}</Text>
          </View>
        </View>
        <View id="icons" style={styles.iconsArea}>
          <Pressable>
            <Text>
              <Feather name="edit-2" style={styles.icon} />
            </Text>
          </Pressable>
          <Pressable onPress={removeGoalHandler.bind(this, goal.id)}>
            <Text>
              <Feather name="trash" style={styles.icon} />
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goalArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dbeafe",
    marginVertical: 6,
    padding: 12,
    borderRadius: "6%",
    borderWidth: 2,
    borderColor: "#bfdbfe",
    opacity: 0.5,
  },
  goalTextArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  goalText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  iconsArea: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    fontSize: 16,
  },
  editGoalArea: {
    borderBottomWidth: 2,
    fontWeight: "600",
    fontSize: 16,
  },
});
