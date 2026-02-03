import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PagePreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
  

      {/* preview image */}
      <div className="h-48 w-full">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain bg-white"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Projects",
      description: "Check out my coding projects and technical work",
      bgColor: "bg-blue-50",
      link: "/projects",
      preview: null, // leave empty for now
    },
    {
      title: "Research",
      description: "Explore my academic research",
      bgColor: "bg-green-50",
      link: "/research",
      preview: null, // leave empty for now
    },
    {
      title: "About Me",
      description: "Learn about my background and interests",
      bgColor: "bg-red-50",
      link: "/about",
      preview: "/homepage_projects/about_me.png",
    },
    {
      title: "Contact Me",
      description: "Get in touch via email, LinkedIn, or GitHub",
      bgColor: "bg-slate-50",
      link: "/contact",
      preview: "/homepage_projects/contact_page.png",
    },
  ];

  const features = [
    {
      title: "Hometown:",
      description: "Villanova, PA",
    },
    {
      title: "Education:",
      description: "Northeastern University",
    },
    {
      title: "Hobbies:",
      description: "Trying to cook and eat new foods, Skiing, Crew!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center relative overflow-hidden min-h-[600px] flex items-center">
        {/* Liquid Ether Background */}
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          {/* Flowing liquid blobs */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/60 to-blue-300/60 rounded-full mix-blend-multiply filter blur-3xl animate-liquid-1"></div>
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/60 to-pink-300/60 rounded-full mix-blend-multiply filter blur-3xl animate-liquid-2"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-violet-200/60 to-indigo-300/60 rounded-full mix-blend-multiply filter blur-3xl animate-liquid-3"></div>
            <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-200/50 to-purple-300/50 rounded-full mix-blend-multiply filter blur-3xl animate-liquid-4"></div>
          </div>

          {/* Ethereal shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 animate-shimmer"></div>

          {/* Subtle glass effect */}
          <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <p className="text-sm font-semibold text-gray-700 mb-4 tracking-wider uppercase drop-shadow-sm">
            Eleanor Meltzer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm">
            Welcome to my website!
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Learn more about me and what I love
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full backdrop-blur-md bg-white/60 hover:bg-white/80 border-white/50 shadow-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Quick Facts</h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Mockup */}
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl p-3 h-80 w-72 md:h-96 md:w-80 overflow-hidden shadow-xl">
                <img
                  src="/Headshot_f25.png"
                  alt="Ellie Meltzer Headshot"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link key={index} to={project.link}>
              <Card
                className={`${project.bgColor} group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* If preview exists, show screenshot. Otherwise, show your old CSS placeholders */}
                  {project.preview ? (
                    <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                      <PagePreview
                        src={project.preview}
                        alt={`${project.title} page preview`}
                      />
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-4 h-48 overflow-hidden">
                      {/* Existing CSS preview placeholders */}
                      {project.title === "Projects" && (
                        <div className="space-y-2">
                          <div className="h-3 bg-purple-200 rounded w-3/4"></div>
                          <div className="h-3 bg-purple-100 rounded w-1/2"></div>
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            <div className="h-16 bg-blue-100 rounded"></div>
                            <div className="h-16 bg-blue-100 rounded"></div>
                            <div className="h-16 bg-blue-100 rounded"></div>
                          </div>
                        </div>
                      )}

                      {project.title === "Research" && (
                        <div className="space-y-2">
                          <div className="h-4 bg-green-200 rounded w-full"></div>
                          <div className="h-4 bg-green-100 rounded w-5/6"></div>
                          <div className="h-4 bg-green-100 rounded w-4/6"></div>
                          <div className="flex gap-2 mt-4">
                            <div className="w-1/2 h-20 bg-green-50 rounded"></div>
                            <div className="w-1/2 h-20 bg-green-50 rounded"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}