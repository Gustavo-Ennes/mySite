import { Container } from "@mui/material";

import { PaddingGrid } from "./style";
import { ContactForm, ContactLinks } from "./components";

const Contact = () => (
  <Container maxWidth="xl" id="contact">
    <PaddingGrid container alignItems="center" justifyContent="center">
      <ContactForm />
      <ContactLinks />
    </PaddingGrid>
  </Container>
);

export { Contact };
