import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";
const GoalInputItem = ({ addGoalHandler, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"

        />
        <Button
          onPress={() => (
            addGoalHandler(enteredGoalText), setEnteredGoalText(" ")
          )}
          title="ADD GOAL"
        />
      </View>
    </Modal>
  );
};
export default GoalInputItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
