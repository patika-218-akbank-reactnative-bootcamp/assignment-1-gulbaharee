import React from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

const Posts = () => {
    return (
        <ScrollView>
            <Post name="heyjane" />
            <Post />
            <Post />
        </ScrollView>

    )
};

const Post = ({ name }) => {
    return (
        <View style={styles.postContainer}>
            <PostHeader name={name} />
            <View style={styles.postImage}></View>
        </View>
    )
};

const PostHeader = ({ name }) => {
    return (
        <View style={styles.postHeader}>
            <View style={styles.postHeaderUser}>
                <View style={styles.userImage}></View>
                <Text style={styles.username}>{name}</Text>
            </View>
            <View style={styles.postHeaderIcon}>
                <IconEntypo style={styles.icon} name="dots-three-horizontal" size={20} />
            </View>
        </View>

    )
};

const Caption = ({ }) => {
    return (
        <View></View>
    )
}
const PostIcons = ({ }) => {
    return (
        <View></View>
    )
}

const PostLikes = ({ }) => {
    return (
        <View></View>
    )
}

const styles = StyleSheet.create(
    {
        postHeaderUser: {
            display: "flex",
            flexDirection: "row",
            alignItems: 'center',
        },
        postHeaderIcon:{
            display:"flex",
            justifyContent:"flex-end",
            marginLeft: 210,
        },
        icon: {
            
        },
        postHeader: {
            height: 60,
            display: "flex",
            flexDirection: "row",
            alignItems: 'center',

        },
        userImage: {
            width: 50,
            height: 50,
            justifyContent: "center",
            margin: 10,
            borderRadius: 50,
            backgroundColor: "black",
        },
        postImage: {
            backgroundColor: "gray",
            width: 400,
            height: 400,
        }

    }
);

export default Posts;