import { StyledHeader, Nav, Logo } from "../styled/Header/Header.styled";
import { Container } from "../styled/Container/Container.styled";
import { Button } from "../styled/Button/StyledButton";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
