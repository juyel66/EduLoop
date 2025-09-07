import React, { useState, useMemo } from 'react';

// TypeScript type definitions for better code quality
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

// Data for the category cards
const mainCategories: Category[] = [
  { title: 'Nouns', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Verbs', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Adjectives', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Adverbs', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Articles', description: 'Tap to start a new, non-repeating practice set.' },
  { title: 'Plurals', description: 'Tap to start a new, non-repeating practice set.' },
];

/**
 * A reusable card component for selecting a category.
 */
const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, isSelected, onToggle }) => {
  // Conditionally set styles based on selection state
  const borderColor = isSelected ? 'border-orange-500' : 'border-orange-200';
  const shadow = isSelected ? 'shadow-md' : 'shadow-sm';

  return (
    <label
      className={`p-5 rounded-2xl flex items-start gap-x-4 cursor-pointer border-2 bg-orange-50/40 transition-all duration-200 hover:border-orange-400 ${borderColor} ${shadow}`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onToggle}
        className="mt-1 flex-shrink-0 w-5 h-5 rounded border-gray-400 text-orange-600 focus:ring-orange-500"
      />
      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </label>
  );
};

/**
 * The main component that displays the category selection UI.
 */
const CategoryPicker: React.FC = () => {
  // State to keep track of selected categories
  const [selected, setSelected] = useState<Record<string, boolean>>({
    'Nouns': true,
    'Verbs': true,
  });

  // Memoize values for "Select All" functionality to avoid recalculating on every render
  const allCategoryTitles = useMemo(() => mainCategories.map(c => c.title), []);
  const areAllSelected = useMemo(() => allCategoryTitles.every(title => selected[title]), [selected, allCategoryTitles]);

  // Toggles a single category's selected state
  const handleToggle = (title: string) => {
    setSelected(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Selects or deselects all categories at once
  const handleSelectAll = () => {
    const nextState = !areAllSelected;
    const newSelectedState: Record<string, boolean> = {};
    allCategoryTitles.forEach(title => {
      newSelectedState[title] = nextState;
    });
    setSelected(newSelectedState);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 font-sans">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Pick a category</h1>
          <p className="text-gray-500 mt-1">Choose multiple categories as needed</p>
        </div>
        <button className="hidden sm:block bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-orange-600 transition-colors">
          Start Now
        </button>
      </header>

      {/* Main Content: Grid of Category Cards */}
      <main className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              isSelected={!!selected[category.title]}
              onToggle={() => handleToggle(category.title)}
            />
          ))}
        </div>

        {/* "Select All" Section */}
        <div className="border-t border-gray-200 pt-8">
          <CategoryCard
            title="All in this Subject"
            description="Mix all categories for varied practice."
            isSelected={areAllSelected}
            onToggle={handleSelectAll}
          />
        </div>

        {/* Footer Button */}
        <div className="pt-4">
          <button className="w-full bg-slate-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-slate-700 transition-colors">
            Start Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default CategoryPicker;