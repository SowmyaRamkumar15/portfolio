import { ArrowRight, Server, Database, BrainCircuit, Layout, CheckCircle2 } from 'lucide-react';
import './ProjectWalkthrough.css';

export default function ProjectWalkthrough() {
  return (
    <div className="walkthrough-editorial">
      <div className="walkthrough-editorial__header">
        <span className="walkthrough-editorial__tag">System Architecture</span>
        <h3 className="walkthrough-editorial__title">
          Interviora — AI Interview Trainer Technical Architecture
        </h3>
        <p className="walkthrough-editorial__subtitle">
          An end-to-end technical overview detailing how the React client communicates through Spring Boot REST controllers into IBM watsonx Orchestrate RAG pipelines and persists evaluation state in MySQL.
        </p>
      </div>

      {/* Concrete System Architecture Flow Diagram */}
      <div className="walkthrough-editorial__diagram">
        
        <div className="arch-card arch-card--client">
          <div className="arch-card__badge">Tier 1</div>
          <div className="arch-card__icon-box">
            <Layout size={20} />
          </div>
          <h4 className="arch-card__name">React.js Client</h4>
          <span className="arch-card__tech">Frontend Tier</span>
          <p className="arch-card__desc">Interactive session controller, dynamic question prompt view, and real-time response capture.</p>
        </div>

        <div className="arch-flow-connector">
          <span className="arch-flow-label">REST / JSON</span>
          <ArrowRight size={18} className="arch-flow-arrow" />
        </div>

        <div className="arch-card arch-card--backend">
          <div className="arch-card__badge">Tier 2</div>
          <div className="arch-card__icon-box">
            <Server size={20} />
          </div>
          <h4 className="arch-card__name">Spring Boot Backend</h4>
          <span className="arch-card__tech">Application Layer</span>
          <p className="arch-card__desc">Controller-Service-Repository architecture, request sanitization, authentication, and dispatch.</p>
        </div>

        <div className="arch-flow-connector">
          <span className="arch-flow-label">Orchestration API</span>
          <ArrowRight size={18} className="arch-flow-arrow" />
        </div>

        <div className="arch-card arch-card--ai">
          <div className="arch-card__badge">Tier 3</div>
          <div className="arch-card__icon-box">
            <BrainCircuit size={20} />
          </div>
          <h4 className="arch-card__name">watsonx & RAG</h4>
          <span className="arch-card__tech">AI Orchestration</span>
          <p className="arch-card__desc">Indexed technical knowledge repository grounding LLM responses in real software benchmarks.</p>
        </div>

        <div className="arch-flow-connector">
          <span className="arch-flow-label">JPA / SQL</span>
          <ArrowRight size={18} className="arch-flow-arrow" />
        </div>

        <div className="arch-card arch-card--db">
          <div className="arch-card__badge">Tier 4</div>
          <div className="arch-card__icon-box">
            <Database size={20} />
          </div>
          <h4 className="arch-card__name">MySQL Database</h4>
          <span className="arch-card__tech">Persistence</span>
          <p className="arch-card__desc">Schema tables for candidate interview sessions, domain question banks, and metric histories.</p>
        </div>

      </div>

      {/* Architectural Ledger / Key Takeaways */}
      <div className="walkthrough-editorial__takeaways">
        <div className="takeaway-item">
          <div className="takeaway-item__num">01</div>
          <h5 className="takeaway-item__title">Domain RAG Pipeline</h5>
          <p className="takeaway-item__desc">Instead of generic LLM outputs, responses are cross-referenced with curated CS interview rubrics to assess algorithmic complexity and design trade-offs accurately.</p>
        </div>

        <div className="takeaway-item">
          <div className="takeaway-item__num">02</div>
          <h5 className="takeaway-item__title">Decoupled Microservice Readiness</h5>
          <p className="takeaway-item__desc">The Spring Boot controller acts as a resilient gateway, isolating AI orchestration latency from user session persistence and enabling future microservice modularity.</p>
        </div>

        <div className="takeaway-item">
          <div className="takeaway-item__num">03</div>
          <h5 className="takeaway-item__title">IBM SkillsBuild AICTE Outcome</h5>
          <p className="takeaway-item__desc">Developed and verified during the IBM SkillsBuild internship, proving practical full-stack integration with enterprise AI toolchains.</p>
        </div>
      </div>

    </div>
  );
}
