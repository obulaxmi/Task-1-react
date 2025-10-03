function Name() {
    const Name = <p><strong>Name:</strong>Obulaxmi Purusothaman<br /> <strong>College:</strong> Sri Shanmugha College of Engineering and Technology<br /><strong>Year:</strong> 3rd Year <br /><strong>Aspiration:</strong> Full Stack Developer <br /><strong>Passion:</strong> Developing end-to-end web solutions with a focus on both front-end and back-end technologies<br /><strong> Goal:</strong> To become a proficient Full Stack Developer by leveraging academic knowledge and hands-on experience<br /><strong> Objective:</strong> To create seamless, scalable, and user-friendly web applications that make a real impact";</p>

    return (
        <div  id="about" className="text-center bg-[#c49898] p-5 rounded-xl max-w-[750px] mx-auto mt-3 shadow-md">
            <div>
                <img
                    className="w-[250px] h-[250px] object-cover rounded-full border-4 border-[#d46c6c] shadow-[0_8px_15px_rgba(0,0,0,0.4)] mx-auto"
                    src="images/obu.jpg"
                    alt="Profile"
                />
            </div>
            <h2 className="text-[rgb(75,90,94)] underline font-bold font-[cursive]  text-2xl my-4">
                About Me:
            </h2>
            <p className="italic text-base font-serif">
                {Name}
            </p>
        </div>
    );
}

export default Name;













  
  
