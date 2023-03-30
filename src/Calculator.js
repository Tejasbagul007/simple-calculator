import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  //const [operator, setOperator] = useState(null);

  const handleInput = (value) => {
    if (value === "C") {
      setResult(0);
      setInput("");
    } else if (value === "DEL") {
      setInput(input.substring(0, input.length - 1));
    } else if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Invalid input");
      }
      setInput("");
    } else if (isNaN(value)) {
      if (
        input.slice(-1) === "+" ||
        input.slice(-1) === "-" ||
        input.slice(-1) === "*" ||
        input.slice(-1) === "/"
      ) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  // const handleInput = (value) => {
  //   if (value === "C") {
  //     setResult(0);
  //     setInput("");
  //     setOperator(null);
  //   } else if (value === "DEL") {
  //     setInput(input.substring(0, input.length - 1));
  //   } else if (value === "=") {
  //     if (operator) {
  //       const res = input + operator + input;
  //       setResult(eval(res));
  //       setInput("");
  //       setOperator(null);
  //     }
  //   } else if (isNaN(value)) {
  //     if (operator) {
  //       setInput(input.substring(0, input.length - 1) + value);
  //       setOperator(value);
  //     } else {
  //       setInput(input + value);
  //       setOperator(value);
  //     }
  //   } else {
  //     setInput(input + value);
  //   }
  // };

  const buttons = [
    "C",
    "DEL",
    "/",
    "*",
    "+",
    "-",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    ".",
    "0",
    "="
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.Tejas}>Simple Calculator</Text>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            onPress={() => handleInput(button)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Tejas: {
    backgroundColor: "skyblue",
    fontWeight: 30,
    fontSize: 30,
    alignItem: "center",
    justifyContent: "center",
    padding: 10,
    margin: 20
  },
  result: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20
  },
  resultText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20
  },
  inputText: {
    fontSize: 20
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "skyblue",
    margin: 10,
    padding: 8
  },
  button: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "12%",
    minWidth: "28%",
    margin: 4,
    borderRadius: 6,
    borderWidth: 2
  },
  buttonText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  }
});
