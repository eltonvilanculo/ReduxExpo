import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementWithSteps, signIn } from "../actions";

export default function MainPage() {
  const { counterReducer, loggedReducer } = useSelector(
    (state: { counterReducer: string; loggedReducer: boolean }) => state
  );

  console.log(counterReducer);
  const dispatch = useDispatch();
  const title = loggedReducer ? "Sair" : "Entrar";
  return (
    <View style={styles.container}>
      {loggedReducer && <Text>welcome Elton</Text>}
      <Text>
        Open up App.tsx to start working on your app! {counterReducer}
      </Text>

      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="++" onPress={() => dispatch(incrementWithSteps(2))} />

      <Button title="-" onPress={() => dispatch(decrement())} />
      <Button title={title} onPress={() => dispatch(signIn())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
