import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { mainContext, useContext } from "../context/MainContext";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function Goal({ goal }) {
  const { removeGoalHandler, editGoalHandler, setGoals, setCompletedGoals } =
    useContext(mainContext);
  const [g, setG] = useState(goal.goal);
  const [goalId, setGoalId] = useState(goal.id);
  const [isEdited, setIsEdited] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  function updateGoal() {
    setIsEdited(false);
    editGoalHandler(goal.id, g);
  }
  function addCompletedGoalHandler() {
    setIsCompleted(!isCompleted);

    setCompletedGoals((currentCompletedGoals) => [
      ...currentCompletedGoals,
      {
        goal: g,
      },
    ]);

    setTimeout(() => {
      setGoals((currentGoals) => {
        return currentGoals.filter((c) => c.id !== goalId);
      });
    }, 500);
  }
  return (
    <>
      <View
        key={goal.index}
        style={[
          styles.goalArea,
          { backgroundColor: isCompleted ? "#f87171" : "#dbeafe" },
        ]}
      >
        <View id="goal-text">
          <View style={styles.goalTextArea}>
            <Checkbox
              value={isCompleted}
              onValueChange={() => addCompletedGoalHandler()}
            />
            {isEdited ? (
              <>
                <TextInput
                  style={styles.editGoalArea}
                  value={g}
                  onChangeText={(txt) => setG(txt)}
                  placeholder="Edit your goal"
                />
              </>
            ) : (
              <>
                <Text
                  style={[
                    styles.goalText,
                    {
                      textDecorationLine: isCompleted ? "line-through" : "none",
                    },
                  ]}
                >
                  {g}
                </Text>
              </>
            )}
          </View>
        </View>
        <View id="icons" style={styles.iconsArea}>
          {isEdited ? (
            <>
              <Pressable onPress={() => updateGoal()}>
                <Text>
                  <Feather name="check" style={styles.icon} />
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable onPress={() => setIsEdited(true)}>
                <Text>
                  <Feather name="edit-2" style={styles.icon} />
                </Text>
              </Pressable>
            </>
          )}
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
