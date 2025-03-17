import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 40,
            color: "white",
            fontWeight: "600",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Log in
        </Text>
      </View>

      {/*Text input */}

      <View>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"white"}
          style={{
            borderWidth: 1,
            borderColor: "white",
            paddingLeft: 20,
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={"white"}
          style={{ borderWidth: 1, borderColor: "white", paddingLeft: 20 }}
        />
      </View>

      {/*CHECKBOX AND TEXT*/}

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.3}>
          <Image
            source={require("../assets/images/Our pix/tickk.png")}
            style={{ width: 30, height: 30, tintColor: "white" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            fontWeight: "400",
            fontSize: 20,
            marginTop: 0,
            paddingLeft: 9,
          }}
        >
          Remember me for 30 days
        </Text>
      </View>

      {/*LOGIN BUTTON*/}

      <TouchableOpacity
        style={{
          borderRadius: 2,
          borderColor: "white",
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            padding: 15,
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        or
      </Text>

      {/*SIGN IN*/}

      <TouchableOpacity
        style={{
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 5,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 9,
        }}
      >
        <Image
          source={require("../assets/images/Our pix/goo.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: 10,
            marginLeft: 0,
          }}
        >
          Sign in with Google
        </Text>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Forgot your password?
        </Text>
      </View>

      {/* <Button
          touchSoundDisabled={false}
          title="Go"
          color={"pink"}
          accessibilityLabel="Learn more about this purple button"
          onPress={() => {
            alert("Cart added!");
          }}
        ></Button> */}
      {/* <Pressable>
          <Text style={{ fontSize: 30 }}>Go</Text>
        </Pressable> */}
      {/* <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
  
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={"orange"}
            style={styles.textInput}
          />
  
          <Button title="lOGIN"></Button>
        </View> */}
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "brown",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "Teal",
    marginTop: 20,
    paddingLeft: 30,
    marginBottom: 60,
  },
});
