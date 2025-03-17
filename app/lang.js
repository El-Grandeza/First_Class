import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  const lang = [
    {
      id: 1,
      image: require("../assets/images/Our pix/france.png"),
      name: "FRENCH",
    },
    {
      id: 2,
      image: require("../assets/images/Our pix/britain.jpg"),
      name: "ENGLISH",
    },
    {
      id: 3,
      image: require("../assets/images/Our pix/britain.jpg"),
      name: "GERMAN",
    },
    {
      id: 4,
      image: require("../assets/images/Our pix/hungary.jpg"),
      name: "HUNGARIAN",
    },
    {
      id: 5,
      image: require("../assets/images/Our pix/britain.jpg"),
      name: "ITALIAN",
    },
    {
      id: 6,
      image: require("../assets/images/Our pix/portugal.jpg"),
      name: "PORTUGUESE",
    },
    {
      id: 7,
      image: require("../assets/images/Our pix/belgium.png"),
      name: "DUTCH",
    },
  ];

  return (
    <View style={styles.box}>
      <View
        style={{
          backgroundColor: "purple",
          height: 400,
          width: 480,
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}
      >
        {/* First View with menu and circle */}
        <View style={{ flexDirection: "row", padding: 40 }}>
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

        {/* Second View with Choose */}

        <View>
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              paddingLeft: 60,
            }}
          >
            CHOOSE
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              paddingLeft: 60,
            }}
          >
            LANGUAGE
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="find language"
          placeholderTextColor={"white"}
        />
      </View>
      <View>
        <FlatList
          data={lang}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  // alignItems: "center",
                  flexDirection: "row",
                  // alignSelf: "center",
                  // justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  style={{
                    // paddingHorizontal: 50,
                    // alignItems: "center",
                    // justifyContent: "space-evenly",
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 60,
                      height: 60,
                      marginVertical: 10,

                      borderRadius: 30,
                    }}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  box: {
    padding: 0,
  },
  input: {
    width: "70%",

    alignSelf: "center",
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
    fontSize: 16,
    marginVertical: 30,
  },
});
