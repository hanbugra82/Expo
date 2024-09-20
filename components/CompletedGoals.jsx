import {
  SafeAreaView,
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  FlatList,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function CompletedGoals({
  isModalVisible,
  setIsModalVisible,
  completedGoals,
  setCompletedGoals
}) {
  return (
    <>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.completedGoalsArea}>
          <View style={styles.ButtonsArea}>
            <Pressable onPress={()=> setCompletedGoals([])}>
              <Feather name="trash" style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => setIsModalVisible(false)}>
              <Feather name="x" style={styles.icon} />
            </Pressable>
          </View>
          <View style={styles.textsArea}>
            <Text style={styles.completedGoalsText}>Completed Goals</Text>
            <Text style={styles.infoText}>
              Here are the goals you have successfully completed
            </Text>
          </View>
          <View>
            <FlatList
              data={completedGoals}
              style={styles.completedGoalsListArea}
              renderItem={(goal) => {
                return (
                  <>
                    <View style={styles.completedGoalArea}>
                      <Text style={styles.completedGoalText}>
                        {goal.item.goal}
                      </Text>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  completedGoalsArea: {
    backgroundColor: "white",
    position: "absolute",
    height: "70%",
    width: "100%",
    padding: "",
    bottom: 0,
    borderColor: "#e5e7eb",
    borderWidth: 1.5,
    borderRadius: 16,
  },
  textsArea: {
    marginHorizontal: "auto",
    marginTop: 12,
  },
  completedGoalsText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  infoText: {
    fontSize: 9,
    textAlign: "center",
    color: "#9ca3af",
  },
  icon: {
    fontSize: 24,
  },
  ButtonsArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginHorizontal:6,
    marginTop:4
  },
  completedGoalsListArea: {
    marginTop: 8,
  },
  completedGoalArea: {
    marginVertical: 6,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: "6%",
    borderWidth: 2,
    borderColor: "#fca5a5",
    backgroundColor: "#f87171",
    opacity: 0.5,
  },
  completedGoalText: {
    color: "black",
  },
});
