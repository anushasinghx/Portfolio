import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS/TailwindCSS",
    "JavaScript",
    "Python",
    "MySQL",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Git/GitHub"
  ];

  const backendSkills = ["Communication", "Teamwork", "Problem Solving", "Leadership", "Time Management"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-2xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              BTech graduate in Electronics and Telecommunication Engineering from SIT Pune (Class of 2025), with a minor in
              Artificial Intelligence and Machine Learning. Recently completed an internship at Newnop Technologies as a Software Development Intern, 
              where I contributed to a live project using React.js while also gaining experience in backend development with Node.js and Express.js. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tech Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education, Work Experience and Courses - Stacked vertically */}
          <div className="mt-8 space-y-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <h4 className="text-xl font-semibold">
                    Symbiosis Institute of Technology (2021-2025)</h4> 
                  Electronics & Telecommunication Engineering - Specialisation in AI & ML
                  
                </li>
                
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
               <div>
  <h4 className="text-xl font-semibold italic">
    Internship - Newnop Technologies (Jan'25-July'25)
  </h4>
  
  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-1">
    <li>Worked as a Software Development Intern on a Korean-based Charity Project that enables global donations for missionaries.</li>
    <li>Developed responsive web and mobile screens using React.js, including the landing page, admin/user login and signup pages, donation forms, payment gateway UI, confirmation popups and much more. </li>
    <li>Integrated frontend components with backend REST APIs and assisted in deploying the application on AWS.
Collaborated with the development team using GitHub for version control and project management. </li>
    
    
  </ul>
<br/>
  <h4 className="text-xl font-semibold italic">
    Internship - CodeTech IT Solutions (Jun'24-July'24)
  </h4>
    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-1">
    <li> Developed a machine learning model to predict customer churn using Python. </li>
    <li>Implemented logistic regression, decision trees, and random forest to identify high-risk customers based on
behavioral and demographic data. </li>
<li> Performed data cleaning, feature selection, and model evaluation using accuracy, precision, recall, and F1-score.</li>
    
    
  </ul>
</div>

              </div>
            </div>

            {/* Courses Section moved below Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4"> 📚 Courses </h3>
              <div className="text-gray-300 space-y-3">
                <div>
                  <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                    <li>Udemy - Python Data Structures and Algorithms</li>
                    <li>Udemy - Complete Python Bootcamp</li>
                    <li>30 Days Coding - MERN Full-Stack Web Development Course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};