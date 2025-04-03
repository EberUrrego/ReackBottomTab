import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Dasboard({ route }) {
  const { foto } = route.params;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Detalles de la Foto</Text>
      <Image source={{ uri: foto.img_src }} style={styles.imagen} />
      <Text style={styles.texto}>📷 Cámara: {foto.camera.full_name}</Text>
      <Text style={styles.texto}>📅 Fecha de captura: {foto.earth_date}</Text>
      <Text style={styles.texto}>🚀 Rover: {foto.rover.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "blue",
  },
  imagen: {
    width: 300,
    height: 200,
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: "black",
    marginBottom: 4,
  },
});
