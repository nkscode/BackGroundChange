import React, {useState} from 'react';
import {
  Text, TouchableOpacity, StyleSheet,View, StatusBar
} from "react-native";

//const randomColor = "rgb(32,0,126)"



const App = () => {

  const [randomColor, setRandomColor] = useState("rgb(32,0,126)");

  const changedBG = () => {
    let color = 'rgb('+
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

      setRandomColor(color);
  }

return (
<>

<StatusBar backgroundColor={randomColor}/>


<View style = {[styles.container,{ backgroundColor : randomColor} ]} >
<TouchableOpacity onPress ={changedBG}>
<Text style = {styles.text}> Tap Me </Text>
</TouchableOpacity>

</View>
</>

);
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
justifyContent: "center"
  },

  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
  
    textTransform: "uppercase"
  }
});