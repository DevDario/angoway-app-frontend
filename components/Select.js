import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PropTypes from "prop-types";

export default function Select({ selected, onSelect, style, data, text }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                style={[styles.selectBox, style]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.selectedText}>
                    {selected || text}
                </Text>

                {!selected && <FontAwesomeIcon icon={faChevronDown} size={15} color="#555" />}
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        onSelect(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={{ fontFamily: "Inter-Regular" }}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

Select.propTypes = {
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.any
}

const styles = StyleSheet.create({
    selectBox: {
        borderBottomWidth: 2,
        borderBottomColor: "#0C6DFF",
        width: "100%",
        fontSize: 16,
        paddingBottom: 13,
        color: "#212121",
        textAlign: "left",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    selectedText: {
        fontSize: 16,
        color: "#555",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    option: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#0C6DFF"
    },
})
