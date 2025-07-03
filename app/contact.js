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
          backgroundColor: "#00896f",
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
            backgroundColor: "#ff9671",
            height: 200,
            width: 140,
            alignItems: "center",
            marginHorizontal: 10,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/images/Our pix/namee.png")}
            style={{
              height: 120,
              width: 100,
              marginTop: 16,
              tintColor: "white",
            }}
          />
          <Text style={{ color: "white", fontSize: 24, fontWeight: 700 }}>
            Service
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ffc75f",
            height: 200,
            width: 140,
            alignItems: "center",
            marginHorizontal: 10,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/images/Our pix/phone.png")}
            style={{
              height: 120,
              width: 100,
              marginTop: 16,
              tintColor: "white",
            }}
          />
          <Text style={{ color: "white", fontSize: 24, fontWeight: 700 }}>
            Contact
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ff9671",
            height: 200,
            width: 140,
            alignItems: "center",
            marginHorizontal: 10,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/images/Our pix/preee.png")}
            style={{
              height: 120,
              width: 100,
              marginTop: 16,
              tintColor: "white",
            }}
          />
          <Text style={{ color: "white", fontSize: 24, fontWeight: 700 }}>
            Profile
          </Text>
        </View>
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
              backgroundColor: "#008b74",
              height: 120,
              width: 220,
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/mail.png")}
              style={{ height: 70, width: 70, tintColor: "white" }}
            />
            <Text style={{ fontSize: 20, color: "white" }}>
              communicate with us
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "#008b74",
              height: 120,
              width: 220,
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/phone.png")}
              style={{ height: 70, width: 70, tintColor: "white" }}
            />
            <Text style={{ fontSize: 20, color: "white" }}>
              communicate with us
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#008b74",
              height: 120,
              width: 220,
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/mail.png")}
              style={{ height: 70, width: 70, tintColor: "white" }}
            />
            <Text style={{ fontSize: 20, color: "white" }}>
              communicate with us
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#008b74",
              height: 120,
              width: 220,
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/images/Our pix/mail.png")}
              style={{ height: 70, width: 70, tintColor: "white" }}
            />
            <Text style={{ fontSize: 20, color: "white" }}>
              communicate with us
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 300,
            width: "100%",
            colour: "orange",
            marginTop: -200,
          }}
        >
          <Image
            source={require("../assets/images/Our pix/mail.png")}
            style={{ height: 70, width: 70, tintColor: "white" }}
          />
          <Text style={{ fontSize: 20, color: "white" }}>
            communicate with us
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "#ff9671",
          marginTop: 50,
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>
          Our team is ready to assist you
        </Text>
        <Text style={{ color: "white", fontSize: 22 }}>
          with any of your needs
        </Text>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  cob: {},
});
