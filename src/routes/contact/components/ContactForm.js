import { useEffect, useState, useContext } from "react";

import { Grid } from "@mui/material";

import { TitleTypography } from "../../../components";
import { LoadingContext } from "../../../context/loading/context";
import { triggerEmailCloudFunction } from "../../../service/email";

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
  const { setIsLoading } = useContext(LoadingContext);
  const notSentSubtitle = "C'mon, don't be shy!";
  const sentSubtitle = "Thank you for your message!";

  const sendEmail = async () => {
    if (!messageSent) {
      try {
        setIsLoading(true)
        setMessageSent(true);
        await triggerEmailCloudFunction({ message, name, email });
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handleMessageChange = ({ target: { value } }) => setMessage(value);
  const handleButtonClick = async () => {
    await sendEmail();
  };
  const handleButtonPress = async (e) => {
    if (e.key === "Enter") {
      await sendEmail();
    }
  };

  useEffect(() => {
    if (messageSent) {
      const element = document.querySelector("#paragraphField");
      element.classList.add(
        "animate__animated",
        "animate__rubberBand",
        "animate__duration__slow"
      );
    }
  }, [messageSent]);

  return (
    <>
      <Grid item xs={12}>
        <TitleTypography variant="h2">Contact</TitleTypography>
      </Grid>
      <Grid item xs={12}>
        <StyledParagraph id="paragraphField">
          {messageSent ? sentSubtitle : notSentSubtitle}
        </StyledParagraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <PaddingBox id="emailField">
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
        <PaddingBox id="nameField">
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
        <PaddingBox id="messageField">
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
          onClick={handleButtonClick}
          onKeyDown={handleButtonPress}
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
