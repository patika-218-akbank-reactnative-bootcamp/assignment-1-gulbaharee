import IconFeather from 'react-native-vector-icons/Feather';
import React from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';

const Captions = ({ user, caption, userLiked }) => {
    return (
        <View>
            <PostIcons />
            <PostLikes name={userLiked} />
            <Caption name={user, caption} />
        </View>
    )
}

const Caption = ({ user, caption }) => {
    <View style={styles.captionContainer}>
        <Text>{user}</Text>
        <Text>{caption}</Text>
    </View>
}

const PostIcons = ({ }) => {
    return (
        <View style={styles.postIcons}>
            <IconFeather style={styles.icon} name="heart" size={25} />
            <IconFeather style={styles.icon} name="message-circle" size={25} />
            <IconFeather style={styles.icon} name="send" size={25} />
        </View>
    )
}

const PostLikes = ({ name }) => {
    return (
        <View style={styles.likeContainer}>
            <View >
                <Image />
                <Image />
                <Image />
            </View>
            <Text>{name} and other people liked</Text>
        </View>
    )
}

const Image = () => {
    <View style={styles.imageStyle}></View>
}
export default Captions;

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            flexDirection: "row",
        },
        postIcons: {
            display: "flex",
            flexDirection: "row",
            margin: 5,
        },
        icon: {
            paddingLeft: 10,
        },
        imageStyle: {
            backgroundColor: "gray",
            width: 10,
            height: 10,
            borderRadius: 50,
        },
        likeContainer: {
            display: "flex",
            flexDirection: "row",
            margin: 5,
        },
        captionContainer: {
            display: "flex",
            flexDirection: "row",
            margin: 5,
        }
    }
);