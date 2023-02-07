import { Platform, ScrollView, View } from "react-native";
import { Text, Divider } from "react-native-paper";
import THStatus from "../components/THStatus";
import { useTheme } from "react-native-paper";

export default function ManageScreen() {
    const theme = useTheme();

    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Статус
            </Text>

            <Divider />
            <THStatus />
            <THStatus status={false} icon="water-sync" text="Полив"/>
            <THStatus />
            <THStatus />
            <THStatus />
            <THStatus />
            <THStatus />
        </ScrollView>
    );
}
