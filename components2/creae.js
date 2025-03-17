import {
  StyleSheet,
  Text,
  Touchable,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.logs}>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 40, width: 55, padding: 6 }}
        >
          <Image
            source={require("../assets/images/Our pix/left.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        text
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={{ color: "black", fontSize: 40, fontWeight: "700" }}>
            Create Account
          </Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "400" }}>
            Create account and enjoy all services
          </Text>
        </View>
        {/*Text Input*/}
        <View>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/Our pix/namee.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginLeft: 12,
              }}
            />

            <TextInput
              placeholder="Name"
              placeholderTextColor={"grey"}
              style={{
                color: "grey",
                paddingLeft: 5,
                borderColor: "grey",
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
            }}
          >
            <Image
              source={require("../assets/images/Our pix/mail.png")}
              style={{
                width: 20,
                height: 20,
                marginLeft: 12,
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={"grey"}
              style={{
                paddingLeft: 10,
                color: "grey",
                borderColor: "grey",
              }}
            />
          </View>

          {/*Password*/}
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              borderColor: "grey",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={require("../assets/images/Our pix/lock.png")}
                style={{
                  width: 40,
                  tintColor: "black",
                  height: 40,
                  marginLeft: 12,
                }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"grey"}
                style={{
                  color: "grey",
                  paddingLeft: 10,
                }}
              />
            </View>

            <View>
              <Image
                source={require("../assets/images/Our pix/blib.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        </View>
        {/*text - forgot password*/}
        <View style={{ marginTop: 15, marginBottom: 6, flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/Our pix/tickk.png")}
              style={{ width: 24, height: 30, tintColor: "blue" }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: "black",
              textAlign: "left",
              fontSize: 20,
              fontWeight: "400",
            }}
          >
            I Agree to the company's
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: "blue",
                paddingLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
        {/*And Policy*/}
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text
              style={{
                color: "black",
                textAlign: "left",
                fontSize: 20,
                fontWeight: "400",
                paddingLeft: 35,
              }}
            >
              And
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                color: "blue",
                paddingLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        {/*Sign in button*/}
        <View style={{ marginTop: 23 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: "blue",
              padding: 16,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/*text - sign in with*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={{ borderWidth: 1, height: 1, width: "40%" }}></View>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "400",
              padding: 20,
            }}
          >
            Or sign up with
          </Text>
          <View style={{ borderWidth: 1, height: 1, width: "40%" }}></View>
        </View>
        {/*favicons*/}
        <View
          style={{
            flexDirection: "row",
            gap: 40,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 55,
              width: 66,
              padding: 7,
              paddingLeft: 10,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/apple.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderWidth: 1, borderRadius: 60, width: 66, padding: 6 }}
          >
            <Image
              source={require("../assets/images/Our pix/facebook.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 40,
              width: 66,
              padding: 6,
              paddingLeft: 12,
              paddingTop: 10,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/google.jpg")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/*text - don't have an account? sign up*/}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "blue",
              paddingLeft: 10,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  logs: {
    padding: 20,
    backgroundColor: "white",
    marginLeft: 5,
    flex: 1,
    marginTop: 50,
  },
});
