import React, { useState, useEffect } from "react";
import Button from "../../Components/common/Button";

const ChooseYear: React.FC = () => {
  // 🔹 States
  const [selectedGroup, setSelectedGroup] = useState<number>(5);
  const [cardData, setCardData] = useState<
    { groupNumber: number; ageRange: string }[]
  >([]);

  // 🔹 Fake JSON Dummy Data
  const dummyData = [
    { groupNumber: 4, ageRange: "0-4" },
    { groupNumber: 5, ageRange: "5-6" },
    { groupNumber: 6, ageRange: "7-8" },
    { groupNumber: 7, ageRange: "9-10" },
    { groupNumber: 8, ageRange: "11-12" },
  ];

  useEffect(() => {
    setCardData(dummyData);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-start pt-10">
      {/* Header Section */}
      <div className="flex flex-col items-start z-50 px-6 md:px-10">
        <Button />
        <p className="text-gray-900 text-6xl font-semibold mt-2">Choose Year</p>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-6 px-6 md:px-10">
        {cardData.map((card) => {
          const cardStyles = `
            bg-white rounded-2xl shadow-md p-6
            text-center cursor-pointer transition-all duration-300
            hover:shadow-xl hover:-translate-y-1 hover:bg-[#FFF0ED]
            flex-1 min-w-[240px]
            ${
              selectedGroup === card.groupNumber
                ? "border-2 border-red-400"
                : "border-2 border-transparent hover:border-2 hover:border-red-400"
            }
          `;

          return (
            <div
              key={card.groupNumber}
              className={cardStyles}
              onClick={() => setSelectedGroup(card.groupNumber)}
            >
              <div className="inline-block bg-[#D95B43] text-white text-sm font-bold px-6 py-1 rounded-full mb-2">
                Group {card.groupNumber}
              </div>
              <p className="text-gray-800 font-semibold text-base mb-1">
                Best for {card.ageRange} years learners
              </p>
              <p className="text-slate-400 text-sm">Tap to continue</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseYear;
