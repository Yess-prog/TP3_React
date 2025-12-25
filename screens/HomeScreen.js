import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const username = route.params?.username || "Utilisateur";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Bienvenue {username} 👋
      </Text>

      <Button
        title="Aller au profil"
        onPress={() => navigation.navigate("Profile", { username })}
      />

      <View style={{ marginTop: 15 }}>
        <Button
          title="Aller aux paramètres"
          onPress={() => navigation.navigate("Settings", { username })}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Button
          title="Déconnexion"
          color="red"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </View>
  );
}
