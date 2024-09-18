import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import Goal from "./Goal";

export default function Goals({
  goals,
  removeGoalHandler,
}) {
  return (
    <>
      <View style={styles.goalsArea}>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            return (
              <Goal
                goal={goal.item}
                removeGoalHandler={removeGoalHandler}
              />
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goalsArea: {
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
});
