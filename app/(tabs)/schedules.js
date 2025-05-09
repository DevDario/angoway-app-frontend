import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import Suggestion from "../../components/Suggestion";
import ScheduleCard from "../../components/ScheduleCard";
import { useState } from "react";

export default function SchedulesPage() {
  const [routeQuery, setRouteQuery] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  
  {
    /* should be replaced with API response data */
  }
  const suggestions = require("../../mockdata.json").schedulesSuggestions
  const routes = require("../../mockdata.json").schedulesRoutes

  function handleRouteSearch(text) {
    setRouteQuery(text);
  }

  function handleSuggestionSelect(selectedItem) {
    setSelectedSuggestion(selectedItem);
    setRouteQuery(selectedItem);
  }

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
          placeholder={"Pesquise uma rota"}
          style={styles.searchBar}
          value={routeQuery}
          onChangeText={handleRouteSearch}
          maxLength={30}
        />
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsLabel}>Sugestões</Text>
          <View style={styles.suggestions}>
            {suggestions.map((s) => (
              <Suggestion
                key={s.id}
                text={s.route}
                onPress={() => handleSuggestionSelect(s.route)}
                isSelected={s.route === selectedSuggestion}
              />
            ))}
          </View>
        </View>

        <View style={styles.mainContent}>
          {routes.map((route)=>(
              <ScheduleCard  
                key={route.id}
                routeDetails={route}
              />
            ))}
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
    paddingHorizontal: 30,
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
    paddingBottom: 40,
  },
  searchBar: {
    width: "100%",
    borderColor: "#0C6DFF",
  },
  suggestionsContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 15,
  },
  suggestions: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
    paddingTop: 15,
    flexWrap: "wrap",
  },
  suggestionsLabel: {
    color: "#3333",
    fontSize: 15,
    fontWeight: 300,
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
});
