import { Code2, Monitor, Database, Layout } from 'lucide-react';
import SkillCard from './SkillCard';

function Skills() {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8" />,
      description: 'Creating responsive and interactive user interfaces with React'
    },
    {
      title: 'Backend Development',
      icon: <Code2 className="w-8 h-8" />,
      description: 'Building scalable server-side applications with Node.js'
    },
    {
      title: 'Database Design',
      icon: <Database className="w-8 h-8" />,
      description: 'Designing and optimizing database structures'
    },
    {
      title: 'UI/UX Design',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Creating beautiful and intuitive user experiences'
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;