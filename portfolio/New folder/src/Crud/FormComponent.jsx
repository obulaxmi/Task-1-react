import React, { useState, useEffect } from 'react';

function FormComponent({ onSubmitData, editData }) {
  const [inputValue, setInputValue] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    setInputValue(editData.name || '');
    setAge(editData?.age || '');
  }, [editData]);

  const handleNameChange = (e) => {
         const value = e.target.value;
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
        setInputValue(filteredValue);
       };
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue?.trim() === '' || age.trim() === '') {
      alert('Please fill in Name and Age.');
      return;
    }

    const newEntry = {
      name: inputValue?.trim(),
      age: age?.trim()
    };

    onSubmitData(newEntry);

    setInputValue('');
    setAge('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 shadow-md rounded-lg p-4 w-full md:w-96 mx-auto">
      <h2 className="font-bold text-lg text-gray-800 mb-4 text-center">CRUD Form</h2>
      <div className="space-y-2">
        <div>
          <label className="block mb-1 font-medium text-sm">Full Name</label>
          <input
            type="text"
            maxLength="25"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-black focus:ring-2 focus:ring-blue-400 text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Age</label>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-black focus:ring-2 focus:ring-blue-400 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 transition text-sm">
          {editData?.name ? 'Update Entry' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default FormComponent;









