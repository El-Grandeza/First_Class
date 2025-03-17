import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={{ fontSize: 22 }}>Grandeza</Text>
      </View>
      <View style={{ marginTop: 80 }}>
        <Image
          source={require("../assets/images/Our pix/bro.png")}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <View style={{ marginTop: 30, width: 300 }}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>
          The first bank without a bank
        </Text>
      </View>

      <View style={{ width: 200 }}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          Join the nobank experience, entirely online, no jokes
        </Text>
      </View>

      <TouchableOpacity style={{ alignSelf: "center", marginTop: 120 }}>
        <Text
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: 30,
            textAlign: "center",
            textAlignVertical: "center",
            width: 150,
            height: 50,
          }}
        >
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 40,
  },
});
