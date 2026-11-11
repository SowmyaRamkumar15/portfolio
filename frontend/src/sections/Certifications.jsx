import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import CertificationCard from '../components/CertificationCard';
import { certifications, certificationCategories } from '../data/certifications';
import './Certifications.css';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  return (
    <section id="certifications" className="certifications">
      <div className="certifications__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="07"
            label="Verified Credentials"
            title="Professional certifications & specializations"
            serifAccent="verified."
            subtitle="Validated proficiencies in data structures, Java OOP, backend services, cloud computing, and test automation."
          />
        </AnimatedSection>

        {/* Category Filter Pills */}
        <div className="certifications__filter-strip">
          <button
            className={`certifications__filter-btn ${selectedCategory === 'all' ? 'certifications__filter-btn--active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Credentials ({certifications.length})
          </button>
          {certificationCategories.map(cat => {
            const count = certifications.filter(c => c.category === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`certifications__filter-btn ${selectedCategory === cat.id ? 'certifications__filter-btn--active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Clean Credential Ledger Table */}
        <div className="certifications__ledger-wrap">
          <div className="certifications__ledger-head">
            <span className="col-idx">#</span>
            <span className="col-title">Credential & Issuer</span>
            <span className="col-date">Date / Status</span>
            <span className="col-actions">Verification</span>
          </div>

          <div className="certifications__ledger-body">
            {filtered.map((cert, i) => (
              <AnimatedSection key={cert.id} delay={i * 50}>
                <CertificationCard certification={cert} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
