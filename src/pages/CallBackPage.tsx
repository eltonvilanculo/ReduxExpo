import { useCallback, useState } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import List from "../components/NumberList";

export default function CallBackPage() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(1);
  const viewTheme: StyleProp<ViewStyle> = {
    backgroundColor: dark ? "#333" : "#fff",
  };
  const textTheme: StyleProp<TextStyle> = {
    color: dark ? "#fff" : "#333",
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  return (
    <View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        viewTheme,
      ]}
    >
      <TextInput
        style={{ width: "80%", padding: 14, borderBottomWidth: 0.5 }}
        onChangeText={(value) => setNumber(parseInt(value) ?? 0)}
      />

      <Button title="Toggle Theme" onPress={() => setDark((prev) => !prev)} />

      <List getItems={getItems} style={textTheme} />
    </View>
  );
}
