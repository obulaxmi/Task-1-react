import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div id="projects" className="bg-[#d37474] py-10 px-5 max-w-[750px] ml-75 rounded-lg flex justify-center ">
            <div className="max-w-[750px] ">
                <h2 className="text-[rgb(75,90,94)] font-bold underline font-[cursive] text-3xl text-center mb-8">
                    Projects:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-none gap-6">
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all text-left">
                        <h3 className="text-xl font-bold text-[#2d3436] mb-2">📝 TO-DO</h3>
                        <p className="text-[15px] text-[#444] mb-4">
                            A simple TO-DO app using React that performs basic CRUD operations like Add, Edit, Delete and Update.
                        </p>
                        <Link
                            to="/To-do"
                            className="text-white bg-[#ec6f6f] px-4 py-2 rounded-md text-sm hover:bg-[#019875] transition">
                            View TO-DO App
                        </Link>
                    </div>
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all text-left">
                        <h3 className="text-xl font-bold text-[#2d3436] mb-2">📊 CRUD Table</h3>
                        <p className="text-[15px] text-[#444] mb-4">
                            A dynamic CRUD table that uses fetch API to display and manage data with editing and deleting capabilities.
                        </p>
                        <Link
                            to="/crud"
                            className="text-white bg-[#e76666] px-4 py-2 rounded-md text-sm hover:bg-[#019875] transition">
                            View CRUD Table
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

  




