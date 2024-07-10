import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const InfoScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Info</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});


export default InfoScreen;