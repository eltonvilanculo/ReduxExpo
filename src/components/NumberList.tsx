import { useEffect, useState } from "react";
import { View, Text, StyleProp, TextStyle } from "react-native";

interface IList<T> {
  getItems: () => Array<T>;
  style: StyleProp<TextStyle>;
}

export default function List({ getItems, style }: IList<number>) {
  const [items, setItems] = useState<Array<number>>([]);

  useEffect(() => {
    setItems(getItems());
    console.log("rendered ");
  }, [getItems]);
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index} style={style}>
          {" "}
          {item}
        </Text>
      ))}
    </View>
  );
}
