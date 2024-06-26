import { configureStore } from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import appReducer from "./src/reducers";
import { Provider, useSelector } from "react-redux";
import MainPage from "./src/pages/MainPage";

export default function App() {
  const store = configureStore({
    reducer: appReducer,
  });

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
