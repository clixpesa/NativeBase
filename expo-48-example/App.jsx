import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Box, Button } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
      </Box>
    </NativeBaseProvider>
  );
}
