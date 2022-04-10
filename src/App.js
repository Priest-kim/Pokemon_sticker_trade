import Nav from "./layout/Nav";
import SliderComponent from "./components/slide/Slider";
import StickerList from "./components/pages/main/StickerList";
import styled from "styled-components";
import Footer from "./layout/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./components/pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <SliderComponent />
        <Switch>
          <Route exact path="/">
            <StickerList />
          </Route>
          <Route path="/pokemon/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0px 20rem;
`;
