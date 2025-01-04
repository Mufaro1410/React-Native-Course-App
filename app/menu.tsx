import { StyleSheet, Appearance, Platform, ScrollView, SafeAreaView, FlatList, View, Text, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const styles = creatStyles(theme, colorScheme);
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
    return (
        <Container>
            <FlatList
                data={MenuItems}
                keyExtractor={(item) => item.id.toString}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image source={MenuImages[item.id - 1]}/>
                    </View>
                )}
            />
        </Container>
    )
}

function creatStyles(theme, colorScheme) {
    return StyleSheet.create({})
}