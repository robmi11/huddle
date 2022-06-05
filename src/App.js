import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme/theme";
import GlobalStyles from "./components/styled/Global/StyledGlobal";
import Header from "./components/Header/Header";
import { Container } from "./components/styled/Container/Container.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Witaj świecie</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
