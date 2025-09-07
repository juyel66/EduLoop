import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/common/Button";

// Category type define
interface Category {
  id: string;
  title: string;
  subtitle: string;
  color: string;
}

// Categories array
const categories: Category[] = [
  { id: "arithmetic", title: "Arithmetic", subtitle: "Start practicing arithmetic instantly.", color: "#a855f7" },
  { id: "grammar", title: "Grammar", subtitle: "Start practicing grammar instantly.", color: "#ef4444" },
  { id: "orthography", title: "Orthography", subtitle: "Start practicing orthography instantly.", color: "#3b82f6" },
  { id: "reading", title: "Reading", subtitle: "Start practicing reading instantly.", color: "#22c55e" },
  { id: "vocabulary", title: "Vocabulary", subtitle: "Start practicing vocabulary instantly.", color: "#f97316" },

];

// Props type define for CategoryCard
interface CategoryCardProps {
  id: string;
  title: string;
  subtitle: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, subtitle, color }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Link to={`/subject-category/${id}`}>
      <div className="flex flex-col p-12 rounded-2xl border-2 shadow-md border-[#FFF7ED] hover:shadow-xl hover:-translate-y-1 hover:border-[#E16641] transition-transform cursor-pointer bg-white">
        <div className="flex items-center mb-2">
          {/* Custom checkbox */}
          <div
            onClick={(e) => {
              e.preventDefault(); // prevent link navigation when checking
              setChecked(!checked);
            }}
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
    </Link>
  );
};

const CategoryGrid: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gray-50">
      <div className=" mx-auto px-4 md:px-8 py-10">
        {/* Back Button */}
        <Link to="/login" className="inline-block       rounded-2xl">
          <Button />
        </Link>

        {/* Title */}
        <p className="lg:text-5xl text-2xl font-semibold lg:mt-8 mt-4 lg:mb-8 text-[#0F172A]">
          Choose your subject
        </p>

        {/* Categories grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              title={cat.title}
              subtitle={cat.subtitle}
              color={cat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
