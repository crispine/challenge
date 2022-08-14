import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from "./src/screens/Home/Home"
import styles from './style'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='white' />
      <Home />
    </View>
  );
}
