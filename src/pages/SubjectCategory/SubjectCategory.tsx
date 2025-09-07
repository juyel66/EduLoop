
import { useParams } from "react-router-dom";

// Same categories array as in CategoryGrid
const categories = [
  { id: "arithmetic", title: "Arithmetic", subtitle: "Start practicing arithmetic instantly.", color: "#a855f7" },
  { id: "grammar", title: "Grammar", subtitle: "Start practicing grammar instantly.", color: "#ef4444" },
  { id: "orthography", title: "Orthography", subtitle: "Start practicing orthography instantly.", color: "#3b82f6" },
  { id: "reading", title: "Reading", subtitle: "Start practicing reading instantly.", color: "#22c55e" },
  { id: "vocabulary", title: "Vocabulary", subtitle: "Start practicing vocabulary instantly.", color: "#f97316" },
];

const SubjectCategory = () => {
    const { id } = useParams<{ id: string }>();
    
    // Find the matching category
    const category = categories.find(cat => cat.id === id);

    if (!category) {
        return <div className="p-4 text-red-500">Category not found!</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-2" style={{ color: category.color }}>{category.title}</h1>
            <p className="text-gray-600 mb-4">{category.subtitle}</p>
            <p>This is the detailed page for the <strong>{category.title}</strong> category.</p>
        </div>
    );
};

export default SubjectCategory;
