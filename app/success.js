import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 3,
          borderColor: "red",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Image
          source={require("../assets/images/Our pix/ver.png")}
          style={{
            tintColor: "red",

            width: 40,
            height: 40,
            padding: 100,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 140,
        }}
      >
        Successfully Registered
      </Text>
      <Text
        style={{
          fontSize: 18,
          paddingHorizontal: 40,
          lineHeight: 26,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Congratulations. Your account registered in this application
      </Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          marginTop: 130,
          padding: 20,
          backgroundColor: "red",
          borderColor: "white",
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
            textAlign: "center",
          }}
        >
          Thank you
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 140,
    paddingHorizontal: 25,

    flex: 1,
    marginTop: 10,
  },
});
