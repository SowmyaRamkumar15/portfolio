import { 
  Code2, 
  Server, 
  Layout, 
  Terminal, 
  Cloud, 
  CheckCircle2, 
  Cpu, 
  Database,
  Layers
} from 'lucide-react';
import './SkillGroup.css';

const categoryIconMap = {
  languages: Code2,
  backend: Server,
  frontend: Layout,
  tools: Terminal,
  cloud: Cloud,
  testing: CheckCircle2,
  concepts: Layers
};

export default function SkillGroup({ category, index }) {
  const CategoryIcon = categoryIconMap[category.id] || Cpu;

  return (
    <div className="skill-group">
      <div className="skill-group__meta">
        <div className="skill-group__icon-tag">
          <CategoryIcon size={16} />
        </div>
        <div className="skill-group__title-wrap">
          <span className="skill-group__index">0{index + 1}</span>
          <h3 className="skill-group__title">{category.title}</h3>
        </div>
      </div>

      <ul className="skill-group__items">
        {category.skills.map((skill) => (
          <li key={skill.name} className="skill-group__item">
            <span className="skill-group__bullet" />
            <span className="skill-group__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
