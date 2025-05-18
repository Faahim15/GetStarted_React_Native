import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInputItem from "./components/GoalInputItem";

export default function App() {
  
  const [courseGoals, setCourseGoal] = useState([]);
  const [modlaVisibility, setModalVisibility]=useState(false);
  
  const addGoalHandler = (enteredGoalText) => {
    const isDuplicate = courseGoals.some((goal) => goal === enteredGoalText);
    if (!isDuplicate)
      setCourseGoal((courseGoals) => [
        ...courseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
  }; 
  const OnDeleteGoal =(id)=>{
    setCourseGoal(currentCourseGoal=> currentCourseGoal.filter((goal)=>goal.id!==id) )
  }
  return (
    <View style={styles.appContainer}> 
    <Button onPress={()=>setModalVisibility(true)} title='Add New Goal' color='#5e0acc' />
    { modlaVisibility && <GoalInputItem visible ={ modlaVisibility } addGoalHandler={addGoalHandler}  ></GoalInputItem>}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <GoalItem OnDeleteGoal={OnDeleteGoal} goal={item} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 60,
    paddingHorizontal: 16,
  },
 
  goalsContainer: {
    flex: 4,
  },
});
