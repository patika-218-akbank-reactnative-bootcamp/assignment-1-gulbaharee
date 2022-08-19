import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Stories from './Stories';

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('./Instagram-Logo.png')} style={{ width: 120, height: 60 }}/>
                <Icons />
            </View>
            <Stories/>
        </View>
    );
};

const Icons = () => {
    return (
        <View style={styles.icons}>
            <IconAntDesign style={styles.icon} name="plussquareo" size={25} />
            <IconAntDesign style={styles.icon} name="hearto" size={25} />
            <IconAntDesign style={styles.icon} name="message1" size={25} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent:"center",
            padding:10,
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
            paddingTop: 20,
            paddingLeft: 20,
        }
    }
);

export default Header;