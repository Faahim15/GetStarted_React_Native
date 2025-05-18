import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() { 
   const [enteredGoalText,setEnteredGoalText]=useState(''); 
   const [courseGoals, setCourseGoal] = useState([]); 

   const goalInputHandler=enteredText=>{
      setEnteredGoalText(enteredText)
   } 
   const addGoalHandler=()=>{ 
      const isDuplicate = courseGoals.some(goal => goal === enteredGoalText) 
      if(!isDuplicate)
      setCourseGoal(courseGoals =>[...courseGoals,enteredGoalText]); 
   }
  return (
    <View style={styles.appContainer} > 
     <View style={styles.inputContainer} > 
      <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal!" />
      <Button onPress={addGoalHandler} title='ADD GOAL' />
     </View> 
     <View style={styles.goalsContainer} >
       
       {
        courseGoals.map((goal,id)=><Text style={styles.goalItem} key={id}>{goal}</Text>)
       }
     </View> 
    </View>
  );
}

const styles = StyleSheet.create({
     appContainer:{ 
       flex:1,
       padding:60,
       paddingHorizontal: 16
     },
     inputContainer:{ 
      flex: 1,
      flexDirection:'row', 
      justifyContent: 'space-between',
      alignItems:'center',
      marginBottom:24,
      borderBottomWidth:1,
      borderColor:'#cccccc'
      
     }, 
    textInput:{
      borderWidth: 1,
      borderColor:'#cccccc',
      width:'70%',
      marginRight: 8,
      padding: 8, 

    },
    goalsContainer:{
      flex: 4,
      
    }, 
    goalItem: {
      margin: 8,
      padding: 8, 
      borderRadius: 6, 
      backgroundColor: '#5e0acc', 
      color: 'white',
    }
});
