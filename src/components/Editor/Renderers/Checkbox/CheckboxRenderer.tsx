import React from 'react';

export const Checkbox = ({ data }) => {
  return (
    <div className="mt-6">
      {data.items.map((item) => (
        <div key={item.text + item.checked} className="flex items-center mb-4">
          <input
            checked={item.checked}
            readOnly
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded dark:bg-gray-700"
          />

          <label className="ml-4 text-lg font-light text-gray-900 dark:text-gray-300">
            {item.text}
          </label>
        </div>
      ))}
    </div>
  );
};
