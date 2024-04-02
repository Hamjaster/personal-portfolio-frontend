"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./context/ContextProvider";

export function ChakraWrapper({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export function ContextWrapper({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}
