import Details from "@/components/Consultant/Details";
import History from "@/components/Consultant/history";
import ViewProfile from "@/components/Consultant/ViewProfile";
import fonts from "@/constants/fonts";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ConsultantInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home/consultant")}
        >
          <Image source={images.leftArrow} style={styles.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Consultant</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ViewProfile
            image={images.user}
            flag={images.Flag}
            name={"Zunairah Sheikh"}
          />
        </View>
        <View style={styles.content}>
          <Details />

          <View style={styles.historySection}>
            <History
              title="Employment History"
              role="Executive Director"
              roleDate="Mar 2012 - Aug 2014"
              teacherName="Tajweed teacher"
              jobDate="Jan 2015 - Present"
            />
          </View>

          <View style={styles.historySection}>
            <History
              title="Education"
              role="Bachelor in Islamic studies - Al-Azhar university"
              roleDate="Jul 2014"
              teacherName="Ijaza"
              jobDate="Sep 2015"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConsultantInfo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: Colors.light.background,
  },
  leftArrow: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  mainTitle: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: Colors.light.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 16,
  },
  historySection: {
    marginTop: 20,
  },
});
