import axios from "axios";

const sendEmail = async ({ name, email, message }) => {
  try {
    const res = await axios({
      url: "https://southamerica-east1-mysite-374312.cloudfunctions.net/sendPortfolioMessage",
      method: "POST",
      data: {
        name,
        email,
        message,
      },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
