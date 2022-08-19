import IconFeather from 'react-native-vector-icons/Feather';
import React from "react";
import { View, StyleSheet, ScrollView, Text,Image } from 'react-native';


const PostIcons = ({ }) => {
    return (
        <View style={styles.postIcons}>
            <IconFeather style={styles.icon} name="heart" size={25} />
            <IconFeather style={styles.icon} name="message-circle" size={25} />
            <IconFeather style={styles.icon} name="send" size={25} />
        </View>
    )
}

export default PostIcons;

const styles = StyleSheet.create(
    {
        
        postIcons: {
            display: "flex",
            flexDirection: "row",
            marginTop: 8,
        },
        icon: {
            paddingLeft: 12,
        },
    }
);