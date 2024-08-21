import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Navbar />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
