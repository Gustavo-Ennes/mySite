import { FullHeightMainFrame } from "./FullHeightMainFrame";

export const MainFrame = ({component}) => {
  return (
    <FullHeightMainFrame
      item
      xs={12}
      md={11}
      sx={{ backgroundColor: "#919100" }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div1" ? "block" : "none"}`
        }}
      >
        div1
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div2" ? "block" : "none"}`
        }}
      >
        div2
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div3" ? "block" : "none"}`
        }}
      >
        div3
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div4" ? "block" : "none"}`
        }}
      >
        div4
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div5" ? "block" : "none"}`
        }}
      >
        div5
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: `${component === "div6" ? "block" : "none"}`
        }}
      >
        div6
      </div>
    </FullHeightMainFrame>
  );
};

// TODO exibir os seis componentes do menu, implementá-los cada um em sua pasta, implementar método handle no botão do menu que ao clicar altera a prop display
// e adiciona uma classe do animate.css
