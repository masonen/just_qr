import React from 'react';
import {StyleSheet} from 'react-native';
import * as Main from "./app/components/main";

export default function App() {
  return (
      <Main.Container>
        <Main.Title>Just QR</Main.Title>
        <Main.Text>No Adds. no 💩.</Main.Text>
        <Main.Text>Just a Barcode Scanner.</Main.Text>
      </Main.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
