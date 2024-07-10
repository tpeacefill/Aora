import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed

const Card = ({ avatarSource, videoSource, title, author }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHead}>
        <View style={styles.cardHeadText}>
          <Image
            source={avatarSource}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.nameLabel}>{title}</Text>
            <Text style={styles.welcome}>{author}</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" size={20} color="#CDCDE0" />
      </View>
      <View style={styles.cardBody}>
        <Image
          source={videoSource}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    marginTop: 30,
    alignSelf: "center", // This will center the cardContainer within the appContainer
    marginBottom: 20,
  },
  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  cardHeadText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  nameLabel: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
  },
  welcome: {
    fontFamily: "Poppins",
    color: "#CDCDE0",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20.3,
    letterSpacing: -1,
  },
  cardBody: {
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 10, // Adjust this ratio based on the actual aspect ratio of your image
    alignSelf: "center",
  },
});

export default Card;
