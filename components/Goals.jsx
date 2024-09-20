import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import Goal from "./Goal";
import { mainContext, useContext } from "../context/MainContext";

export default function Goals() {
  const {goals, removeGoalHandler} = useContext(mainContext);

  return (
    <>
      <View style={styles.goalsArea}>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            return (
              <Goal
                goal={goal.item}
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
