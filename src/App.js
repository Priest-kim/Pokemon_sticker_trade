import Nav from "./layout/Nav";
import SliderComponent from "./components/slide/Slider";
import CadrList from "./components/card/CadrList";
import styled from "styled-components";

function App() {
  return (
    <>
      <Nav />
      <Wrapper>
        <SliderComponent />
        <CadrList />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0px 20rem;
`;
