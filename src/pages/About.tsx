import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Learn more about my background, education, and interests
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Hi, I'm Ellie!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a student at Northeastern University passionate about Data Science and the impact it can have on any industry. 
              Welcome to my portfolio where I share my journey in research, coding, and personal exploration.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Northeastern University</h3>
                <p className="text-gray-600">Bachelor of Science in Data Science and Economics</p>
                <p className="text-gray-600">Expected Graduation: Dec 2027</p>
                <p className="text-gray-600">GPA: 3.86</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Data Structures and Databases</li>
                  <li>Advanced Programming with Data</li>
                  <li>Econometrics</li>
                  <li>Statistics for Economists</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">R</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                  
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hometown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Background</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800">🏠 Hometown</h3>
                <p className="text-gray-700">Wayne, PA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interests/Hobbies */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Beyond Academics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">When I'm not studying or coding, you can find me:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Reading</h4>
                  <p className="text-gray-600 text-sm">Current Read: Station Eleven by Emily St. John Mandel </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Travel</h4>
                  <p className="text-gray-600 text-sm">Favorite place visited: Budapest </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Enjoying Food</h4>
                  <p className="text-gray-600 text-sm">I will always say yes to cooking or eating...my two favorite activities! </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Music</h4>
                  <p className="text-gray-600 text-sm">Anything John Mayer, Eagles, or Tame impala are always in my rotation </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}