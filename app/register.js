import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            marginLeft: 20,
            height: 50,
            borderColor: "white",
            width: 50,

            backgroundColor: "#D8D8D8",
          }}
        ></View>

        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 15 }}>
          Register
        </Text>
      </View>

      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginHorizontal: 15,
          }}
        >
          Full Name
        </Text>

        <TextInput
          placeholder="Enter your name"
          style={{
            paddingLeft: 10,
            borderColor: "grey",
            borderWidth: 1,
            marginTop: 15,
            height: 50,
            width: 450,
            borderRadius: 10,
            backgroundColor: "#D8D8D8",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",

            marginHorizontal: 15,
          }}
        >
          Email
        </Text>

        <TextInput
          placeholder="Enter your email"
          style={{
            paddingLeft: 10,
            borderColor: "grey",
            borderWidth: 1,
            height: 50,
            width: 450,
            marginTop: 15,
            borderRadius: 10,
            backgroundColor: "#D8D8D8",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginHorizontal: 15,
          }}
        >
          Password
        </Text>

        <TextInput
          placeholder="Enter your Password"
          style={{
            paddingLeft: 10,
            marginTop: 15,
            borderColor: "grey",
            borderWidth: 1,
            height: 50,
            width: 450,
            borderRadius: 10,
            backgroundColor: "#D8D8D8",
          }}
        />
      </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View style={{ height: 1, borderWidth: 1, width: 200 }}></View>

        <View>
          <Text style={{ fontSize: 20, paddingHorizontal: 5 }}>Or</Text>
        </View>

        <View style={{ height: 1, borderWidth: 1, width: 200 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-around",
          marginVertical: 30,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/google.jpg")}
            style={{
              width: 60,
              height: 60,
              borderColor: "white",
              borderWidth: 1,
              padding: 10,
              backgroundColor: "#D8D8D8",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/facebook.png")}
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: "white",
              padding: 10,
              backgroundColor: "#D8D8D8",
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 20,
          marginTop: 200,
          borderColor: "white",
          backgroundColor: "red",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,

    flex: 1,
    marginTop: 10,
  },
});
