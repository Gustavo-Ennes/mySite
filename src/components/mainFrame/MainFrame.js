import { FullHeightMainFrame } from "./FullHeightMainFrame";

export const MainFrame = () => {
  return (
    <FullHeightMainFrame
      item
      xs={12}
      md={11}
      sx={{ backgroundColor: "#919100" }}
    >
      <div
        id="home"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div1
      </div>
      <div
        id="about"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div2
      </div>
      <div
        id="resume"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div3
      </div>
      <div
        id="portfolio"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div4
      </div>
      <div
        id="services"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div5
      </div>
      <div
        id="contact"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: 'none',
        }}
      >
        div6
      </div>
    </FullHeightMainFrame>
  );
};

// TODO exibir os seis componentes do menu, implementá-los cada um em sua pasta, implementar método handle no botão do menu que ao clicar altera a prop display
// e adiciona uma classe do animate.css
