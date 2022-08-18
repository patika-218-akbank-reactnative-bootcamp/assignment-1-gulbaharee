import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Stories from './Stories';

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerText}>Instagram</Text>
                <Icons />
            </View>
            <Stories/>
        </View>
    );
};

const Icons = () => {
    return (
        <View style={styles.icons}>
            <IconAntDesign style={styles.icon} name="plus-square-o" size={20} />
            <IconAntDesign style={styles.icon} name="hearto" size={20} />
            <IconAntDesign style={styles.icon} name="message1" size={20} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            height: 120,
            display: "flex",
            flexDirection: "row",
        },
        headerText: {
            fontSize: 30,
            paddingTop: 30,
            paddingLeft: 30,
        },
        icons: {
            display: "flex",
            flexDirection: "row",
            paddingLeft: 100,
        },
        icon: {
            paddingTop: 40,
            paddingLeft: 15,
        }
    }
);

export default Header;