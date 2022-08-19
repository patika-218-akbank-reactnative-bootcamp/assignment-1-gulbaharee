import React from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Captions from './Captions';

const Posts = () => {
    return (
        <ScrollView>
            <Post name="heyjane" caption={"hi!"} liked={"sierra"}/>
            <Post name ="sierra"caption={"happy sunday!"} liked={"chandler"}/>
            <Post name="sena" caption={"hi!"} liked={"sierra"}/>
        </ScrollView>

    )
};

const Post = ({ name,liked,caption }) => {
    return (
        <View style={styles.postContainer}>
            <PostHeader name={name} />
            <View style={styles.postImage}></View>
            <Captions user={name} caption={caption} userLiked={liked}/>
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
            paddingLeft:10,
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