import axios from "axios";

const triggerEmailCloudFunction = async ({ name, email, message }) => {
  try {
    await axios({
      url: process.env.REACT_APP_SEND_EMAIL_URL,
      method: "POST",
      data: {
        name,
        email,
        message,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { triggerEmailCloudFunction };
