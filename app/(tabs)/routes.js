import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import RouteSuggestionChip from "../../components/RouteSuggestionChip";
import AlertModal from "../../components/AlertModal";
import Button from "../../components/Button";
import { useRouter } from "expo-router";
import { useGetRoutes } from "../../hooks/useRouteQuerys";

export default function RoutesPage() {
  const [query, setQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter()

  const { data: routes } = useGetRoutes()

  const routesSuggestionsList = Array.isArray(routes) ? routes.slice(0,3) : []
  const routesCount = routesSuggestionsList.length ?? 0

  function handleRouteSearch(text) {

    if (text.length < 1) {
      setIsModalVisible(!isModalVisible)
    } else {
      router.push("/trackingBus")
    }
  }

  function handleSuggestionSelect(selectedItem) {
    setQuery(selectedItem);
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.logo}>Angoway®</Text>
      </View>

      <View style={styles.searchBarContent}>
        <Text>{ routesCount + ""}</Text>
        <SearchBar
          placeholder={"Zap Cinemas, Rua do Kikagil"}
          style={styles.searchBar}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsLabel}>Sugestões</Text>
          <View style={styles.suggestions}>
            <FlatList
              data={routesSuggestionsList}
              renderItem={({ item }) => (
                <RouteSuggestionChip
                  suggestion={item.name}
                  key={item.id}
                  onPress={() => handleSuggestionSelect(item.name)}
                  style={styles.suggestionChip}
                />
              )}
              keyExtractor={(item) => item.id}
              bounces={true}
            />
          </View>
        </View>
      </View>

      {
        isModalVisible && (
          <AlertModal
            type="error"
            text={`Você precisa pesquisar \npor um destino`}
          />
        )
      }

      <Button
        text="Procurar"
        onPress={() => handleRouteSearch(query)}
        style={styles.searchButton}
        textColor={"#FFF"}
      />

    </View>
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
  searchBarContent: {
    width: "100%",
    alignItems: "center",
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
    paddingTop: 10,
  },
  suggestionChip: {
    marginTop: 10,
  },
  suggestionsLabel: {
    color: "#3333",
    fontSize: 15,
    fontWeight: 300,
  },
  content: {
    width: "100%",
    flexDirection: "column"
  },
  searchButton: {
    width: "100%",
    backgroundColor: "#0C6DFF",
    fontWeight: 800,
    marginTop: 30
  },
  text: {
    color: "#FFF"
  },
});
