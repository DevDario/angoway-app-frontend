import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import Suggestion from "../../components/Suggestion";
import ScheduleCard from "../../components/ScheduleCard";
import { useState } from "react";
import { useGetRoutes, useQuerySchedulesByRoutes } from "../../hooks/useRouteQuerys";

export default function SchedulesPage() {
  const [routeQuery, setRouteQuery] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const { data: routes } = useGetRoutes()
  const { data: queryResult } = useQuerySchedulesByRoutes(routeQuery)

  const suggestions = Array.isArray(routes) ? routes.slice(0, 3) : []
  const fetchedRoutes = Array.isArray(queryResult) ? queryResult : []

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
                text={s.name}
                onPress={() => handleSuggestionSelect(s.name)}
                isSelected={s.name === selectedSuggestion}
              />
            ))}
          </View>
        </View>

        <View style={styles.mainContent}>
          {fetchedRoutes.length === 0 ? (
            <View style={{
              display: "flex", alignItems: "center", alignContent: "center", marginVertical: 80
            }}>
              <Text style={{ color: '#212121', fontSize: 19, fontWeight: "bold" }}>Nenhum Resultado</Text>
            </View>
          ) : (
            fetchedRoutes.map((route) => (
              <View key={route.id} style={{ width: '100%' }}>
                {route.schedules && route.schedules.length > 0 ? (
                  route.schedules.map((schedule) => (
                    <ScheduleCard
                      key={schedule.id}
                      routeDetails={schedule}
                    />
                  ))
                ) : (
                    <ScheduleCard
                      key={route.id}
                      routeDetails={route}
                      empty={true}
                    />
                )}
              </View>
            ))
          )}
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
