import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Stories = () => {
    return (
            <View style={styles.stories}>
                <Users name={"Your story"} />
                <Users name={"rachel"} />
                <Users name={"sierra"} />
                <Users name={"monica"} />
                <Users name={"chandler"} />
                <Users name={"ross"} />
                <Users name={"sena"} />
                <Users name={"osmansafiye"} />
            </View>
    )
}

const Users = ({ name }) => {
    return (
        <View style={styles.storyContainer}>
            <View style={styles.userImage}></View>
            <Text style={styles.username}>{name}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        bottom: 20,
        borderRadius: 50,
        backgroundColor: "black",
    },
    stories: {
        display: 'flex',
        flexDirection: 'row',
    },
    storyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 15,
    },
    username: {
        bottom: 10,
    }
});
export default Stories;