import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Portfolio() { 
  const sections = [
    {
      title: "Research",
      description: "Explore my academic and personal research",
      link: "/research",
      icon: "🔬",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Projects",
      description: "Check out my coding projects and technical work",
      link: "/projects",
      icon: "💻",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "About Me",
      description: "Learn about my background and interests",
      link: "/about",
      icon: "👤",
      color: "from-green-50 to-green-100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Welcome to My <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transforming ideas into impact through research, development, and innovation.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Explore My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link to={section.link} key={index}>
              <Card className={`h-full bg-gradient-to-br ${section.color} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <CardHeader>
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription className="text-gray-700 text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group">
                    Explore 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div></div>
              <img
                      src="/ESGV_preview.png"
                      alt="Factor exposure comparison for ESGV vs VTI"
                      className="block w-full h-auto"
                      loading="lazy"
                    />
              <CardHeader>
                <CardTitle>ESGV vs. VTI</CardTitle>
                <CardDescription>
                  Comparative analysis of an ESG-screened ETF (ESGV) versus a total market ETF (VTI), focusing on performance, drawdowns, and factor exposure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/research/ESGV_vs._VTI">
                  <Button>Read More →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-200 to-blue-200"></div>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>
                  Add Description...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/research">
                  <Button>Read More →</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}