import { Grid, Link, styled } from "@mui/material";

import { contactLinks } from "../../../components/appbar/links";

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "teal",
  fontSize: "40px",
  textAlign: "center",
  width: "100%",
}));

const ContactLinks = () => {
  return contactLinks.map(({ name, url, iconClass }) => (
    <Grid item xs={3} key={name}>
      <StyledLink href={url} className={iconClass}></StyledLink>
    </Grid>
  ));
};

export { ContactLinks };
