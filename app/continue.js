import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.bod}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Welcome</Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Continue your path
      </Text>
      <Text style={{ marginTop: 20 }}>Email</Text>

      <TextInput
        style={{
          width: "100%",
          height: 50,
          marginTop: 10,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      />
      <Text style={{ marginTop: 20 }}>Password</Text>

      <TextInput
        style={{
          width: "100%",
          height: 50,
          marginTop: 10,
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/Our pix/tick.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <Text>Remember me</Text>
        </View>
        <Text>Forgot Password?</Text>
      </View>
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
          Login
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginTop: 10, fontSize: 16 }}>
        Or
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          height: 60,
          width: "100%",
          borderColor: "black",
          borderRadius: 10,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/facebook.png")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Login With Facebook</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          height: 60,
          width: "100%",
          borderColor: "black",
          borderRadius: 10,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/google.jpg")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Login With Google</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          height: 60,
          width: "100%",
          borderColor: "black",
          borderRadius: 10,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/apple.png")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Login With Apple</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>Don't Have an Account?</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40, color: "red", fontWeight: "900" }}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  bod: { padding: 40, marginTop: 30 },
});
