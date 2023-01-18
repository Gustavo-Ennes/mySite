import { Grid } from "@mui/material";
import { useState } from "react";

import { TitleTypography } from "../../../components";
import { sendEmail } from "../../../service/email";

import {
  StyledTextArea,
  StyledParagraph,
  PaddingBox,
  ButtonBox,
  StyledButton,
} from "../style";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const notSentSubtitle = "C'mon, don't be shy!";
  const sentSubtitle = "Thank you for your message!";

  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handleMessageChange = ({ target: { value } }) => setMessage(value);
  const handleSendEmail = () => {
    try {
      sendEmail({ message, name, email });
      setMessageSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <TitleTypography variant="h2">Contact</TitleTypography>
      </Grid>
      <Grid item xs={12}>
        <StyledParagraph>
          {messageSent ? sentSubtitle : notSentSubtitle}
        </StyledParagraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <PaddingBox>
          <StyledTextArea
            value={email}
            onChange={handleEmailChange}
            label="E-mail"
            placeholder="Put yout e-mail here"
            variant="outlined"
            disabled={messageSent}
          />
        </PaddingBox>
      </Grid>
      <Grid item xs={12} md={4}>
        <PaddingBox>
          <StyledTextArea
            value={name}
            onChange={handleNameChange}
            label="Name"
            placeholder="Put your name here"
            variant="outlined"
            disabled={messageSent}
          />
        </PaddingBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <PaddingBox>
          <StyledTextArea
            value={message}
            onChange={handleMessageChange}
            label="Mesage"
            placeholder="Write something..."
            multiline
            rows={10}
            variant="outlined"
            disabled={messageSent}
          />
        </PaddingBox>
      </Grid>
      <ButtonBox>
        <StyledButton
          onClick={handleSendEmail}
          variant="contained"
          disabled={messageSent}
        >
          Say hi!
        </StyledButton>
      </ButtonBox>
    </>
  );
};

export { ContactForm };
