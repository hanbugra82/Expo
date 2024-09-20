import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import { useState } from "react";
import { mainContext } from "./context/MainContext";
import Goals from "./components/Goals";

export default function App() {
  const [pressed, setIsPressed] = useState(false);
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  function addGoalHandler() {
    const date = new Date();
    if (text !== "") {
      setGoals((currentGoals) => [
        ...currentGoals,
        {
          id: date.getMilliseconds() * date.getSeconds(),
          goal: text,
          date: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
        },
      ]);
      setText("");
    }
  }

  function removeGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function editGoalHandler(id, newGoalText){
    setGoals( goals.filter((g)=>{
      return g.id === id ? {...g, goal: newGoalText} : g
    }));  
  }

  const data = {
    goals,
    removeGoalHandler,
    editGoalHandler
  };

  return (
    <>
      <mainContext.Provider value={data}>
        <SafeAreaView>
          <Header />
          <InputArea
            pressed={pressed}
            setIsPressed={setIsPressed}
            text={text}
            setText={setText}
            addGoalHandler={addGoalHandler}
          />
          <Goals />
        </SafeAreaView>
      </mainContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({});
