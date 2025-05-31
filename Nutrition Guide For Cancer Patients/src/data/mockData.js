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
        evidence: [
          {
            title: "Foodborne Infections in Immunocompromised Cancer Patients",
            authors: "Smith et al.",
            journal: "Journal of Clinical Oncology",
            year: 2022,
            finding: "Study found 3.5x higher risk of severe foodborne infections in cancer patients consuming raw fish compared to cooked fish.",
            peerReviewScore: 8.5,
            reproducibilityScore: 7.8,
            overallScore: 8.2
          },
          {
            title: "Parasitic Infections in Cancer Treatment",
            authors: "Johnson et al.",
            journal: "Cancer Research",
            year: 2021,
            finding: "Identified increased susceptibility to parasitic infections during chemotherapy, particularly from raw seafood.",
            peerReviewScore: 7.9,
            reproducibilityScore: 7.2,
            overallScore: 7.6
          }
        ],
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
        evidence: [
          {
            title: "Curcumin Interactions with Chemotherapy Agents",
            authors: "Patel et al.",
            journal: "Cancer Treatment Reviews",
            year: 2023,
            finding: "Systematic review found potential interactions between curcumin and certain chemotherapy drugs, requiring careful monitoring.",
            peerReviewScore: 8.2,
            reproducibilityScore: 7.5,
            overallScore: 7.9
          },
          {
            title: "Anti-inflammatory Effects in Cancer Patients",
            authors: "Lee et al.",
            journal: "Journal of Integrative Oncology",
            year: 2022,
            finding: "Small study showed potential benefits for reducing inflammation, but with significant individual variation in response.",
            peerReviewScore: 6.8,
            reproducibilityScore: 6.2,
            overallScore: 6.5
          }
        ],
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
      evidence: [],
      guidelines: [],
      interactions: {
        withTreatments: []
      }
    };  }
}; 
