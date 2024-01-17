import styled from "styled-components";


export const Container = styled.div`
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