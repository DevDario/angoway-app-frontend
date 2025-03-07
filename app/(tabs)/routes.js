import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import RouteSuggestionChip from "../../components/RouteSuggestionChip";
import Button from "../../components/Button";

export default function RoutesPage() {
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleRouteSearch() {
    if (searchBarValue.length < 1) {
      Alert.alert(
        "🔎 Por favor, insira um destino válido",
        "Pesquise por destinos ou selecione uma das Sugestões",
      );
      return;
    } else {
      Alert.alert("🔎 Pesquisando Por", searchBarValue);
    }
  }

  function handleSuggestionSelect(selectedItem) {
    setSearchBarValue(selectedItem);
  }

  const suggestions = [
    {
      id: 1,
      route: "Igreja Pentecostal de Luanda",
      lat: "-12345",
      long: "54321",
    },
    { id: 2, route: "Zap Cinemas, Kikagil", lat: "-12345", long: "54321" },
    { id: 3, route: "Arena Fúria, Patriota", lat: "-12345", long: "54321" },
    { id: 4, route: "Largo das Escolas", lat: "-12345", long: "543212" },
    { id: 5, route: "Praça da Independência", lat: "-12345", long: "54321" },
  ];

  return (
    <ScrollView
      style={[styles.container]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Angoway® </Text>
      </View>

      <View style={styles.content}>
        <SearchBar
          placeholder={"Zap Cinemas, Rua do Kikagil"}
          style={styles.searchBar}
          value={searchBarValue}
          onChangeText={setSearchBarValue}
        />

        <View style={styles.mainContent}>
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsLabel}>Sugestões</Text>
            <View style={styles.suggestions}>
              <FlatList
                data={suggestions}
                renderItem={({ item }) => (
                  <RouteSuggestionChip
                    suggestion={item.route}
                    key={item.id}
                    onPress={() => handleSuggestionSelect(item.route)}
                    style={styles.suggestionChip}
                  />
                )}
                keyExtractor={(item) => item.id}
                bounces={true}
              />
            </View>
          </View>

          <Button
            text="Procurar"
            onPress={handleRouteSearch}
            style={styles.searchButton}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 30,
    marginHorizontal: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  logo: {
    color: "#0C6DFF",
    fontSize: 20,
    fontWeight: 700,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  searchBar: {
    width: "100%",
    borderColor: "#DBE9FF",
  },
  suggestionsContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 15,
  },
  suggestions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    paddingTop: 15,
  },
  suggestionChip: {
    marginTop: 10,
  },
  suggestionsLabel: {
    color: "#3333",
    fontSize: 15,
    fontWeight: 500,
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 35,
  },
  searchButton: {
    width: "100%",
    backgroundColor: "#0C6DFF",
    color: "#fff",
  },
});
