import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}


export const mockData = {
  getFoodSafetyData: (query) => {
    // Normalize query to detect food type
    const normalizedQuery = query.toLowerCase();

    //TODO : repalce this with AI
    
    if (normalizedQuery.includes('raw fish') || normalizedQuery.includes('sushi')) {
      return {
        foodItem: "Raw fish/sushi",
        safetyRating: "HIGH RISK",
        overallScore: 2.1,
        maxScore: 10,
        recommendation: "AVOID",
        summary: "Raw fish poses significant foodborne illness risks for immunocompromised cancer patients. Multiple studies show increased infection rates, particularly from Salmonella, Listeria, and parasites.",
        
        safety: {
          riskLevel: "High",
          primaryConcerns: [
            "Foodborne pathogens (Salmonella, Listeria, E. coli)",
            "Parasitic infections (Anisakis, tapeworms)",
            "Compromised immune system cannot fight infections effectively",
            "Risk of severe complications requiring hospitalization"
          ],
          safeAlternatives: [
            "Fully cooked fish (internal temp 145°F/63°C)",
            "Canned fish products",
            "Cooked sushi (California rolls with cooked crab)",
            "Vegetarian sushi options"
          ]
        },
        guidelines: [
          {
            organization: "American Cancer Society",
            recommendation: "Avoid raw fish",
            strength: "Strong",
            reasoning: "High risk of foodborne illness in immunocompromised patients"
          },
          {
            organization: "National Cancer Institute",
            recommendation: "Cook all fish to 145°F",
            strength: "Strong",
            reasoning: "Eliminates harmful bacteria and parasites"
          },
          {
            organization: "Academy of Nutrition and Dietetics",
            recommendation: "Avoid during active treatment",
            strength: "Moderate",
            reasoning: "Precautionary approach for vulnerable patients"
          }
        ],
        interactions: {
          withTreatments: [
            {
              treatment: "Chemotherapy",
              risk: "High",
              details: "Chemotherapy suppresses immune system, making foodborne infections more severe"
            },
            {
              treatment: "Radiation Therapy",
              risk: "Moderate",
              details: "May affect digestive system's ability to handle pathogens"
            },
            {
              treatment: "Immunotherapy",
              risk: "High",
              details: "Immune system alterations increase infection susceptibility"
            }
          ]
        }
      };
    } else if (normalizedQuery.includes('turmeric')) {
      return {
        foodItem: "Turmeric",
        safetyRating: "CAUTION",
        overallScore: 6.5,
        maxScore: 10,
        recommendation: "CAUTION",
        summary: "Turmeric may interact with certain cancer treatments and medications. While it has anti-inflammatory properties, its effects on cancer treatment outcomes are not fully understood.",
        
        safety: {
          riskLevel: "Moderate",
          primaryConcerns: [
            "Potential interactions with chemotherapy drugs",
            "May affect blood clotting",
            "Could interfere with radiation therapy",
            "Limited research on optimal dosing"
          ],
          safeAlternatives: [
            "Consult with oncologist before use",
            "Consider lower doses",
            "Monitor for side effects",
            "Use as part of a balanced diet"
          ]
        },
        guidelines: [
          {
            organization: "American Cancer Society",
            recommendation: "Use with caution",
            strength: "Moderate",
            reasoning: "Limited evidence on interactions with cancer treatments"
          }
        ],
        interactions: {
          withTreatments: [
            {
              treatment: "Chemotherapy",
              risk: "Moderate",
              details: "May interact with certain chemotherapy drugs"
            }
          ]
        }
      };
    }
    // Return a default response for unknown queries
    return {
      foodItem: query,
      safetyRating: "UNKNOWN",
      overallScore: 0,
      maxScore: 10,
      recommendation: "CONSULT DOCTOR",
      summary: "Please consult with your healthcare provider for specific guidance about this food item.",
      
      safety: {
        riskLevel: "Unknown",
        primaryConcerns: ["Insufficient data available"],
        safeAlternatives: ["Consult with healthcare provider"]
      },
      guidelines: [],
      interactions: {
        withTreatments: []
      }
    };  }
}; 
