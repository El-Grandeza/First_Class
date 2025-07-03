import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.yoo}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{ width: 130, borderWidth: 2, backgroundColor: "black" }}
        ></View>
        <View
          style={{ width: 130, borderWidth: 2, backgroundColor: "black" }}
        ></View>
        <View
          style={{
            width: 130,
            borderWidth: 2,
            backgroundColor: "grey",
            borderColor: "grey",
          }}
        ></View>
      </View>
      <View style={{ marginTop: 40, alignSelf: "center" }}>
        <Text style={{ fontSize: 50, fontWeight: "400", textAlign: "center" }}>
          What's
        </Text>
        <Text style={{ fontSize: 50, fontWeight: "400", textAlign: "center" }}>
          bothering you?
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 30 }}>
        <View>
          <View
            style={{
              backgroundColor: "#ffc75f",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Insomia
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Sadness
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Uncertainty
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Anger
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Envy
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "#ffc75f",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Insomia
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Sadness
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Uncertainty
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Anger
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ff8066",
              height: 56,
              width: 180,
              borderRadius: 30,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Envy
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  yoo: {
    padding: 40,
  },
});
