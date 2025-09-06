import React, { useState, useEffect } from "react";
import Button from "../../Components/common/Button";
import { Link } from "react-router";

interface Group {
  id: number;
  ageRange: string;
  name?: string;
}

const ChooseYear: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [cardData, setCardData] = useState<Group[]>([]);

  const dummyData: Group[] = [
    { id: 4, ageRange: "0-4" },
    { id: 5, ageRange: "5-6" },
    { id: 6, ageRange: "7-8" },
    { id: 7, ageRange: "9-10" },
    { id: 8, ageRange: "11-12" },
  ];

  useEffect(() => {
    setCardData(dummyData);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-start pt-10 px-4 md:px-10">
      {/* Header Section */}
      <div className="flex flex-col items-start z-50">
        <Button />
        <p className="text-3xl lg:text-6xl font-semibold mt-4 lg:mt-8 mb-4 lg:mb-8 text-white">
          Choose Year
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardData.map((card) => (
          <Link
            to={`/subject/${card.id}`}
            key={card.id}
            onClick={() => setSelectedGroup(card.id)}
            className={`
              flex flex-col bg-white p-6 rounded-2xl shadow-md cursor-pointer transition-all duration-300
              hover:shadow-xl hover:-translate-y-1 hover:bg-[#FFF0ED]
              ${
                selectedGroup === card.id
                  ? "border-2 border-red-400"
                  : "border-2 border-transparent"
              }
            `}
          >
            <div className="inline-block bg-[#D95B43] w-26 text-white text-sm font-bold px-4 py-1 rounded-full mb-2">
              Group {card.id}
            </div>
            <p className="text-gray-800 font-semibold text-base mb-1">
              Best for {card.ageRange} years learners
            </p>
            <p className="text-slate-400 text-sm">Tap to continue</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseYear;
