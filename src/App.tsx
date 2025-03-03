import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import Skill from "@/components/custom/skill";
import skillDatas from "./datas/skills";
import pp from './assets/pp.jpg';
import educations from "./datas/educations";


const profile = {
  name: "Heri Santoso",
  role: "Backend Developer",
  image: "/path-to-profile-image.jpg", // Replace with actual path
  email: "sweetestname013@gmail.com",
  linkedin: "https://www.linkedin.com/in/heri-santoso-8111a4233/",
  story: `
  A passionate backend developer with expertise in building scalable applications, cloud solutions, and microservices. 
  With years of experience working with various technologies, I'm specializes in optimizing performance, ensuring security, and delivering seamless user experiences. 
  Passionate about DevOps, cloud computing, and backend architecture, and constantly seeks innovative solutions to complex problems.`
};

const experiences = [
  {
    company: "Pdc Media Group",
    role: "Backend Developer",
    period: "Apr 2019 - Present",
    description: "Leading backend development for large-scale applications."
  },
];




function EducationHistory() {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educations.map((edu, index) => (
          <Card key={index} className="w-full max-w-3xl p-4">
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
        {skillDatas.map((skill, index) => (
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
          <AvatarImage src={pp} alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold mt-4">Heri Santoso</h2>
        <p className="text-gray-500">Backend Developer</p>
        <div className="mt-4 flex flex-col items-center space-y-2">
          <a href={`mailto:${profile.email}`} className="flex items-center space-x-2 text-blue-500 hover:underline">
            <Mail size={18} /> <span>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-500 hover:underline">
            <Linkedin size={18} /> <span>LinkedIn</span>
          </a>
        </div>
        <CardContent className="mt-6 text-gray-700 text-sm">
          <p>{profile.story}</p>
        </CardContent>
      </Card>

      <div className="w-full max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="text-gray-500">{exp.role} ({exp.period})</p>
                <span className="text-sm text-gray-400">{exp.description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <EducationHistory />
      <SkillLayout />

      {/* Projects Section
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
      </div> */}

      
      
    </div>
  );
}






