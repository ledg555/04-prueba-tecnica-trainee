import { useState, useEffect } from "react";
import { getCatImage } from "../actions/getCatImage";

export function useCatImg({ fact }) {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    if (!fact) return;
    getCatImage().then((id) => {
      const newUrl = `https://cataas.com/cat/${id}/says/${fact}?fontSize=80&fontColor=white`;
      setImgUrl(newUrl);
    });
  }, [fact]);
  return { imgUrl };
}
