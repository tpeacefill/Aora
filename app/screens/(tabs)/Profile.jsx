import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../../../assets/Images/profile.png";
import SearchImage from "../../../assets/Images/EmptyState.png";
import CustomButton from "../../../Components/CustomButton";

const Profile = ({ navigation }) => {
  // Ensure navigation is received as a prop

  const handleExplore = () => {
    // Navigate to Home page
    navigation.navigate("Home");
  };

  const handleSignout = () => {
    // Navigate to Sign In page
    navigation.navigate("SignIn");
    console.log("Sign out pressed");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={handleSignout}>
            <Ionicons
              name="log-out-outline"
              size={30}
              color="#ffffff"
              style={styles.logoutIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image source={ProfilePic} style={styles.profile} />
          <Text style={styles.nameText}>Peacefill</Text>
          <View style={styles.postView}>
            <View style={styles.posts}>
              <Text style={styles.postsText}>10</Text>
              <Text style={styles.postsTextsmall}>Posts</Text>
            </View>
            <View style={styles.posts}>
              <Text style={styles.postsText}>1.2K</Text>
              <Text style={styles.postsTextsmall}>Views</Text>
            </View>
          </View>
          <Image source={SearchImage} style={styles.searchImage} />
          <View style={styles.noVideosContainer}>
            <Text style={styles.noVideosSubText}>No videos Found</Text>
            <Text style={styles.noVideosText}>
              No videos found for this profile
            </Text>
          </View>
          <CustomButton
            title="Back to Explore"
            handlePress={handleExplore}
            navigation={navigation} // Pass the navigation prop
          />
        </View>
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
    width: "85%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center", // Center vertically within the row
  },
  profileContainer: {
    width: "85%",
    flex: 1,
    alignItems: "center",
  },
  logoutIcon: {
    color: "#ffffff",
  },
  profile: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  nameText: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  postView: {
    flexDirection: "row",
    width: "36%",
    justifyContent: "space-between",
  },
  postsText: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  posts: {
    alignItems: "center",
  },
  postsTextsmall: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 12,
  },
  searchImage: {
    width: 200,
    height: 150,
    alignSelf: "center",
  },
  noVideosContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  noVideosText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 5,
  },
  noVideosSubText: {
    color: "#CDCDE0",
    fontSize: 14,
  },
});

export default Profile;
