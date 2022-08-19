import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const Stories = () => {
    return (
        <View style={styles.stories}>
            <Users name={"Your story"} />
            <Users name={"rachel"} />
            <Users name={"sierra"} />
            <Users name={"monica"} />
            <Users name={"chandler"}  />
        </View>
    )
}

const Users = ({ name , img}) => {
    return (
        <View style={styles.storyContainer}>
            <Image source={{uri:"https://picsum.photos/200/200"}} style={styles.userImage}/>
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