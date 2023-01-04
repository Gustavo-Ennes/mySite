import { FullHeightMainFrame } from "./FullHeightMainFrame";
import { Introduction } from "../../Introduction/Introduction";
import { About } from "../../about/About";
import { Resume } from "../../resume/Resume";
import { Portfolio } from "../../portfolio/Portfolio";
import { Services } from "../../services/Services";
import { Contact } from "../../contact/Contact";
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
        <ThinLayerGrid>
          <div id="home">
            <Introduction />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </ThinLayerGrid>
      </MainFrameContainer>
    </FullHeightMainFrame>
  );
};
