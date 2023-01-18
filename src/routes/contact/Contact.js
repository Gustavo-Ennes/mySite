import { Container } from "@mui/material";

import { PaddingGrid } from "./style";
import { ContactForm } from "./components";

const Contact = () => (
  <Container maxWidth="xl">
    <PaddingGrid container alignItems="center" justifyContent="center">
      <ContactForm />
    </PaddingGrid>
  </Container>
);

export { Contact };
