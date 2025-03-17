import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const Class = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderWidth: 2,
            marginBottom: 50,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "green",
              marginLeft: 0,
            }}
          ></View>
          <Text>colors</Text>

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "yellow",
              marginLeft: 0,
            }}
          ></View>
        </View>

        {/*BOXES BELOW*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "blue",
              marginLeft: 0,
            }}
          ></View>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 100, height: 80, borderRadius: 10 }}
          />
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "red",
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "green",
              marginLeft: 0,
            }}
          ></View>
          <Text style={{ fontSize: 40 }}>colors</Text>

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "red",
              marginLeft: 0,
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "gray",
              marginLeft: 0,
            }}
          ></View>
          <Text style={{ fontSize: 40 }}>Olaoluwa</Text>

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "cyan",
              marginLeft: 0,
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "brown",
              marginLeft: 0,
            }}
          ></View>
          <Text style={{ fontSize: 40 }}>did</Text>

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "blue",
              marginLeft: 0,
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "yellow",
              marginLeft: 0,
            }}
          ></View>
          <Text style={{ fontSize: 40 }}>this</Text>

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "purple",
              marginLeft: 0,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "green",
              marginLeft: 0,
            }}
          ></View>
          <Image
            source={require("../assets/images/favicon.png")}
            style={{ width: 100, borderRadius: 100, height: 80 }}
          />

          <View
            style={{
              padding: 10,
              width: 100,
              height: 100,
              backgroundColor: "red",
              marginLeft: 0,
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Class;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "White",
    flex: 1,
  },
});
