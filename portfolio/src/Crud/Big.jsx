
import axios from "axios";
import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

function Table() {
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editData, setEditData] = useState({ name: '', age: '' }); 

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const formattedData = response?.data?.map((user, index) => ({
        id: user.id ?? index,
        name: user?.name ?? 'Unknown',
        age: Math.floor(Math.random() * 30) + 20,
      }));
      setDataList(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
   
    fetchData(); 
  }, []);

  const handleSubmitData = (newEntry) => {
    if (editIndex !== null) {
      const updatedList = dataList.map((item, index) =>
        index === editIndex ? { ...item, ...newEntry } : item
      );
      setDataList(updatedList);
      setEditIndex(null);
      setEditData({ name: '', age: '' });
    } else {
      const newId = Date.now();
      setDataList([...dataList, { ...newEntry, id: newId }]);
    }
  };
  

  const deleteEntry = (indexToDelete) => {
    const updatedList = dataList.filter((_, index) => index !== indexToDelete);
    setDataList(updatedList);
    if (indexToDelete === editIndex) {
      setEditIndex(null);
      setEditData({ name: '', age: '' });
    }
  };

  const editEntry = (index) => {
    const entryToEdit = dataList[index];
    setEditIndex(index);
    setEditData({ name: entryToEdit.name, age: entryToEdit.age });
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <FormComponent
        onSubmitData={handleSubmitData}
        editData={editData}
      />
      <TableComponent
        dataList={dataList}
        onDelete={deleteEntry}
        onEdit={editEntry}
      />
    </div>
  );
}

export default Table;







