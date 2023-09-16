"use client";

import "./visualizer.css";
import { generateRandomIntegerBetweenIntervals } from "@/app/utils/numbers";
import React, { useEffect, useState } from "react";

const Visualizer = () => {
  // main random array to sort
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = (): void => {
    const arr: number[] = [];
    for (let i = 0; i < 300; i++) {
      const randomNumber = generateRandomIntegerBetweenIntervals(5, 700);
      arr.push(randomNumber);
    }
    setArray(arr);
  };

  return (
    <div className="array-container">
      {array.map((number, idx) => (
        <div key={idx} className="array-bar" style={{ height: `${number}px` }}>
          {/* {number} */}
        </div>
      ))}
    </div>
  );
};

export default Visualizer;
