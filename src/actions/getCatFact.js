import { RANDOM_FACT_ENDPOINT } from "../api";

async function getCatFact() {
  const res = await fetch(RANDOM_FACT_ENDPOINT);
  const data = await res.json();
  const newFact = data.fact.split(/[^\w']+/, 5).join(" ");
  return newFact;
}

export {getCatFact}