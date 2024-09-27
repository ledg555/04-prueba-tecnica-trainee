import { useState, useEffect } from "react";
import { getCatFact } from "../actions/getCatFact";

export function useCatFact() {
  const [fact, setFact] = useState("");
  const refreshFact = () => {
    getCatFact().then(setFact);
  };
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
