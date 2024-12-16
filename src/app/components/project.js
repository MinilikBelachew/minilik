// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Homeland Logistics Admin",
      description:
        "The Homeland Logistics Admin Dashboard is a centralized platform for overseeing cargo operations. It provides admins with tools to manage users, drivers, vehicle owners, and shipments, ensuring smooth and efficient logistics management across the system.",
      tech: ["Next js"],

      link: "https://homelandad.netlify.app/auth/signin",
    },
    {
      title: "Simple Recipes Site",
      description:
        "streamlined recipe site designed to make cooking easy. It provides clear, step-by-step instructions and concise ingredient lists, helping users create delicious meals with minimal effort",
      tech: ["Next js", "Firebase"],
      link: "https://simple-recipesite.netlify.app/",
    },
    {
      title: "HomelandLogistics",
      description:
        "A mobile application for logistics management developed using Flutter, featuring order tracking, delivery scheduling, and real-time updates.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/MinilikBelachew/Homeland_driver",
    },
    {
      title: "E-commerce",
      description: "E-commerce website",
      tech: ["Next js"],
      link: "https://ethio-ecommerce.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-cyan-500 hover:text-cyan-400 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
