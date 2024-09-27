import { useCatImg } from "./hooks/useCatImg";
import { useCatFact } from "./hooks/useCatFact";

export default function App() {
  const {fact, refreshFact} = useCatFact();
  const { imgUrl } = useCatImg({ fact });

  return (
    <>
      <h1>Random cats app</h1>
      <section>
        <p>
          {fact || "Loading fact..."}{" "}
          <input
            type="button"
            value="New fact"
            onClick={async () => refreshFact()}
          />{" "}
        </p>
        {imgUrl && <img src={imgUrl} alt="Random cat image with random fact" />}
      </section>
    </>
  );
}
