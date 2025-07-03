import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.bos}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Welcome</Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Discover your path
      </Text>
      <Text style={{ marginTop: 20 }}>Name</Text>

      <View
        style={{
          width: "100%",
          height: 50,
          marginTop: 10,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      ></View>
      <Text style={{ marginTop: 20 }}>Name</Text>
      <TextInput
        style={{
          width: "100%",
          height: 50,
          marginTop: 40,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      />
      <Text style={{ marginTop: 20 }}>Name</Text>
      <TextInput
        style={{
          width: "100%",
          height: 50,
          marginTop: 40,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      />
      <Text style={{ marginTop: 20 }}>Name</Text>
      <View
        style={{
          width: "100%",
          height: 50,
          marginTop: 40,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      ></View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 60,
          marginTop: 40,
          borderRadius: 20,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.4}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, textAlign: "center", marginTop: 17 }}>
        By clicking on sign up, you accept our terms of service and privacy
        policy
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>Already Have an Account?</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40, color: "red", fontWeight: "900" }}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  bos: { padding: 40, marginTop: 50 },
});
