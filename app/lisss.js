import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const _layout = () => {
  const nott = [
    {
      id: 1,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 2,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 3,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 4,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 5,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 6,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 7,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 8,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 9,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
    {
      id: 10,
      image1: require("../assets/images/Our pix/notification.png"),
      Name1: "Special Offer",
      Sub_Name1: "Today 10:30 PM",
    },
  ];

  return (
    <View style={styles.box}>
      <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 40 }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Our pix/left.png")}
            style={{
              width: 30,
              height: 30,

              padding: 10,
            }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 27, fontWeight: "bold", marginLeft: 120 }}>
          Notification
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, fontWeight: "700", flex: 1 }}>
          Last 30 Days
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "red" }}>
          All Marks As Read
        </Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Today</Text>
      </View>

      <View
        style={{
          alignContent: "center",
          width: 380,
          height: 100,
          backgroundColor: "#ADA9A9",
          marginLeft: 10,

          paddingHorizontal: 30,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Image
            source={require("../assets/images/Our pix/notification.png")}
            style={{ height: 30, width: 30, tintColor: "red" }}
          />

          <Text style={{ fontWeight: "700", fontSize: 20 }}>Special Offer</Text>
        </View>
        <View style={{ marginLeft: 35 }}>
          <Text>Today 10:30 PM</Text>
        </View>
      </View>

      <View style={{ marginVertical: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Yesterday</Text>
      </View>

      <View style={{ marginBottom: 400 }}>
        <FlatList
          data={nott}
          renderItem={({ item }) => {
            return (
              <View style={{ marginLeft: 10 }}>
                <View
                  style={{
                    width: 380,
                    height: 100,
                    backgroundColor: "#ADA9A9",
                    paddingHorizontal: 30,
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",

                      marginTop: 20,
                    }}
                  >
                    <Image
                      source={item.image1}
                      style={{ tintColor: "red", height: 30, width: 30 }}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>
                      {item.Name1}
                    </Text>
                  </View>
                  <Text style={{ marginLeft: 30 }}>{item.Sub_Name1}</Text>
                </View>
              </View>
            );
          }}
          ListHeaderComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              Trial List
            </Text>
          }
        />
        ``
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          See More
        </Text>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  box: {
    padding: 40,
    backgroundColor: "white",
    flex: 1,
  },
});
