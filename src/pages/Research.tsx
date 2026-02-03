import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Research() {
  const researchProjects = [
    {
      title: "ESGV v. VTI",
      description:
        "Comparative analysis of an ESG-screened ETF versus a total market ETF, focusing on performance, drawdowns, and factor exposure.",
      image: "/ESGV_preview.png", // ✅ ONLY this card shows ESGV preview
      category: "Stock Comparison",
      date: "January 2026",
      tags: ["ESG Investing", "ETFs"],
      href: "/research/ESGV_vs._VTI",
    },
    {
      title: "Research Topic 2",
      description: "Add description.",
      image: "/research2.jpg",
      category: "Category",
      date: "Date",
      tags: ["Tag 1", "Tag 2"],
      href: "",
    },
    {
      title: "Your Research Title Here",
      description:
        "Add your research project description here. What problem did you solve? What did you discover?",
      image: "/research3.jpg",
      category: "Your Category",
      date: "Month Year",
      tags: ["Tag 1", "Tag 2"],
      href: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold">My Research</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Explore my academic and personal research projects. From legal analysis
            to financial modeling, each project reflects my approach to understanding
            complex systems.
          </p>
        </div>
      </section>

      {/* Research Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map((project, index) => {
            const card = (
              <Card
                className={`overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  project.href ? "cursor-pointer" : "opacity-95"
                }`}
              >
                {/* Image */}
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-blue-600">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <Button asChild className="w-full bg-black hover:bg-gray-800">
                      <Link to={project.href}>Read More →</Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );

            return project.href ? (
              <Link key={index} to={project.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Interested in Collaborating?</h2>
          <p className="mb-8 text-gray-600">
            I’m always open to research opportunities and interdisciplinary projects.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-800">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}