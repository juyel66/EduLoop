import React, { useState, useMemo } from 'react';

// Type definitions
type Category = {
  title: string;
  description: string;
};

type CategoryCardProps = {
  title: string;
  description: string;
  isSelected: boolean;
  onToggle: () => void;
};

// Sample categories
const mainCategories: Category[] = [
  { title: 'Nouns', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Verbs', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Adjectives', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Adverbs', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Articles', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Plurals', description: 'Tap to start a new, non-repeating practice set.' },
];

// Reusable Category Card
const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, isSelected, onToggle }) => {
  const borderColor = isSelected ? 'border-orange-500' : 'border-gray-200';
  const shadow = isSelected ? 'shadow-md' : 'shadow-sm';
  const bgColor = isSelected ? 'bg-orange-50' : 'bg-white';

  return (
    <label
      className={`flex flex-col p-5 rounded-2xl gap-3 cursor-pointer border-2 transition-all duration-200 hover:bg-orange-50 hover:border-orange-300 ${borderColor} ${shadow} ${bgColor}`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          className="w-5 h-5 rounded border-gray-400 text-orange-600 focus:ring-orange-500"
        />
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm">{description}</p>
    </label>
  );
};

// Main CategoryPicker Component
const CategoryPicker: React.FC = () => {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    'Nouns': true,
    'Verbs': true,
  });

  const allCategoryTitles = useMemo(() => mainCategories.map(c => c.title), []);
  const areAllSelected = useMemo(
    () => allCategoryTitles.every(title => selected[title]),
    [selected, allCategoryTitles]
  );

  const handleToggle = (title: string) => {
    setSelected(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleSelectAll = () => {
    const nextState = !areAllSelected;
    const newSelectedState: Record<string, boolean> = {};
    allCategoryTitles.forEach(title => {
      newSelectedState[title] = nextState;
    });
    setSelected(newSelectedState);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col p-4 md:p-8 lg:p-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Pick a category</h1>
          <p className="text-gray-500 mt-1 md:text-lg">Choose multiple categories as needed</p>
        </div>
        <button className="mt-4 md:mt-0 bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition-colors">
          Start Now
        </button>
      </header>

      {/* Categories Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCategories.map(category => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              isSelected={!!selected[category.title]}
              onToggle={() => handleToggle(category.title)}
            />
          ))}
        </div>

        {/* Select All */}
        <div className="mt-8">
          <CategoryCard
            title="All in this Subject"
            description="Mix all categories for varied practice."
            isSelected={areAllSelected}
            onToggle={handleSelectAll}
          />
        </div>

        {/* Footer Start Button */}
        <div className="mt-6">
          <button className="w-full bg-slate-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-slate-700 transition-colors">
            Start Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default CategoryPicker;
