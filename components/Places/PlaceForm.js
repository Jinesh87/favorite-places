import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import ImagePicker from "./ImagePicker";
import { Colors } from "../../constants/colors";


function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    return (
        <ScrollView>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={changeTitleHandler}
                    value={enteredTitle}
                />
            </View>
            <ImagePicker />
        </ScrollView>
    );
}
export default PlaceForm;
const styles = StyleSheet.create({
    form: {
      flex: 1,
      padding: 24,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 4,
      color: Colors.primary500,
    },
    input: {
      marginVertical: 8,
      paddingHorizontal: 4,
      paddingVertical: 8,
      fontSize: 16,
      borderBottomColor: Colors.primary700,
      borderBottomWidth: 2,
      backgroundColor: Colors.primary100,
    },
  });