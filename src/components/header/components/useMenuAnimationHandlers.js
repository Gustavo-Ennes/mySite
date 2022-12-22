import { useTransition } from "../../../context/TransitionContext";

export const useMenuAnimationHandlers = ({ spanId, title }) => {
  const { component, setComponent, setOldComponent } = useTransition();
  const handleClick = () => {
    document
      .getElementById(spanId)
      ?.classList.remove("animate__animated", "animate__pulse");
    document
      .getElementById(spanId)
      ?.classList.add("animate__animated", "animate__rubberBand");
    if (title !== component) {
      setOldComponent(component);
      setComponent(title);
    }
  };

  const handleMouseEnter = () => {
    document
      .getElementById(spanId)
      ?.classList.remove("animate__animated", "animate__rubberBand");
    document
      .getElementById(spanId)
      ?.classList.add(
        "animate__animated",
        "animate__pulse",
        "animate__duration__200ms"
      );
  };
  const handleMouseLeave = () => {
    document
      .getElementById(spanId)
      ?.classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__rubberBand",
        "animate__duration__200ms"
      );
  };

  return {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};
