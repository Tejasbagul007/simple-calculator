import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { create } from "apisauce";

const api = create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default function Apisauce() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/users");
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.headerCell]}>Name</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Username</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Email</Text>
      </View>
      {data.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.name}</Text>
          <Text style={styles.tableCell}>{item.username}</Text>
          <Text style={styles.tableCell}>{item.email}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#eee"
  }
});
