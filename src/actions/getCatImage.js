import { RANDOM_CAT_ENDPOINT } from "../api";

async function getCatImage() {
  const res = await fetch(RANDOM_CAT_ENDPOINT);
  const data = await res.json();
  const id = data._id;
  return id;
}

export {getCatImage}