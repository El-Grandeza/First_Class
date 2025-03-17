import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.lodd}>
      <View
        style={{
          justifyContent: "center",
          margintop: 40,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/Our pix/logos.png")}
          style={{ tintColor: "white", marginTop: 50 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <Text style={{ color: "white", fontSize: 40 }}>Mobile</Text>

        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
          App
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
          alignItems: "center",
          borderColor: "white",
          height: 50,
        }}
      >
        <Image
          source={require("../assets/images/Our pix/namee.png")}
          style={{
            width: 20,
            height: 20,
            marginLeft: 12,
            tintColor: "white",
          }}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor={"white"}
          style={{
            paddingLeft: 10,
            width: 500,
            color: "white",
            color: "grey",
            borderColor: "white",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
          alignItems: "center",
          borderColor: "white",
          height: 50,
        }}
      >
        <Image
          source={require("../assets/images/Our pix/lock.png")}
          style={{
            width: 20,
            height: 20,

            marginLeft: 12,
            tintColor: "white",
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"white"}
          style={{
            paddingLeft: 10,
            color: "grey",
            width: 500,
            borderColor: "white",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          // gap: 10,
          // flex: 1,
          justifyContent: "space-between",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",

            marginTop: 5,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/Our pix/tickk.png")}
              style={{
                tintColor: "white",
                width: 40,
                height: 40,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "white", fontSize: 20 }}>Remember me</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20 }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginTop: 40,
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            padding: 4,
            textAlign: "center",
            fontSize: 40,

            fontWeight: "bold",
            color: "purple",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            marginTop: 80,
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Don't have an account?
        </Text>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginTop: 15,
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "white",
          marginLeft: 60,
          marginRight: 60,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            padding: 10,
            textAlign: "center",
            fontSize: 15,

            fontWeight: "bold",
            color: "white",
          }}
        >
          Create account here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  lodd: {
    backgroundColor: "purple",
    paddingLeft: 15,
    paddingRight: 15,

    flex: 1,
    marginTop: 10,
  },
});
