import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "", 
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent! Thank you");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Let's Talk!
                    </h2>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-lg"
                                placeholder="Your name..."
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-lg [-webkit-box-shadow:_0_0_0px_1000px_rgb(255_255_255_/_0.05)_inset]"
                                placeholder="Your email id..."
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-lg"
                                placeholder="Your message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-4 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-lg mt-0"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Improved Contact Info Section */}
                    <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg">
                        <h4 className="text-lg font-semibold text-pink-300 mb-4 text-center">
                            Direct Contact
                        </h4>
                        <div className="space-y-3 text-center">
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                                <span className="text-gray-300 font-medium">Email:</span>
                                <a 
                                    href="mailto:anushasinghx@gmail.com" 
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    anushasinghx@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                                <span className="text-gray-300 font-medium">Phone:</span>
                                <a 
                                    href="tel:+919873353456" 
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    +91 9873353456
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};