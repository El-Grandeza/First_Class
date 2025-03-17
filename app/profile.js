import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const _layout = () => {
  const profile = [
    {
      id: 1,
      image1: require("../assets/images/Our pix/alarm.png"),
      name1: "Order History",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 2,
      image1: require("../assets/images/Our pix/namee.png"),
      name1: "Personal Details",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 3,
      image1: require("../assets/images/Our pix/namee.png"),
      name1: "Address",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 4,
      image1: require("../assets/images/Our pix/card.png"),
      name1: "Payment Method",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 5,
      image1: require("../assets/images/Our pix/about.png"),
      name1: "About",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 6,
      image1: require("../assets/images/Our pix/help.png"),
      name1: "Help",
      image2: require("../assets/images/Our pix/right.png"),
    },
    {
      id: 7,
      image1: require("../assets/images/Our pix/logout.png"),
      name1: "Logout",
      image2: require("../assets/images/Our pix/right.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          Profile
        </Text>

        <TouchableOpacity
          style={{
            borderRadius: 400,
            backgroundColor: "red",
            marginHorizontal: 120,
            width: 160,
            height: 160,
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/images/Our pix/ade.jpeg")}
            style={{
              width: 150,
              height: 150,

              borderRadius: 400,
            }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Adeife Fagbola</Text>
        <Text style={{ fontSize: 18, fontWeight: "300" }}>
          adeifefagbola@gmail.com
        </Text>
      </View>

      {/*CHANNELS*/}

      {/* FlatList */}
      <View>
        <FlatList
          data={profile}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image1}
                    style={{ width: 40, height: 40, tintColor: "red" }}
                  />

                  <Text style={{ fontSize: 18, paddingLeft: 12, flex: 1 }}>
                    {item.name1}
                  </Text>

                  <Image
                    source={item.image2}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 40,
    borderWidth: 2,
    marginleft: 10,
  },
});
