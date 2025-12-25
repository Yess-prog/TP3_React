import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen({ route, navigation }) {
  const username = route.params?.username || "Utilisateur";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>Paramètres de {username}</Text>
      <Button title="Retour à l’accueil" onPress={() => navigation.goBack()} />
    </View>
  );
}
