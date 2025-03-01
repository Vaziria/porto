import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Skill from "@/components/custom/skill";


const projects = [
  {
    title: "Project One",
    description: "A web application for managing tasks efficiently.",
    image: "/placeholder-project.jpg",
  },
  {
    title: "Project Two",
    description: "An AI-powered chatbot for customer support.",
    image: "/placeholder-project.jpg",
  },
];

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
];

const educationHistory = [
  {
    institution: "Harvard University",
    degree: "Bachelor of Science in Computer Science",
    year: "2015 - 2019",
  },
  {
    institution: "MIT",
    degree: "Master of Science in Artificial Intelligence",
    year: "2019 - 2021",
  },
];

function EducationHistory() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educationHistory.map((edu, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p className="text-gray-500">{edu.degree}</p>
              <span className="text-sm text-gray-400">{edu.year}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SkillLayout() {
  return (
    <div className="w-full max-w-3xl">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="p-6 flex flex-col items-center space-y-6">
      {/* Profile Header */}
      <Card className="w-full max-w-3xl text-center p-6">
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage src="/pp.jpg" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold mt-4">Heri Santoso</h2>
        <p className="text-gray-500">Backend Developer</p>
        <div className="mt-4">
          <Button>Contact Me</Button>
        </div>
      </Card>

      {/* Projects Section */}
      <div className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <SkillLayout />
      <EducationHistory />
    </div>
  );
}






