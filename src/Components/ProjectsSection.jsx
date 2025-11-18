import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Netflix-Clone",
    description: "I developed a Single Page Application (SPA) where I created a clone of the famous “Netflix” website. The project is fully responsive and includes a login page, the main home page with content sections, and a payment system with different plans. This project was built completely on the front-end.",
    image: "/projects/project1.png",
    tags: ["Javascript", "React.js", "Redux", "Material UI", "Axios", "Firebase"],
    demoUrl: "https://netflix-app-jeronimoalvarez.vercel.app/",
    githubUrl: "https://github.com/jeronimoalvarez/Netflix-App",
  },
  {
    id: 2,
    title: "To-do List",
    description:
      "I built a To-Do List application where users can add, mark and remove tasks. The app is simple, responsive, and focuses on managing state, rendering dynamic elements, and handling user interactions in React.",
    image: "/projects/project2.png",
    tags: ["Javascript", "HTML", "CSS", "React.js"],
    demoUrl: "https://lista-de-tareass.netlify.app/",
    githubUrl: "https://github.com/jeronimoalvarez/Lista-de-Tareas",
  },
  {
    id: 3,
    title: "Interactive Calculator",
    description:
      "This project is an interactive calculator that allows users to perform basic math operations such as addition, subtraction, multiplication and division. The interface is clean and responsive, and the logic was fully implemented on the front-end using JavaScript and React.",
    image: "/projects/project3.png",
    tags: ["Javascript", "HTML", "CSS", "React.js"],
    demoUrl: "https://calculadora-interactiva.netlify.app/",
    githubUrl: "https://github.com/jeronimoalvarez/Calculadora-Interactiva",
  },
  {
    id: 4,
    title: "Click Counter",
    description:
      "I developed a simple Click Counter application to practice basic front-end logic and component handling. The app increases the counter each time the user clicks a button and allows resetting the value. This project was built using React and focuses on understanding state management.",
    image: "/projects/project4.png",
    tags: ["Javascript", "HTML", "CSS", "React.js"],
    demoUrl: "https://contador-de-clicss.netlify.app/",
    githubUrl: "https://github.com/jeronimoalvarez/Contador-de-Clics",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jeronimoalvarez"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};