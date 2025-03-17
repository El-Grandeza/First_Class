import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";

const _layout = () => {
  const name = [
    "bayo",
    "bola",
    "ade",
    "achieve",
    "achieve",
    "achieve",
    "achieve",
    "achieve",
    "achieve",
    "achieve",
    "achieve",

    "achieve",
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 24, color: "white" }}>WA Business</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/Our pix/camera.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../assets/images/Our pix/camera.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../assets/images/Our pix/search.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      {/*STATUS*/}
      <View style={{ padding: 13, marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: "white" }}>List</Text>
        <FlatList
          data={name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={{ fontSize: 29, paddingLeft: 10 }}>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const name = () => {};

// const fruit = [
//   {
//     id: 1,
//     name: "Favour",
//   },

//   {
//     id: 2,
//     name: "Ayo",
//   },
//   {
//     id: 3,
//     name: "Ben",
//   },
// ];
// console.log(fruit);

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000D4B",
  },
});
