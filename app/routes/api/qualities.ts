import { LoaderFunction } from "remix";

const qualities = [
  "A problem solver 🤔",
  "A self starter  🏇",
  "A perpetual learner 📚",
  "A innovator 💡",
  "A rule breaker ♟️",
  "A team player 🤝"
];

export const loader: LoaderFunction = async (): Promise<string> => {
  console.log(`🟠 Fetching the qualities list`);
  return qualities[Math.floor(Math.random() * qualities.length)];
};
