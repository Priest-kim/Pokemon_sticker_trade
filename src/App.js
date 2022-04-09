import Nav from "./layout/Nav";
import SliderComponent from "./components/slide/Slider";
import StickerList from "./components/sticker/StickerList";
import styled from "styled-components";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Wrapper>
        <Nav />
        <SliderComponent />
        <StickerList />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0px 20rem;
`;
