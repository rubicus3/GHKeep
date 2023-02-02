import { Platform, ScrollView, View } from "react-native";
import THStatuss from '../components/THStatus';

export default function ManageScreen() {
    return (
        <ScrollView scrollEnabled={false}>
            <THStatuss />
        </ScrollView>
    );
}
