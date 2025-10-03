import { useState } from 'react';
import { Link } from 'react-router-dom'


function Task() {
    const [inputValue, setInputValue] = useState("");
    const [nameList, setNameList] = useState([]);
    const [editValue, setEditValue] = useState(-1);

    const handleInput = (e) => {
        setInputValue(e?.target?.value);
    };

    const handleClick = () => {
        if (inputValue.trim() !== "") {
            const updatedList = [...nameList, inputValue];
            setNameList(updatedList);
            setInputValue("");
        }
    };

    const handleDelete = (indexToDelete, valueToDelete) => {
        const filteredList = nameList.filter((item, index) => {
            return !(index === indexToDelete && item === valueToDelete);
        });
        setNameList(filteredList);
    };

    const handleEdit = (index, name) => {
        setEditValue(index);
        setInputValue(name);
    };

    const handleupdate = () => {
        setNameList(() => {
            const updatedList = [...nameList];
            updatedList[editValue] = inputValue;
            return updatedList;
        });
        setInputValue("");
        setEditValue(-1);
    };
    return (
        
        <div className="min-h-screen bg-gradient-to-r  from-[#262928]  to-[#331e1e] flex justify-center pb-10 pt-16 ">
            <div className="bg-[#e4b9ae] p-5 rounded-lg w-[90%] max-w-[500px] text-center ">
                <h1 className="text-[32px] text-[#2d3436] mb-8 font-bold -mt-2">TO-DO List</h1>

                <div className="flex justify-center gap-3 mb-6">
                    <input
                        type="text"
                        className="p-3 flex-1 text-[16px] bg-white border-2 border-[#00cec9] rounded-xl focus:outline-blue-300 focus:outline-2 focus:border-[#00b894] focus:shadow-[0_0_5px_rgba(0,184,148,0.5)] transition-all"
                        placeholder="Add your task"
                        onChange={handleInput}
                        value={inputValue}/>
                    <button
                        onClick={editValue > -1 ? handleupdate : handleClick}
                        className="bg-[#00b894] text-white px-6 py-3 rounded-xl text-[16px] hover:bg-[#019875] transition">
                        {editValue > -1 ? "Update" : "Add"}
                    </button>

                    {editValue > -1 && (
                        <button
                            onClick={() => {
                                setInputValue("");
                                setEditValue(-1);
                            }}
                            className="bg-[#4a5554] text-white px-4 py-3 rounded-xl text-[16px] hover:bg-[#9e7175] transition">
                            Cancel
                        </button>
                    )}
                </div>

                <ul className="mt-5 space-y-3">
                    {nameList.map((name, index) => (
                        <li
                            key={index}
                            className="bg-[#96878f] px-5 py-3 rounded-lg flex justify-between items-center text-[16px] shadow-sm hover:shadow-md transition-transform hover:-translate-y-[2px]">
                            <span>{name}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(index, name)}
                                    className="bg-[#00b894] text-white px-3 py-1 rounded-md text-[14px] hover:bg-[#019875] transition">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index, name)}
                                    className="delete-btn bg-[#4a5554] text-white px-3 py-1 rounded-md text-[14px] hover:bg-[#9e7175] transition">
                                    X
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        
    );
}

export default Task;
