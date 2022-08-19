import IconFeather from 'react-native-vector-icons/Feather';
import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import PostIcons from './PostIcons';

const Captions = ({ user, caption, userLiked }) => {
    return (
        <View>
            <PostIcons />
            <PostLikes name={userLiked} />
            <Caption user={user} caption={caption}/>
        </View>
    )
}

const Caption = ({ user, caption }) => {
    return (
        <View style={styles.captionContainer}>
            <Text style={styles.userText}>{user}</Text>
            <Text style={styles.captionText}>{caption}</Text>
        </View>
    )

}

const PostLikes = ({ name }) => {
    return (
        <View style={styles.likeContainer}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <LikesImage />
                <LikesImage />
                <LikesImage />
            </View>
            <Text style={{ paddingLeft: 15 }}>{name} and other people liked</Text>
        </View>
    )
}

const LikesImage = () => {
    return (
        <Image source={{uri:"https://picsum.photos/200/200"}} style={{
            width: 20,
            height: 20,
            borderRadius: 32,
            backgroundColor: "rgba(0,0,0,0.3)",
            marginRight: -10,
        }} />
    )
}

export default Captions;

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            flexDirection: "row",
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
            margin: 8,
            paddingLeft:4,
        },
        captionContainer: {
            display: "flex",
            flexDirection: "row",
            margin: 5,
        },
        userText:{
            fontWeight: "600",
            fontSize: 14,
            paddingLeft:5,
        },
        captionText:{
            fontSize: 14,
            paddingLeft:10,
        }
    }
);