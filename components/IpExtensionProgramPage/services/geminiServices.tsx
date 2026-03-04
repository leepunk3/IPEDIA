import { GoogleGenAI, Type } from "@google/genai";
import { PatentStrategyResponse } from "../types";

export const getPatentStrategy = async (industry: string, idea: string): Promise<PatentStrategyResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are an elite Patent Attorney and IP Strategist. Analyze the following invention idea and provide a 'Core ONE Scale UP' strategy.
    
    Industry: ${industry}
    Invention Idea: ${idea}
    
    The 'Core ONE Scale UP' strategy involves:
    1. Identifying one foundational 'Core' patent that protects the heart of the business.
    2. Designing a 'Scale UP' roadmap to expand this into a portfolio.
    3. Assessing immediate competitive risks.
    4. Providing 3 actionable next steps.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            coreConcept: { type: Type.STRING, description: "The foundational patent focus." },
            scalingPaths: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Methods to expand the core patent into a cluster."
            },
            riskAssessment: { type: Type.STRING, description: "Potential IP hurdles or competitor risks." },
            nextSteps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Immediate actions for the inventor."
            }
          },
          required: ["coreConcept", "scalingPaths", "riskAssessment", "nextSteps"]
        }
      }
    });
    
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Patent Analysis Error:", error);
    throw new Error("Failed to generate strategy. Please try again.");
  }
};