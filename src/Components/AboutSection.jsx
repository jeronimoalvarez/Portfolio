import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Junior Full Stack Developer (in training)
            </h3>

            <p className="text-muted-foreground">
              Hi! My name is Jerónimo Álvarez. I am a student of the Programming Technician career at UTN. I have a strong interest in technology, and I decided to focus on programming after completing a Full Stack Developer bootcamp focused on web development.
            </p>

            <p className="text-muted-foreground">
              During this bootcamp, I learned technologies such as JavaScript, HTML, CSS, Node.js and PostgreSQL. I also worked with React.js for the front-end and Express.js for the back-end.
            </p>

            <p className="text-muted-foreground">
              In the future, I want to finish my degree and study a Full Stack Developer diploma at UTN to specialize even more in this field. My goal is to work for an international company, starting as a junior developer and growing professionally step by step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End Web Development </h4>
                  <p className="text-muted-foreground">
                    I build responsive and modern web interfaces using HTML, CSS, JavaScript and React. I focus on clean structure, good practices and smooth user interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI Implementation & Interactive Features </h4>
                  <p className="text-muted-foreground">
                    I create simple and intuitive user interfaces. I enjoy working with components, handling user input and adding interactive elements that improve the experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Growing My Technical Skills </h4>
                  <p className="text-muted-foreground">
                    I keep improving my development skills by studying, practicing and exploring new tools in the full stack field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};