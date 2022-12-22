import { useState, useEffect } from "react";
import { TransitionContext } from "./TransitionContext";

export const TransitionProvider = ({ children }) => {
  const [component, setComponent] = useState("home");
  const [oldComponent, setOldComponent] = useState(null);

  const hideAllComponents = () =>
    ["home", "about", "resume", "portfolio", "services", "contact"].map((id) =>
      document.getElementById(id).style.setProperty("display", "none")
    );

  useEffect(() => {
    const oldElement = document.getElementById(oldComponent);
    if (oldElement) {
      oldElement.classList.remove(
        "animate__animated",
        "animate__fadeIn",
        "animate__duration__slow",
      );
      oldElement.classList.add(
        "animate__animated",
        "animate__fadeOut",
      );
    }
  }, [oldComponent]);

  useEffect(() => {
    const element = document.getElementById(component);
    setTimeout(() => {
      hideAllComponents();
      if (element) {
        element.classList.remove("animate__animated", "animate__fadeOut");
        element.style.setProperty("display", "block");
        element.classList.add(
          "animate__animated",
          "animate__fadeIn",
          "animate__duration__slow",
        );
      }
    }, 200);
  }, [component]);

  return (
    <TransitionContext.Provider
      value={{ component, setComponent, setOldComponent }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
