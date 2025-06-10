import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import RouteSuggestionChip from "../../components/RouteSuggestionChip";
import AlertModal from "../../components/AlertModal";
import Button from "../../components/Button";
import { useRouter } from "expo-router";
import { useGetRoutes, useQueryRoutes } from "../../hooks/useRouteQuerys";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MenuButton from "../../components/MenuButtom";
import MenuComponent from "../../components/Menu";
import QueryResultChip from "../../components/QueryResultChip";
import { useGetProfileDetails } from "../../hooks/useProfileQuerys";
import { saveProfileData } from "../../utils/secureStore";

export default function RoutesPage() {
  const [query, setQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isRouteNotFoundModalVisible, setIsRouteNotFoundModalVisible] = useState(false);

  const router = useRouter()
  const { data: routes } = useGetRoutes()
  const { data: queryResults = [] } = useQueryRoutes(query)
  const { data: profileDetails } = useGetProfileDetails()

  const routesSuggestionsList = Array.isArray(routes) ? routes.slice(0, 3) : []

  useEffect(() => {
    async function storeProfileData() {
      return await saveProfileData(profileDetails)
    }

    storeProfileData()
  },[profileDetails])

  function handleRouteSearch(text) {

    if (text.length < 1) {
      setIsModalVisible(!isModalVisible)
    } else {
      setQuery(text)
      if (queryResults.length === 0) {
        setIsRouteNotFoundModalVisible(!isModalVisible)
        return
      }
      setIsRouteNotFoundModalVisible(false)
      router.push({ pathname: "/trackingBus", params: { routeName: text } })
    }
  }

  function handleSuggestionSelect(selectedItem) {
    setQuery(selectedItem);
  }

  return (
    <View style={[styles.container]}>
      {isMenuVisible && (<MenuComponent />)}
      <View style={styles.header}>
        <Text style={styles.logo}>Angoway®</Text>
        <MenuButton onPress={() => setIsMenuVisible(!isMenuVisible)} />
      </View>
      <View style={styles.header}>
        <Text style={{
          fontSize: 24,
          fontFamily: "Inter-Bold",
        }}>{`Onde você deseja \nir hoje ?`}</Text>
      </View>

      <View style={styles.searchBarContent}>
        <SearchBar
          placeholder={"Zap Cinemas, Rua do Kikagil"}
          style={styles.searchBar}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsLabel}>{queryResults.length === 0 ? "Sugestões" : ""}</Text>
          <View style={styles.suggestions}>
            {queryResults.length === 0 ? (
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
            ) : (
              <FlatList
                data={queryResults}
                renderItem={({ item }) => (
                  <TouchableOpacity key={item.id} onPress={() => handleRouteSearch(item.name)}>
                    <QueryResultChip result={item.name} key={item.id} status={item.status} numBuses={item.buses.length} numStops={item.routeStops.length} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                bounces={true}
                ListHeaderComponent={() => (
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: "Inter-Light",
                    }}
                  >Resultados:</Text>
                )}
              />
            )}
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

      {
        isRouteNotFoundModalVisible && (
          <AlertModal
            type="error"
            text={`Não encontramos nenhuma rota com esse nome`}
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
    fontFamily: "Inter-Bold",
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
    color: "#4444",
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Inter-Light",
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
  resultsContainer: {
    marginTop: 5,
    width: "100%",
    height: 50,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#FCFCFB",
    borderRadius: 25
  },
});
