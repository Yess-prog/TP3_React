import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { username: "alex", password: "1234" },
    { username: "marie", password: "abcd" },
    { username: "tomi", password: "pass" },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      navigation.replace("Home", { username: user.username });
    } else {
      Alert.alert("Erreur", "Identifiants incorrects");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Connexion 🔐</Text>

      <TextInput
        placeholder="Nom d’utilisateur"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          width: "80%",
          padding: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          width: "80%",
          padding: 10,
          marginBottom: 20,
        }}
      />

      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}
