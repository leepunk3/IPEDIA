
import { GoogleGenAI, Type } from "@google/genai";
import { PatentStrategyResponse } from "../types";

export const getPatentStrategy = async (industry: string, idea: string): Promise<PatentStrategyResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are an elite Patent Attorney and TIPS Strategy Consultant. 
    Analyze the following tech startup's idea and provide a 'TIPS Performance Proof' IP strategy.
    
    Industry: ${industry}
    Core Technology/Idea: ${idea}
    
    The 'TIPS Scale-Up' strategy must focus on:
    1. 'Core ONE': Identifying one foundational patent that perfectly matches the TIPS R&D goals.
    2. 'Performance Proof': How this IP portfolio will prove technical superiority during the final TIPS evaluation.
    3. 'Commercialization Potential': How the IP strategy supports market entry and business scalability.
    4. 'Scale UP': Designing 3-4 expansion paths (defensive, overseas, or modification) to be executed within the 2-year TIPS period.
    
    Provide the response in Korean.
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
            coreConcept: { type: Type.STRING, description: "TIPS 핵심 기술 및 대표 특허 정의" },
            scalingPaths: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "TIPS R&D 기간 중 추진할 전략적 확장 경로 (3-4개)"
            },
            riskAssessment: { type: Type.STRING, description: "TIPS 최종 평가 시 예상되는 IP 관련 리스크 및 대응" },
            nextSteps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "TIPS 선정 직후 즉시 실행해야 할 3가지 행동 지침"
            }
          },
          required: ["coreConcept", "scalingPaths", "riskAssessment", "nextSteps"]
        }
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("No response text");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini TIPS Strategy Error:", error);
    throw new Error("TIPS 전략 수립 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
};