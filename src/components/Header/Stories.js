import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Stories = () => {
    return (
        <View>
            <Users />
        </View>
    )
}

const Users = () => {
    return (
        <View style={styles.userImage}></View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 80,
        height: 80,
        left: 16,
        bottom: 20,
        borderRadius:50,
        backgroundColor: "rgba(0,0,0,0,2)",
    },
});
export default Stories;