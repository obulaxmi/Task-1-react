
import Name from './Name'
import Skills from './Skills'
import Certificates from './Certificates'
import Projects from './Project'


function Parent() {
  return (
    <div className="bg-[rgb(36,21,21)]  min-h-screen pb-10">
      <h1 className="text-center text-3xl p-6 font-bold text-[rgb(236,182,182)] font-serif">
        Obulaxmi Purusothaman
      </h1>
      <div>
        <Name />
        <Skills />
        <Certificates />
        <Projects />
        
      </div>
    </div>
  )
}

export default Parent