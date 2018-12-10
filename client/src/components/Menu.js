import React from "react";
import { Header } from "semantic-ui-react";

const Menu = ({ id, name }) => (
  <div>
    <Header as="h1">{name}</Header>
  </div>
);

export default Menu;
