import { mockKeywords } from "../data/mockKeywords";


export const calculateScore = () => {
  const baseScore = 60;
  const keywordBonus = mockKeywords.length * 2;

  let finalScore = baseScore + keywordBonus;

  if (finalScore > 100) {
    finalScore = 100;
  }

  return finalScore;
};
