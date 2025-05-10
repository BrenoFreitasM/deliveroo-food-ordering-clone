import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 60,
    paddingBottom: 60,
    flex: 1,
  },

  container: {
    alignItems: "center",
    backgroundColor: "#FFf",
    flexDirection: "row",
    gap: 20,
    height: 60,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  bike: {
    width: 30,
    height: 30,
  },

  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: { flexDirection: "row", alignItems: "center" },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
