import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import VideoUpload from "../../../assets/Images/videoUpload.png";
import ImageUpload from "../../../assets/Images/imageUpload.png";
import CustomButton from "../../../Components/CustomButton";

const Create = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleVideoUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'video/*',
      });
      if (result.type === 'success') {
        setVideo(result);
        console.log(result);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const handleImageUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });
      if (result.type === 'success') {
        setThumbnail(result);
        console.log(result);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.nameText}>Upload Video</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Video Title</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Give your video a catchy title..."
              placeholderTextColor="#CDCDE0"
            />
          </View>
        </View>
        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Upload Video</Text>
          <TouchableOpacity style={styles.uploadBox} onPress={handleVideoUpload}>
            <Image source={VideoUpload} style={styles.uploadImage} />
          </TouchableOpacity>
          {video && <Text style={styles.fileName}>{video.name}</Text>}
        </View>
        <View style={styles.inputContainer2}>
          <Text style={styles.label}>Thumbnail Image</Text>
          <TouchableOpacity style={styles.uploadBox1} onPress={handleImageUpload}>
            <View style={styles.uploadBox1ASub}>
              <Image source={ImageUpload} style={styles.thumbnailImage} />
              <Text style={styles.chooseFileText}>Choose a file</Text>
            </View>
          </TouchableOpacity>
          {thumbnail && <Text style={styles.fileName}>{thumbnail.name}</Text>}
        </View>
        <View style={styles.inputContainer3}>
          <Text style={styles.label}>AI Prompt</Text>
          <View style={styles.uploadBox1}>
            <TextInput
              style={styles.input}
              placeholder="The AI prompt of your video..."
              placeholderTextColor="#CDCDE0"
            />
          </View>
        </View>
        <CustomButton title="Submit & Publish" />
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
  inputContainer: {
    width: "90%",
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer1: {
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer2: {
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer3: {
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C38",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 14,
    height: 40,
    padding: 3,
  },
  uploadBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C2C38",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
  },
  uploadBox1: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C2C38",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 60,
  },
  uploadBox1ASub: {
    flexDirection: "row",
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C2C38",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 60,
  },
  uploadImage: {
    width: 60,
    height: 60,
  },
  thumbnailImage: {
    width: 24,
    height: 24,
  },
  chooseFileText: {
    flex: 1,
    color: "#CDCDE0",
    fontFamily: "Poppins",
    fontSize: 14,
    textAlign: "center",
  },
  fileName: {
    color: "#CDCDE0",
    fontFamily: "Poppins",
    fontSize: 14,
    marginTop: 5,
  },
});

export default Create;
