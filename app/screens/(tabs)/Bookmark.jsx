import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../../../assets/Images/avatar3.png";
import Avatar1 from "../../../assets/Images/avatar4.png";
import Video from "../../../assets/Images/video2.png";
import Video1 from "../../../assets/Images/video3.png";
import Card from "../../../Components/VideoCard";

const Bookmark = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.nameText}>Saved Videos</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search your saved videos"
              placeholderTextColor="#CDCDE0"
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Ionicons name="search" size={20} color="#CDCDE0" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.appContainer}>
          <Card
            avatarSource={Avatar}
            videoSource={Video}
            title="The camera follows behind a..."
            author="Johnson"
          />
          <Card
            avatarSource={Avatar1}
            videoSource={Video1}
            title="Close up on cartton character b..."
            author="Brandon Etter"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: "#161622",
    flex: 1,
  },
  viewContainer: {
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
  },
  headerContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  nameText: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    width: "90%",
    marginTop: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C38",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 14,
    height: 40,
    padding: 3,
  },
  searchIcon: {
    marginLeft: 10,
    padding: 3,
  },
  appContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 120,
  },
});

export default Bookmark;
