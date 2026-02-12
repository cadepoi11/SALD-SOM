
import { GoogleGenAI, Type } from "@google/genai";

export const generatePerformanceReport = async (playerName: string, stats: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short professional scout report for ${playerName} based on these stats: ${JSON.stringify(stats)}. Include 3 strengths, 2 areas for improvement, and a summary.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            improvements: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            scoutRating: { type: Type.NUMBER }
          },
          required: ["summary", "strengths", "improvements", "scoutRating"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Report Error:", error);
    return null;
  }
};
