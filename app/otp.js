import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.box}>
      <View
        style={{ flexDirection: "row", justifyContent: "centers", padding: 30 }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/left.png")}
            style={{
              width: 50,
              height: 40,
              backgroundColor: "black",
              tintColor: "white",
              padding: 10,
            }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 27, fontWeight: "bold", marginLeft: 30 }}>
          OTP Code Verification
        </Text>
      </View>

      <View>
        <Text style={{ textAlign: "center", fontSize: 18, marginVertical: 40 }}>
          Code has been sent to +23490******10
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              width: 50,
              textAlign: "center",
              textAlignVertical: "center",
              height: 30,
            }}
          >
            8
          </Text>
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              width: 50,
              textAlign: "center",
              textAlignVertical: "center",
              height: 30,
            }}
          >
            8
          </Text>
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              width: 50,
              textAlign: "center",
              textAlignVertical: "center",
              height: 30,
            }}
          >
            8
          </Text>
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              width: 50,
              textAlign: "center",
              textAlignVertical: "center",
              height: 30,
            }}
          >
            8
          </Text>
        </View>

        <View style={{ marginVertical: 60 }}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            Resend Code in 55s
          </Text>
        </View>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text
            style={{
              width: 350,
              fontSize: 20,
              textAlignVertical: "center",
              borderRadius: 20,
              height: 50,
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  box: {
    padding: 40,
    marginVertical: 100,
  },
});
