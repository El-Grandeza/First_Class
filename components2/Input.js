import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, profile }) => {
  return (
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
          source={profile}
          style={{
            width: 20,
            height: 20,
            tintColor: "black",
            marginLeft: 12,
          }}
        />

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"grey"}
          style={{
            color: "grey",
            paddingLeft: 5,
            borderColor: "grey",
          }}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
