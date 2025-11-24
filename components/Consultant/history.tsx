import fonts from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HistoryProps {
  title: string;
  role: string;
  roleDate: string;
  teacherName: string;
  jobDate: string;
}

const History = ({
  title,
  role,
  roleDate,
  teacherName,
  jobDate,
}: HistoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.role}>
        <Text style={styles.label}>{role}</Text>
        <Text style={styles.value}>{roleDate}</Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.label}>{teacherName}</Text>
        <Text style={styles.value}>{jobDate}</Text>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    borderRadius: 14,
    backgroundColor: Colors.light.cardBackground,
    marginVertical: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: Colors.light.text,
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: Colors.light.silver,
    marginBottom: 4,
    width: "80%",
  },

  value: {
    fontSize: 15,
    fontFamily: fonts.bold,
    color: Colors.light.text,
  },
  role: {},
  about: { marginTop: 40 },
});
