import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const API_KEY = "pz3bDxqRQRpgMMOZ2ETnAcedlbLNoLHui6G0UvDO"; 

export default function HomeScreen({ navigation }) {
  const [fotos, setFotos] = useState([]);

  
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(datos => setFotos(datos.photos.slice(0, 6))) // Tomar solo 5 fotos
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Fotos del Rover de Marte</Text>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.elementoLista}>
            <Text style={styles.nombreDeCamara}>{item.camera.full_name}</Text>
            <Button
              title="Ver detalles"
              onPress={() => navigation.navigate("Dasboard", { foto: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "black",
  },
  elementoLista: {
    backgroundColor: "grey",
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  nombreDeCamara: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
});
