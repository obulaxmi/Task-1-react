import React from 'react';

function TableComponent({ dataList, onDelete, onEdit }) {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <table className="bg-white border border-collapse border-gray-300 shadow-md w-full rounded-md overflow-hidden">
        <thead className="bg-blue-500 text-white text-sm">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Full Name</th>
            <th className="px-4 py-2 border border-gray-300">Age</th>
            <th className="px-4 py-2 border border-gray-300">Edit</th>
            <th className="px-4 py-2 border border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((entry, index) => (
            <tr key={entry.id || index} className="text-sm text-center">
              <td className="px-4 py-2 border border-gray-300">{entry.name}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.age}</td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-blue-300 text-black px-3 py-1 rounded-md hover:bg-blue-200 transition"
                >
                  Edit
                </button>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  onClick={() => onDelete(index)}
                  className="bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-200 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
