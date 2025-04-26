import React from 'react'
import { Image, StyleSheet, Text, Linking } from 'react-native'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'


const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.text, { fontSize: 26, textTransform: "uppercase", letterSpacing: 3, alignSelf: "center" }]}> Augment Cart </Text>
                <Image source={require("../../assets/icon.png")} style={styles.image} />
            </View>
            <View>
                <Text style={styles.text}>Your one-stop shop for fresh groceries and amazing AR experience. Enjoy quality products, fast delivery, and great service!</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.text, { fontSize: 24, fontWeight: "bold" }]}>FOLLOW US</Text>
            </View>
            <View style={styles.iconRow}>
            <IconButton 
        icon="twitter" 
        iconColor="#4caf50" 
        size={30} 
        onPress={() => {
                Linking.openURL('https://x.com/');
        }} 
    />
    <IconButton 
        icon="linkedin" 
        iconColor="#4caf50" 
        size={30} 
        onPress={() => {
                Linking.openURL('https://linkedin.com/');
        }} 
    />
    <IconButton 
        icon="facebook" 
        iconColor="#4caf50" 
        size={30} 
        onPress={() => {
                Linking.openURL('https://facebook.com/');
        }} 
    />
    <IconButton 
        icon="instagram" 
        iconColor="#4caf50" 
        size={30} 
        onPress={() => {
                Linking.openURL('https://instagram.com/');
        }} 
    />
            </View>
            <View style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: "white", marginBottom: 30 }}>
                <Text style={[styles.text, {alignSelf: "center", paddingVertical: 10}]}>© 2025 AugmentCart. All rights reserved.</Text>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212529",
        paddingHorizontal: 20,
        marginTop: 50

    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 60,
    },
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 30
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "justify",
    },
    iconRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20
    }
})
