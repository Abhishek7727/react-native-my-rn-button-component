import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-my-rn-button-component';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Submit"
        onPress={()=>console.log("Pressed")}
        backgroundColor="#007BFF"
        style={{width: "80%"}}
        disabled={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
