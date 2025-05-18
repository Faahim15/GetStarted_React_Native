import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = ( {goal,OnDeleteGoal} ) => {
  return ( 
    <View style={styles.goalItem}>
    <Pressable android_ripple={{color:'#dddddd'}} onPress={()=>OnDeleteGoal(goal.id)} >
      
        <Text style={styles.goalText}>{goal.text}</Text>
      
    </Pressable> 
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
     
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
