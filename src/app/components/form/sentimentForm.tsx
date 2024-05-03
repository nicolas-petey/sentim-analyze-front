"use client";

import React, { useState } from "react";
import ImageAleatoire from "../Image/ImageAleatoire";

const SentimentForm: React.FC = () => {
  const [textPrompt, settextPrompt] = useState("");
  const [result, setResult] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const url = process.env.URL_API;

  const analyzeText = async () => {
    try {
      console.log(`URL_API ${process.env.URL_API}`);
      const response = await fetch(`${process.env.URL_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: textPrompt,
        }),
      });

      const data = await response.json();
      setResult(data.sentiment);
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("There was an error analyzing the text:", error);
      setResult("Error analyzing text");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={analyzeText} className="space-y-4">
        <textarea
          className="w-full h-32 border-2 border-gray-200 p-4 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          value={textPrompt}
          onChange={(e) => settextPrompt(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Analyze Sentiment"
          onClick={analyzeText}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        ></input>
        {result && <ImageAleatoire key={refreshKey} type={result} />}
        {result && <p className="text-lg text-blue-500">Sentiment: {result}</p>}
      </form>
    </div>
  );
};

export default SentimentForm;
