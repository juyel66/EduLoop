// import React, { useState } from 'react';
// import Button from '../../Components/common/Button';

// const GroupCard = ({ groupNumber, ageRange, isSelected, onClick }) => {
  
//   const cardStyles = `
//     bg-white rounded-2xl shadow-md p-6
//     text-center cursor-pointer transition-all duration-300
//     hover:shadow-xl hover:-translate-y-1
//     flex-1 min-w-[240px]
//     ${isSelected ? 'border-2 border-red-400' : 'border-2 border-transparent'}`;

//   return (
//     <div className={cardStyles} onClick={onClick}>
//       <div className="inline-block bg-[#D95B43] text-white text-sm font-bold px-6 py-1 rounded-full mb-4">
//         Group {groupNumber}
//       </div>
//       <p className="text-gray-800 font-semibold text-base mb-2">
//         Best for {ageRange} years learners
//       </p>
//       <p className="text-slate-400 text-sm">
//         Tap to continue
//       </p>
//     </div>
//   );
// };

// const ChooseYear: React.FC = () => {
//   const [selectedGroup, setSelectedGroup] = useState<number>(5);

//   const cardData = [
//     { groupNumber: 4, ageRange: '0-4' },
//     { groupNumber: 5, ageRange: '5-6' },
//     { groupNumber: 6, ageRange: '7-8' },
//     { groupNumber: 7, ageRange: '8-9' },
//     { groupNumber: 8, ageRange: '10-12' },
//   ];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center">
//       <div className="absolute top-8 left-6 md:left-10 z-50 flex flex-col">
//         <Button />
//         <p className='text-gray-900 text-6xl font-semibold mt-4'>
//           Choose Year
//         </p>
//       </div>

      
//       <div className="w-full flex flex-wrap items-center justify-center gap-6 px-10">
//         {cardData.map((card) => (
//           <GroupCard
//             key={card.groupNumber}
//             groupNumber={card.groupNumber}
//             ageRange={card.ageRange}
//             isSelected={selectedGroup === card.groupNumber}
//             onClick={() => setSelectedGroup(card.groupNumber)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChooseYear;

import React from 'react';

const ChooseYear = () => {
    return (
        <div>
            hello
            
        </div>
    );
};

export default ChooseYear;