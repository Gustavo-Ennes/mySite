import { createContext, useContext } from "react";

export const TransitionContext = createContext({});

export const useTransition = () => useContext(TransitionContext);