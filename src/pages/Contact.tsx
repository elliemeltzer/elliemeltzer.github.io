import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "meltzer.el@northeastern.edu",
      link: "mailto:meltzer.el@northeastern.edu",
      description: "Send me an email anytime"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Check out my Profile",
      link: "https://www.linkedin.com/in/eleanor-meltzer/",
      description: "Connect with me professionally"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "Check out my profile",
      link: "https://github.com/elliemeltzer",
      description: "Check out my code"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            I'd love to hear from you! Whether it's a project, job opportunity, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="block"
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{method.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-medium">{method.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      
    </div>
  );
}