import React, { useState } from 'react';
import Button from '../../Components/common/Button';

const GroupCard = ({ groupNumber, ageRange, isSelected, onClick }) => {
  const cardStyles = `
    bg-white rounded-2xl shadow-md p-6
    text-center cursor-pointer transition-all duration-300
    hover:shadow-xl hover:-translate-y-1
    flex-1 min-w-[240px]
    ${isSelected ? 'border-2 border-red-400' : 'border-2 border-transparent'}`;

  return (
    <div className={cardStyles} onClick={onClick}>
      <div className="inline-block bg-[#D95B43] text-white text-sm font-bold px-6 py-1 rounded-full mb-4">
        Group {groupNumber}
      </div>
      <p className="text-gray-800 font-semibold text-base mb-2">
        Best for {ageRange} years learners
      </p>
      <p className="text-slate-400 text-sm">
        Tap to continue
      </p>
    </div>
  );
};

const ChooseYear: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>(5);

  const cardData = [
    { groupNumber: 4, ageRange: '0-4' },
    { groupNumber: 5, ageRange: '5-6' },
    { groupNumber: 6, ageRange: '7-8' },
    { groupNumber: 7, ageRange: '8-9' },
    { groupNumber: 8, ageRange: '10-12' },
  ];

  return (
    // মূল কন্টেইনার: একটি হালকা ব্যাকগ্রাউন্ড এবং রেসপন্সিভ প্যাডিং দেওয়া হয়েছে
    <div className="min-h-screen w-full  p-6 sm:p-8 md:p-12">
        
        {/* হেডার: বাটন এবং শিরোনাম উপরের অংশে থাকবে */}
        <header className="w-full mb-12 md:mb-16">
            <Button />
            <p className='text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4'>
                Choose Year
            </p>
        </header>

        {/* কার্ড সেকশন: হেডার এর নিচে কার্ডগুলো সেন্টারে থাকবে */}
        <main className="w-full flex flex-wrap items-stretch justify-center gap-6">
            {cardData.map((card) => (
              <GroupCard
                key={card.groupNumber}
                groupNumber={card.groupNumber}
                ageRange={card.ageRange}
                isSelected={selectedGroup === card.groupNumber}
                onClick={() => setSelectedGroup(card.groupNumber)}
              />
            ))}
        </main>
    </div>
  );
};

export default ChooseYear;