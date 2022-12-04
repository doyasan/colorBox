import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h1`
  padding: 10px 10px 5px;
  font-size: 20px;
  border-bottom: 1px solid #000;
  color: ${(props) => (props.color ? props.color : "#000")};
`;

const ColorBox = styled.div`
  margin-bottom: 10px;
  width: 105px;
  height: 105px;
  border: 1px dotted #444;
  background-color: ${(props) => (props.BgColor ? props.BgColor : "#000")};
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorR: 0,
      colorG: 0,
      colorB: 0
    };
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.setState({ colorR: Math.floor(256 * Math.random()) });
    this.setState({ colorG: Math.floor(256 * Math.random()) });
    this.setState({ colorB: Math.floor(256 * Math.random()) });
  }

  render() {
    return (
      <Container>
        <Title 
        color="4e4e4e"
        >
          ランダムに色変わるやつ
        </Title>
        <ColorBox
          BgColor={
            "rgba(" +
            this.state.colorR +
            "," +
            this.state.colorG +
            "," +
            this.state.colorB +
            ")"
          }
        ></ColorBox>
        <button onClick={this.handleColor}>ランダマイザー</button>
        <div className="">
          <span>R:{this.state.colorR}</span>
          <br />
          <span>G:{this.state.colorG}</span>
          <br />
          <span>B:{this.state.colorB}</span>
        </div>
      </Container>
    );
  }
}

export default App;
