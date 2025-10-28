import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-2xl font-bold mb-2"> Thyroid Disease Prediction Using Ensemble Modelling</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Developed machine learning models to predict diabetes and thyroid disorders using algorithms like Random Forest,
                SVM, XGBoost, KNN, and Linear Regression. Applied ensemble techniques (bagging, boosting) to improve overall model performance and robustness.
Worked on data preprocessing, feature selection, and model evaluation using metrics like accuracy, precision, recall,
and F1-score. Achieved prediction accuracies of approximately 88% for diabetes and 85% for thyroid datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Random Forest", "SVM", "XG Boost", "Bagging", "Boosting"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-base hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/anushasinghx/Thyroid-Classification---Ensemble-Modelling.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                >
                  View GitHub Repository →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-2xl font-bold mb-2">Mission Aid - Charity Project</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Built a responsive charity platform using React with TailwindCSS. Implemented routing for donors and admins, dynamic forms and tables to manage donations and missionary data, and integrated Axios for API communication. Used Context API and hooks for efficient state management, with real-time validation and popups modals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "TailwindCSS", "Axios", "React Router", "Context API", "JavaScript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-base
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://missionaid.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                >
                  View MissionAid Website →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-2xl font-bold mb-2">Waste Classification Using Deep Learning</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Built a binary image classification system using TensorFlow/Keras with ResNet50 transfer learning for waste segregation. Implemented data augmentation (rotation, flipping, zoom) and trained with early stopping callbacks to prevent overfitting and save optimal weights during training. Achieved accurate classification of waste into Organic vs Recyclable categories through convolutional neural networks and computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TensorFlow", "Keras", "ResNet50", "Transfer Learning", "Image Augmentation", "Python", "Deep Learning"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-base
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/anushasinghx/Waste-Classification.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                >
                  View GitHub Repository →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-2xl font-bold mb-2">IOT Based Soil Nutrient Monitoring and Fertiliser Dispensing System</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Built an API-driven IoT system that monitors soil nutrients and automates fertilizer delivery.
                The system uses NPK sensors to collect real-time data on nutrient levels, sends it to a converter, then a
microcontroller (Node MCU) that is responsible for displaying the contents on the LCD screen. Another
microcontroller is integrated to regulate the pumps for dispensing fertilizer. It helps save water, reduce fertilizer waste, and improve yields while being environmentally friendly. The system can
be controlled remotely.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                 {["C++","ESP8266 NodeMCU" , "Arduino IDE", "NPK Sensors", "RS485 Protocol"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-base
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )} 
              </div> 
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                >
                  View Project →
                </a>
              </div>  */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};