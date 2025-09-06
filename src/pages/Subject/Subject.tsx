import React, { useState } from "react";
import Button from "../../Components/common/Button";

const categories = [
  { id: 1, title: "Arithmetic", subtitle: "Start practicing arithmetic instantly.", color: "#a855f7" },
  { id: 2, title: "Grammar", subtitle: "Start practicing grammar instantly.", color: "#ef4444" },
  { id: 3, title: "Orthography", subtitle: "Start practicing orthography instantly.", color: "#3b82f6" },
  { id: 4, title: "Reading", subtitle: "Start practicing reading instantly.", color: "#22c55e" },
  { id: 5, title: "Vocabulary", subtitle: "Start practicing vocabulary instantly.", color: "#f97316" },
];

const CategoryCard = ({ title, subtitle, color }) => {
  const [checked, setChecked] = useState(false);

  return (
 

   
    
         <div className="flex flex-col p-12 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform cursor-pointer bg-white">
       
      <div className="flex items-center mb-2">
        {/* Custom checkbox */}
        <div
          onClick={() => setChecked(!checked)}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors`}
          style={{
            borderColor: color,
            backgroundColor: checked ? color : "#fff",
          }}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <h3 className="font-semibold text-lg ml-3 text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>

  );
};

const CategoryGrid = () => {
  return (
<div className="px-4">
       <div className="flex flex-col items-start z-50  md:px-10">
        <Button />
        <p className=" lg:text-6xl text-2xl  font-semibold lg:mt-8 mt-4 lg:mb-8 text-white ">Choose your subject</p>
      </div>


        <div className=" grid lg:grid-cols-4 gap-5 mt-5 md:grid-cols-2 grid-cols-1">
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          title={cat.title}
          subtitle={cat.subtitle}
          color={cat.color}
        />
      ))}
    </div>

</div>
  );
};

export default CategoryGrid;
