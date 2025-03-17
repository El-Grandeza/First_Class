import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.box}>
      <View
        style={{
          marginTop: 150,
          backgroundColor: "white",
          marginHorizontal: 40,
          borderRadius: 30,
          height: 200,
          width: 320,
        }}
      ></View>
      <View
        style={{
          marginTop: 50,
          backgroundColor: "white",
          marginHorizontal: 40,
          borderRadius: 30,
          height: 200,
          width: 320,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          gap: 30,
          marginHorizontal: 40,
          marginTop: 130,
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 80,
            width: 80,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "white",
            height: 80,
            width: 80,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "orange",
            height: 80,
            width: 80,
            borderRadius: 10,
          }}
        ></View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  box: {
    padding: 40,
    backgroundColor: "teal",
    flex: 1,
  },
});
