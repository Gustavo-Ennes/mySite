import { Introduction } from "../../Introduction/Introduction";
import { About } from "../../about/About";
import { Resume } from "../../resume/Resume";
import { Portfolio } from "../../portfolio/Portfolio";
import { Services } from "../../services/Services";
import { Contact } from "../../contact/Contact";
import { FullHeightMainFrame } from "./FullHeightMainFrame";
import { FullHeightGrid } from "../FullHeightGrid";
import { MainFrameContainer } from "./MainFrameContainer";
import { ThinLayerGrid } from "../ThinLayerGrid";

export const MainFrame = () => {
  return (
    <FullHeightMainFrame
      item
      xs={12}
      md={11}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <MainFrameContainer disableGutters>
        <ThinLayerGrid container>
          <FullHeightGrid item id="home" xs={12}>
            <Introduction />
          </FullHeightGrid>
          <FullHeightGrid item id="about" xs={12}>
            <About />
          </FullHeightGrid>
          <FullHeightGrid item id="resume" xs={12}>
            <Resume />
          </FullHeightGrid>
          <FullHeightGrid item id="portfolio" xs={12}>
            <Portfolio />
          </FullHeightGrid>
          <FullHeightGrid item id="services" xs={12}>
            <Services />
          </FullHeightGrid>
          <FullHeightGrid id="contact">
            <Contact />
          </FullHeightGrid>
        </ThinLayerGrid>
      </MainFrameContainer>
    </FullHeightMainFrame>
  );
};
