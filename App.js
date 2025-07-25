import { TailwindProvider } from "tailwindcss-react-native";
import "./global.css";
import { Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
 
export default function App() {
  return (
    <TailwindProvider>
      <HomeScreen />
    </TailwindProvider>
  );
}