const About = () => {
    return (
      <section id="about" className="py-20 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                I am a recent graduate from Debre Birhan University with a Bachelor's degree in Software Engineering, 
                achieving a remarkable CGPA of 3.68. My passion lies in creating efficient, scalable software solutions 
                that solve real-world problems.
              </p>
              <p className="text-lg">
                During my internship at CNET Technologies in Addis Ababa, I gained valuable hands-on experience working 
                on real projects under senior mentorship. This experience has equipped me with practical knowledge in 
                modern software development practices.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-blue-500/10 px-4 py-2 rounded-full">
                  <span className="text-blue-500">Education:</span> BSc in Software Engineering
                </div>
                <div className="bg-blue-500/10 px-4 py-2 rounded-full">
                  <span className="text-blue-500">Location:</span> Addis Ababa, Ethiopia
                </div>
                <div className="bg-blue-500/10 px-4 py-2 rounded-full">
                  <span className="text-blue-500">Languages:</span> English, Amharic
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform hover:scale-105 transition duration-300">
                {/* You can add your image here */}
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Experience Highlights</h3>
                    <ul className="space-y-2">
                      <li>✨ Software Development</li>
                      <li>✨ Mobile App Development</li>
                      <li>✨ Web Development</li>
                      <li>✨ Database Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About