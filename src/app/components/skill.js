export default function Skills() {
  const skills = [
    {
      name: 'Frontend Development',
      technologies: [
        'React',
        'Next.js', 
        'JavaScript', 
        'HTML/CSS'
      ],
      icon: '💻',
      color: 'text-blue-400'
    },
    {
      name: 'Mobile Development',
      technologies: [
        'Flutter'
      ],
      icon: '📱',
      color: 'text-purple-400'
    },
    // {
    //   name: 'Backend Development',
    //   technologies: [
    //     'ASP.NET'
    //   ],
    //   icon: '⚙️',
    //   color: 'text-green-400'
    // },
    {
      name: 'Tools & Others',
      technologies: [
        'Git',
        // 'Docker', 
        // 'AWS'
      ],
      icon: '🛠️',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a1128] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`relative bg-[#0f172a] p-6 rounded-2xl border border-transparent hover:border-opacity-20 transition-all duration-500 border-gray-800`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl transform transition-transform group-hover:rotate-6">{category.icon}</span>
                  <h3 className={`text-2xl font-bold ${category.color}`}>
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.technologies.map((tech, i) => (
                    <div 
                      key={i} 
                      className="text-gray-300 bg-[#1e293b]/50 px-3 py-2 rounded-lg transform transition-all duration-300 hover:translate-x-2 hover:bg-[#1e293b]/70"
                    >
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(0deg,#fff,transparent)]"></div>
      </div>
    </section>
  );
}
// export default function Skills() {
//     const skills = [
//       {
//         name: 'Frontend Development',
//         technologies: [
//           { name: 'React', level: 60 },
//           { name: 'Next.js', level: 65 },
//           { name: 'JavaScript', level: 60 },
//           { name: 'HTML/CSS', level: 75 },
//         ],
//         icon: '💻'
//       },
//       {
//         name: 'Mobile Development',
//         technologies: [
//           { name: 'Flutter', level: 65 },
          
//         ],
//         icon: '📱'
//       },
//       {
//         name: 'Backend Development',
//         technologies: [
//           { name: 'ASP.NET', level: 40 },
//           // { name: 'Node.js', level: 75 },
//           // { name: 'SQL Server', level: 75 },
//         ],
//         icon: '⚙️'
//       },
//       {
//         name: 'Tools & Others',
//         technologies: [
//           { name: 'Git', level: 45 },
//           // { name: 'Docker', level: 70 },
//           // { name: 'AWS', level: 65 },
//         ],
//         icon: '🛠️'
//       }
//     ];
  
//     return (
//       <section id="skills" className="py-20 bg-[#1e293b]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
//           <h2 className="text-4xl font-bold text-center mb-16">
//           <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//           Technical Skills
//           </span>
//         </h2>
  
//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {skills.map((category, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-[#0f172a] p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-4 mb-6">
//                     <span className="text-3xl">{category.icon}</span>
//                     <h3 className="text-xl font-semibold text-cyan-500">{category.name}</h3>
//                   </div>
  
//                   <div className="space-y-4">
//                     {category.technologies.map((tech, i) => (
//                       <div key={i} className="space-y-2">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-300">{tech.name}</span>
//                           <span className="text-cyan-500">{tech.level}%</span>
//                         </div>
//                         <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
//                           <div
//                             className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300 group-hover:scale-110"
//                             style={{ width: `${tech.level}%`, opacity: 0.8 }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }