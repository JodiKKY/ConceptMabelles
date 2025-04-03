import React from "react";

const Filters = ({ onFilter }) => {
  const categories = ["All", "Long Sleeve", "Short Sleeve","Women","Two piece"];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => onFilter(category)} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
