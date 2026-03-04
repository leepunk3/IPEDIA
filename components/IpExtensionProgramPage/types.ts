
export interface PatentStrategyResponse {
  coreConcept: string;
  scalingPaths: string[];
  riskAssessment: string;
  nextSteps: string[];
}

export interface StrategyRequest {
  industry: string;
  inventionIdea: string;
}
