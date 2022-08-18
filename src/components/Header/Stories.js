import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Stories = () => {
    return (
        <ScrollView horizontal>
            <View style={styles.stories}>
                <Users name={"Your story"} />
                <Users name={"itsjane"} />
                <Users name={"michael"} />
                <Users name={"miamia"} />
                <Users name={"heygirl"} />
                <Users name={"pabloherre"} />
                <Users name={"thejunee"} />
                <Users name={"lalalala"} />
            </View>
        </ScrollView>
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
        bottom: 40,
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
        bottom: 30,
    }
});
export default Stories;