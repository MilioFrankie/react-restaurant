import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import MenuList from "./components/MenuList";
import axios from "axios";

class App extends Component {
  state = { menus: [] };

  componentDidMount() {
    axios.get("/api/menus").then(res => {
      this.setState({ menus: res.data });
    });

    
  }

  render() {
    return (
      <Container style={{ paddingTop: "40px" }}>
        <Header as="h1">Emilio's restaurant</Header>
        <MenuList menus={this.state.menus} />
      </Container>
    );
  }
}

export default App;
