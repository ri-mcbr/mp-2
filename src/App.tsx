import { useEffect, useState } from "react";
import Covid from "./components/Covid";
import type { State } from "./interfaces/State";

export default function App() {
  const [data, setData] = useState<State[]>([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/states?sort=cases")
        .then((response) => response.json())
        .then((data: State[]) => setData(data));
  }, []);

  return (
      <Covid data={data} />
  );
}
