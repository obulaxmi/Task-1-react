
import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Parent from './Port/Parent'
import Task from './To-do/Task'
import Table from './Crud/Big'

function MainParent() {
  return (

    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <BrowserRouter>

          <header className="bg-[#5c3b3b] text-white shadow-md">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold font-serif">My Portfolio</h1>
              <nav>
                <ul className="flex gap-6 font-medium">
                  <Link to="/" className="hover:text-[rgb(236,182,182)] transition">Home</Link>
                  <a href="/#About" className="hover:text-[rgb(236,182,182)] transition">About</a>
                  <a href="/#skills" className="hover:text-[rgb(236,182,182)] transition">Skills</a>
                  <a href="/#certificates" className="hover:text-[rgb(236,182,182)] transition">Certificates</a>
                  <a href="/#projects" className="hover:text-[rgb(236,182,182)] transition">Projects</a>
                </ul>
              </nav>
            </div>
          </header>

          <Routes>
            <Route path={'/'} element={<Parent />} />
            <Route path={'/To-do'} element={<Task />} />
            <Route path={'/crud'} element={<Table />} />
          </Routes>

          <footer className="bg-[#5c3b3b] text-white text-center px-6 py-8">
            <p className="text-sm mb-3">&copy; Obulaxmi | All Rights Reserved</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[15px]">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:8608653412" className="hover:text-[#f0a1a1] transition">
                  8608653412
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:obulaxmi2701@gmail.com" className="hover:text-[#f0a1a1] transition">
                  obulaxmi2701@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" alt="GitHub" />
                <a
                  href="https://github.com/obulaxmi"
                  target="_blank"
                  className="hover:text-[#f0a1a1] transition">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5" alt="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/obulaxmi-purusothaman-3617a02a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                  className="hover:text-[#f0a1a1] transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>

        </BrowserRouter>

      </div>
    </div>
  )
}

export default MainParent




















