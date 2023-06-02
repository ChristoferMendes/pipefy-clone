import { MdAdd } from "react-icons/md";

import { Card } from "../Card/Card.jsx";
import { Container } from "./styles.js";

export function List() {
  return (
    <Container>
      <header>
        <h2>Tasks</h2>
        <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
