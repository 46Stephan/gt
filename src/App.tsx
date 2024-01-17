//import { Header } from "./components/Header"
import styled from "styled-components";


const Container = styled.div`
height: 100%;
display: flex;
flex-direction: row;
margin: auto;


background-color: beige;
max-width: 800px;

#left {
  background-color: orange;
  min-width: 180px;
}

#content {
  background-color: yellow;
  flex: 1;
}

#right {
  background-color: pink;
  min-width: 180px;
}
`;
function App() {

  return (
    <>
  <Container>
<div id="left">
  <p>Left Menu</p>
</div>

<div id="content">
  <p>Content</p>
</div>

<div id="right">
  <p>Right Menu</p>
</div>

</Container>
    </>
  )
}

export default App
