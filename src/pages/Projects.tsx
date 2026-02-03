import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and a clean design.",
      image: "/project1.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/elliemeltzer",
      liveLink: null,
      featured: true
    },
    {
      title: "Data Analysis Project",
      description: "Add your coding project description. What problem does it solve? What did you learn?",
      image: "/project2.jpg",
      technologies: ["Python", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/elliemeltzer",
      liveLink: null,
      featured: false
    },
    {
      title: "Web Application",
      description: "Describe another project you've worked on. What technologies did you use?",
      image: "/project3.jpg",
      technologies: ["JavaScript", "React", "Node.js"],
      githubLink: null,
      liveLink: null,
      featured: false
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A collection of my coding projects showcasing my skills in web development, 
            data science, and problem-solving.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Project</h2>
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-80 md:h-auto bg-gradient-to-br from-purple-200 to-blue-200">
                <img 
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="24">Featured Project</text></svg>';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured
                </span>
                <CardTitle className="text-3xl mb-4">{featuredProject.title}</CardTitle>
                <CardDescription className="text-gray-700 text-base mb-6">
                  {featuredProject.description}
                </CardDescription>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {featuredProject.githubLink && (
                    <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        View Code →
                      </Button>
                    </a>
                  )}
                  {featuredProject.liveLink && (
                    <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-black hover:bg-gray-800">
                        Live Demo →
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Other Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              {/* Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23e5e7eb"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="20">Project Image</text></svg>';
                  }}
                />
              </div>

              {/* Content */}
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full text-sm">
                        View Code
                      </Button>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-black hover:bg-gray-800 text-sm">
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in working on new projects and learning new technologies.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-black hover:bg-gray-800">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}