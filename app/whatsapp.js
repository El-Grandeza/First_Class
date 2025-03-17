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
  const whatsapp = [
    {
      id: 1,
      image1: require("../assets/images/Our pix/wheel.jpg"),
      name1: "CHAMP TUTORIALS",
      sub_name1: "vocabulary with CHAMP T ...",
      time1: "12:26 PM",
    },
    {
      id: 2,
      image1: require("../assets/images/Our pix/bus.jpg"),
      name1: "Republic Business",
      sub_name1: "Stock Market Crash...Wi l...",
      time1: "12:11 PM",
    },

    {
      id: 3,
      image1: require("../assets/images/Our pix/pulse.jpg"),
      name1: "Pulse Nigeria",
      sub_name1: "Nancy's outfit Hit or Miss...",
      time1: "12:02 PM",
    },

    {
      id: 4,
      image1: require("../assets/images/Our pix/tecc.jpg"),
      name1: "Tech Tudo",
      sub_name1: "Stock Market Crash...Will...",
      time1: "12:00 PM",
    },

    {
      id: 5,
      image1: require("../assets/images/Our pix/wheel.jpg"),
      name1: "Bamboo",
      sub_name1: "Stocks tumbled, with Nasd...",
      time1: "11:59 PM",
    },

    {
      id: 6,
      image1: require("../assets/images/Our pix/techradar.jpg"),
      name1: "TechRadar",
      sub_name1: "We must be getting very cls.",
      time1: "11:58 PM",
    },
    {
      id: 7,
      image1: require("../assets/images/Our pix/zikoko.jpg"),
      name1: "Zikoko",
      sub_name1: "Hi guys! Happy Monday Ziko.",
      time1: "11:40 PM",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Updates</Text>

        <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../assets/images/Our pix/camera.png")}
            style={{ width: 28, height: 30 }}
          />
          <Image
            source={require("../assets/images/Our pix/search.png")}
            style={{ width: 28, height: 30 }}
          />
          <Image
            source={require("../assets/images/Our pix/threedot.png")}
            style={{ width: 28, height: 30 }}
          />
        </TouchableOpacity>
      </View>

      {/*CHANNELS*/}
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text
          style={{ color: "white", fontWeight: "bold", fontSize: 23, flex: 1 }}
        >
          Channels
        </Text>

        <TouchableOpacity
          style={{ flexDirection: "row", gap: 9, alignItems: "center" }}
        >
          <Text style={{ color: "green", fontSize: 20 }}>Explore</Text>
          <Ionicons name="home" size={20} color="blue" />
        </TouchableOpacity>
      </View>

      {/* FlatList */}
      <View>
        <FlatList
          data={whatsapp}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity>
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Image
                      source={item.image1}
                      style={{
                        width: 60,
                        height: 60,
                        marginVertical: 10,
                        borderRadius: 30,
                      }}
                    />
                    <View style={{ paddingLeft: 10, flex: 1 }}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {item.name1}
                      </Text>
                      <Text style={{ fontSize: 16 }}>{item.sub_name1}</Text>
                    </View>

                    <View>
                      <Text>{item.time1}</Text>
                      <View
                        style={{
                          backgroundColor: "black",
                          width: 35,
                          height: 33,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: 20,
                        }}
                      >
                        {/* <Text style={{ color: "white" }}>{item.name1}</Text> */}
                      </View>
                    </View>
                  </TouchableOpacity>
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
    backgroundColor: "green",
    padding: 40,
  },
});
