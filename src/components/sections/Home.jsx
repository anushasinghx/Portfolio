import { RevealOnScroll } from "../RevealOnScroll";
import portfolio from "../../assets/portfolioDP.jpg";

export const Home = () => {
  const handleResumeClick = () => {
    const resumePdf = "UpdatedRes.pdf"; 
    window.open(resumePdf, "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/anushasingh-dev", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center">
          {/* Text content - takes 3/4 of the page */}
          <div className="w-3/5 pr-8">
            <div className="text-left z-10">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent leading-tight">
                Hi, I'm Anusha Singh
              </h1>

              <p className="text-gray-400 text-xl mb-8 max-w-2xl">
                I'm a software developer passionate about building responsive, user-focused web applications. 
                Having worked on a live full-stack project during my internship, and a strong foundation in AI and machine learning, 
                I love creating solutions that are both intelligent and beautifully crafted.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleResumeClick}
                  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-lg"
                >
                  Detailed Resume
                </button>
                
                <button
                  onClick={handleLinkedInClick}
                  className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-lg"
                >
                  LinkedIn
                </button>

                <a
                  href="#contact"
                  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Profile picture - takes 1/4 of the page */}
          <div className="w-2/5 flex justify-center z-30">
            <div className="w-100 h-100 rounded-full border-4 border-white/30 shadow-2xl relative z-40 overflow-hidden">
              <img 
                src={portfolio} 
                alt="Anusha Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};