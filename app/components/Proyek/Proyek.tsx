"use client";

const projectList = [
  {
    id: 1,
    gambar: "/assets/Project/PhoneBook.png",
    name: "Phone Book App",
    desc: "A simple Android application built with Kotlin that allows users to manage their contacts easily.",
    tools: ["Kotlin", "Android", "Firebase"],
    url: "https://github.com/Zougee/PhoneBook",
  },
  {
    id: 2,
    gambar: "/assets/Project/BakeryStore.png",
    name: "Bakery Store App",
    desc: "BreadStore is a Java desktop app built with JFrame for bakery management. It features CRUD operations for products, customers, employees, and orders, integrated with a MySQL database.",
    tools: ["Java", "JFrame", "MySQL"],
    url: "https://github.com/Zougee/BakeryStoreApp",
  },
  {
    id: 3,
    gambar: "/assets/Project/PengukurSuhu.png",
    name: "Room Temperature Meter",
    desc: "An IoT-based system using ESP8266 to monitor temperature and humidity in real time, integrated with Google Sheets, Telegram Bot, and ThingSpeak for data logging and alert notifications.",
    tools: ["C++", "Google Apps Script"],
    url: "https://github.com/Zougee/IoT-Suhu-Monitoring",
  },
];

const Projects = () => {
  return (
    <div className="projects mt-32 py-10 px-4 lg:px-16">
      <h1 className="text-center text-4xl font-bold mb-2 text-white">Projects</h1>
      <p className="text-base text-center opacity-60 text-white">
        Here are some of the projects I have built.
      </p>

      <div className="project-grid mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-zinc-800 rounded-xl w-full max-w-[400px] shadow-lg hover:scale-[1.04] transition-transform"
          >
            <img
              src={project.gambar}
              alt={`Image of ${project.name}`}
              loading="lazy"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h1 className="text-2xl font-bold my-4 text-white">{project.name}</h1>
            <p className="text-base text-white mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, index) => (
                <p
                  key={index}
                  className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md text-sm font-medium text-white"
                >
                  {tool}
                </p>
              ))}
            </div>

            <div className="text-center">
              <a
                href={project.url} // ✅ Pakai link dinamis
                target="_blank" // ✅ Buka di tab baru
                rel="noopener noreferrer"
                className="bg-violet-700 text-white p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
