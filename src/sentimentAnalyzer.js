import Sentiment from "sentiment";

export function analyze(text) {
  const sentiment = new Sentiment();
  const result = sentiment.analyze(text);
  return result.comparative;
}
