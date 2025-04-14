import React from "react";

const Filters = ({ onFilter }) => {
  const categories = ["All", "Long Sleeve", "Short Sleeve", "Women"];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => onFilter(category)} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
