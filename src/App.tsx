import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";
import { MainLayout } from "./containers/MainLayout";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
