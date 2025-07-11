import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <View style={{ marginTop: 80, alignSelf: "center" }}>
        <Text style={{ fontSize: 50, fontWeight: "400", textAlign: "center" }}>
          What's
        </Text>
        <Text style={{ fontSize: 50, fontWeight: "400", textAlign: "center" }}>
          bothering you?
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 30 }}>
        <View>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
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
              Anxiety
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffc75f",
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
              Stress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              Laziness
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              Apathy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              Other
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: "100%",
          borderRadius: 40,
          marginTop: 40,
          justifyContent: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  yoo: {
    padding: 40,  
    justifyContent: "center",
    marginTop: 100,
  },
});
