import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.cob}>
      <View
        style={{
          backgroundColor: "teal",
          height: 300,
          width: "100%",
          borderBottomRightRadius: 60,

          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.2} style={{ flex: 1 }}>
            <Image
              source={require("../assets/images/Our pix/menu.png")}
              style={{ tintColor: "white" }}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.2}>
            <Image
              source={require("../assets/images/Our pix/circle.png")}
              style={{ tintColor: "white" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="CONTACT"
            textAlign="center"
            placeholderTextColor={"black"}
            style={{
              height: 50,
              fontSize: 26,
              fontWeight: 800,
              width: 400,

              borderRadius: 10,
              borderBlockColor: "black",
              borderWidth: 2,
              backgroundColor: "white",
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 400,
          width: "100%",

          marginTop: -120,
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 200,
            width: 140,

            marginHorizontal: 10,
            borderRadius: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "red",
            height: 200,
            width: 140,

            marginHorizontal: 10,
            borderRadius: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "orange",
            height: 200,
            width: 140,

            marginHorizontal: 10,
            borderRadius: 20,
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 400,
          marginHorizontal: 10,
          flexDirection: "row",
          marginTop: -160,
          gap: 20,
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "red",
              width: 220,
              height: 250,
              marginTop: 10,
              borderRadius: 30,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "red",
              height: 120,
              width: 220,
              marginTop: 10,

              borderRadius: 30,
            }}
          ></View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "red",
              height: 120,
              width: 220,
              borderRadius: 20,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "red",
              height: 120,
              width: 220,
              borderRadius: 20,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "red",
              height: 120,
              width: 220,
              borderRadius: 20,
              marginTop: 10,
            }}
          ></View>
        </View>
      </View>
      <View style={{ height: 300, width: "100%", colour: "orange" }}></View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  cob: {},
});
