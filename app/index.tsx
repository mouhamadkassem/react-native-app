import { Text, View } from "react-native";
import { Link } from "expo-router"

export default function Index() {
  return (
    <View className="flex-1 justify-start items-center">
      <Text className="text-blue-700">Bay bay Native.</Text>
      <Link href="/OnBoarding" className="text-blue-500">go to onBoarding</Link>
    </View>
  );
}
