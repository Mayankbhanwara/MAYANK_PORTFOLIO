import Experience from './Experience';
import RandomDevQuote from './RandomDevQuote';
import CodingProfile from './CodingProfile';

const techStack = [
  { name: "C", icon: "c", color: "A8B9CC" },
  { name: "C++", icon: "cplusplus", color: "00599C" },
  { name: "Java", icon: "java", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "HTML", icon: "html5", color: "E34F26" },
  { name: "CSS", icon: "css3", color: "1572B6" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Node.js", icon: "nodedotjs", color: "339933" },
  { name: "Spring Boot", icon: "spring", color: "6DB33F" },
  { name: "Bootstrap", icon: "bootstrap", color: "7952B3" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
  { name: "SQL", icon: "mysql", color: "4479A1" },
  { name: "VS Code", icon: "visualstudiocode", color: "0078D4" },
  { name: "Eclipse", icon: "eclipseide", color: "2C2255" },
  { name: "Android Studio", icon: "androidstudio", color: "3DDC84" },
];

export default function Header() {
  return (
    <div className="animate-slide-in space-y-8">
      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500">
          <p>
            I am a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full Stack Developer</span> currently pursuing B.Tech in Information Technology, with a strong foundation in building <span className="font-semibold text-gray-900 dark:text-white">scalable and efficient solutions</span>. I am enthusiastic about creating user-friendly applications and solving real-world problems through technology.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <Experience />

      {/* Tech Stack */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white relative transition-colors duration-500">
            Tech Stack
            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 cursor-pointer">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] rounded-2xl sm:rounded-[1.25rem] transition-colors duration-500"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50/80 dark:bg-gray-900/50 rounded-xl transition-colors duration-500">
                <img 
                  src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                  alt={tech.name} 
                  className={`w-5 h-5 sm:w-6 sm:h-6 object-contain ${tech.icon === 'github' ? 'dark:invert' : ''}`}
                />
              </div>
              <span className="text-[10px] sm:text-[13px] font-semibold text-gray-600 dark:text-gray-300 text-center break-words group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Coding Profile */}
      <CodingProfile />

      {/* Random dev quote */}
      <RandomDevQuote />
    </div>
  );
}
