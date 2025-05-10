import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAe5izXy-K1FFkIMG6D3frQDTg3eYngPKI" });

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-pro", // or "gemini-pro"
    contents: [{ role: "user", parts: [{ text: "Explain photosynthesis" }] }]
  });

  // Get the generated text safely
  const generatedText = response?.candidates?.[0]?.content?.parts?.[0]?.text;

  console.log(generatedText);
}

run();
