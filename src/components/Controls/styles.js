import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    backgroundColor: "#000000",
    padding: "1%"
  },
  pretender: {
    backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: '#00fff',
    width: "23%",
    margin: "1%"
  },
  double: {
    width: "48%"
  },
  darkgrey: {
    backgroundColor: "#333333"
  },
  lightgrey: {
    backgroundColor: "#A6A6A6"
  },
  orange: {
    backgroundColor: "#FF9230"
  }
});

export default styles;
