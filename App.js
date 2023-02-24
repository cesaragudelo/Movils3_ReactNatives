import { StyleSheet, Text, View } from 'react-native';
import { styles,mytexts } from './assets/styles/styles1';
export default function App() {
  return (
    <View style={[styles.container, styles.borders,{borderRadius:30}]}>
      <Text style={mytexts.text}>Cesar</Text>
    </View>
  );
}

