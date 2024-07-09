import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import Logo2 from "../../../assets/Images/logo2.png";
import carouselImage from "../../../assets/Images/Card.png";
import carouselImage1 from "../../../assets/Images/Card2.png";
import carouselImage3 from "../../../assets/Images/Card3.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [carouselImage, carouselImage1, carouselImage3, carouselImage, carouselImage1];

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
        <View style={styles.horizontalCarousel}>
          <Text style={styles.carouselText}>Trending Videos</Text>
          <View style={styles.carouselContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                onPress={() => setSelectedImage(index)}
              >
                <View style={styles.imageButtonColor} />
              </TouchableOpacity>
            ))}
          </View>
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
    width: "85%",
    flexDirection: "row",
    alignItems: "center", // Optional: to align items vertically in the center
    justifyContent: "space-between",
    marginTop: 30,
  },
  headerText: {
    flexDirection: "column",
    marginRight: 10, // Optional: to add some space between text and image
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
    width: "85%",
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
    marginTop: 40,
    width: "85%", // Adjust the width to match the container
  },
  carouselText: {
    alignSelf: "flex-start",
    color: "#CDCDE0",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 20,
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
    width: 10,
    height: 10,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
    backgroundColor: "#7B7B8B",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImageButton: {
    width: 20,
    height: 10,
    borderRadius: 25,
    backgroundColor: "#FFA101",
  },
  imageButtonColor: {
    width: "100%",
    height: "100%",
    backgroundColor: "#7B7B8B",
  },
});

export default Home;
