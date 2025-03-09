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
  const suggestions = [
    { id: 1, route: "Patriota-Benfica", lat: "-12345", long: "54321" },
    { id: 2, route: "Benfica-Golf2", lat: "-12345", long: "54321" },
    { id: 3, route: "Zango-Kilamba", lat: "-12345", long: "54321" },
    { id: 4, route: "Benfica-Kilamba", lat: "-12345", long: "54321" },
    { id: 5, route: "1 Maio - Kilometro 26", lat: "-12345", long: "54321" },
  ];

  {
    /* should be replaced with API response data */
  }
  const routes = [
    {
      id: 1,
      route: "Patriota-Benfica",
      ATA: 45,
      aproximatelyHour: "7:25",
      Km: "30,6 Km",
      status: "ativo",
      start: "Patriota",
      startDescription: "Paragem do Patriota(Partida)",
      startTime: "6H30",
      stops: [
        { id: 1, name: "Paragem do A" },
        { id: 2, name: "Paragem do B" },
        { id: 2, name: "Paragem do C" },
      ],
      destiny: "Benfica",
      destinyDescription: "Paragem do Girafa(Chegada)",
      destinyTime: "7H25",
    },
  ];

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
          <ScheduleCard routeDetails={routes[0]} />
          <ScheduleCard routeDetails={routes[0]} />
          <ScheduleCard routeDetails={routes[0]} />
          <ScheduleCard routeDetails={routes[0]} />
          <ScheduleCard routeDetails={routes[0]} />
          <ScheduleCard routeDetails={routes[0]} />
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
    fontWeight: 500,
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
});
