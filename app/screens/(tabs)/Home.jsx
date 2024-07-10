import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import Logo2 from "../../../assets/Images/logo2.png";
import carouselImage from "../../../assets/Images/Card.png";
import carouselImage1 from "../../../assets/Images/Card2.png";
import carouselImage3 from "../../../assets/Images/Card3.png";
import Avatar from "../../../assets/Images/avatar.png";
import Avatar1 from "../../../assets/Images/avatar2.png";
import Video from "../../../assets/Images/video.png";
import Video1 from "../../../assets/Images/video1.png";
import Card from "../../../Components/VideoCard";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollViewRef = useRef(null);

  const images = [
    carouselImage,
    carouselImage1,
    carouselImage3,
    carouselImage,
    carouselImage1,
  ];

  const handleImageButtonPress = (index) => {
    setSelectedImage(index);
    scrollViewRef.current?.scrollTo({ x: index * 160, animated: true }); // Adjust the offset value based on image width and margin
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.nameText}>Peacefill</Text>
          </View>
          <Image source={Logo2} style={styles.logo2} resizeMode="contain" />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a video topic"
              placeholderTextColor="#CDCDE0"
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Ionicons name="search" size={20} color="#CDCDE0" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.appContainer}>
          <View style={styles.horizontalCarousel}>
            <Text style={styles.carouselText}>Trending Videos</Text>
            <View style={styles.carouselContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    source={image}
                    style={[
                      styles.carouselImage,
                      selectedImage === index && styles.selectedCarouselImage,
                    ]}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={styles.carouselImageButtons}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.imageButton,
                    selectedImage === index && styles.selectedImageButton,
                  ]}
                  onPress={() => handleImageButtonPress(index)}
                >
                  <View
                    style={[
                      styles.imageButtonColor,
                      selectedImage === index &&
                        styles.selectedImageButtonColor,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Card
            avatarSource={Avatar}
            videoSource={Video}
            title="Woman walks down a Tokyo..."
            author="Brandon Etter"
          />
          <Card
            avatarSource={Avatar1}
            videoSource={Video1}
            title="Woman walks down a Tokyo..."
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
  logo2: {
    width: "12%", // Adjust this to your liking
    height: undefined,
    aspectRatio: 1, // This will keep the aspect ratio of the image
  },
  viewContainer: {
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
  },
  headerContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center", // Optional: to align items vertically in the center
    justifyContent: "space-between",
    marginTop: 30,
  },
  headerText: {
    flexDirection: "column",
    marginRight: 10, // Optional: to add some space between text and image
  },
  appContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 120,
  },
  welcome: {
    fontFamily: "Poppins",
    color: "#CDCDE0",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20.3,
    letterSpacing: -1,
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
    width: "100%",
    padding: 3,
  },
  searchIcon: {
    marginLeft: 10,
    padding: 3,
  },
  horizontalCarousel: {
    marginTop: 20,
    width: "96%", // Adjust the width to match the container
  },
  carouselText: {
    alignSelf: "flex-start",
    color: "#CDCDE0",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 20,
    paddingLeft: 20,
  },
  carouselContainer: {
    flexDirection: "row",
  },
  carouselImage: {
    width: 150,
    height: 250,
    borderRadius: 10,
    marginRight: 10,
  },
  selectedCarouselImage: {
    width: 170,
    height: 270,
  },
  carouselImageButtons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  imageButton: {
    width: 8,
    height: 8,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
    backgroundColor: "#7B7B8B",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImageButton: {
    width: 17,
    height: 8,
    borderRadius: 25,
    backgroundColor: "#FFA101",
  },
  imageButtonColor: {
    width: "100%",
    height: "100%",
    backgroundColor: "#7B7B8B",
  },
  selectedImageButtonColor: {
    backgroundColor: "#FFA101",
  },
  nameLabel: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
  },
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

export default Home;
