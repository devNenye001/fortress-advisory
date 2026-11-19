import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, FileSearch, Users, AlertTriangle, Scale, Lock } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function ServicesPage() {
  const services = [
    {
      icon: <Shield size={28} className="text-[#032543]" />,
      title: 'Corporate Governance & Board Advisory',
      desc: 'Independent evaluation of board charters, committee structures, oversight mechanisms, and fiduciary duties to assure regulatory compliance and investor confidence.',
      points: [
        'Board performance evaluations and skills audits',
        'Director fiduciary duty advisory & orientation',
        'Conflict of interest resolution frameworks',
      ],
    },
    {
      icon: <FileSearch size={28} className="text-[#032543]" />,
      title: 'Fraud Risk Diagnostics & Forensic Oversight',
      desc: 'Proactive identification of organizational vulnerabilities, internal control gaps, and procurement fraud vectors before losses occur.',
      points: [
        'Enterprise-wide fraud risk assessments (FRA)',
        'Internal control vulnerability stress-testing',
        'Independent forensic fact-finding reviews',
      ],
    },
    {
      icon: <AlertTriangle size={28} className="text-[#032543]" />,
      title: 'Whistleblowing & Speak-Up Frameworks',
      desc: 'Designing safe, confidential, and compliant whistleblowing channels that protect reporters and ensure objective triage of allegations.',
      points: [
        'Whistleblowing policy architecture & benchmarking',
        'Third-party hotline governance & triage protocols',
        'Anti-retaliation and whistleblower protection mechanisms',
      ],
    },
    {
      icon: <Scale size={28} className="text-[#032543]" />,
      title: 'Anti-Bribery & Regulatory Compliance',
      desc: 'Developing resilient compliance management systems tailored to national and international anti-corruption legislation.',
      points: [
        'Anti-bribery and corruption (ABC) compliance reviews',
        'Third-party & vendor integrity due diligence',
        'Gifts, hospitality, and conflict register systems',
      ],
    },
    {
      icon: <Users size={28} className="text-[#032543]" />,
      title: 'Ethical Culture & Climate Audits',
      desc: 'Measuring employee perceptions of integrity, psychological safety, and organizational justice through evidence-based climate surveys.',
      points: [
        'Anonymous ethical climate surveys and interviews',
        'Code of conduct review and revitalization',
        'Executive ethical tone-at-the-top alignment',
      ],
    },
    {
      icon: <Lock size={28} className="text-[#032543]" />,
      title: 'Sensitive Inquiries & Crisis Governance',
      desc: 'Discreet, board-commissioned reviews of high-stakes allegations involving senior personnel, ensuring fairness and legal defensibility.',
      points: [
        'Board-mandated confidential investigations',
        'Stakeholder and regulatory remediation plans',
        'Post-incident governance reform roadmaps',
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
            Advisory Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mt-4 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Strategic, evidence-backed advisory solutions tailored to safeguard organizations against integrity failures and governance risks.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="font-serif text-xl font-normal text-gray-900 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <ul className="space-y-2 mb-8 border-t border-gray-100 pt-4">
                    {srv.points.map((pt, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                        <span className="text-[#032543] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#032543] hover:text-[#021b31] group"
                  >
                    <span>Request advisory brief</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal mb-4">
              Our Advisory Methodology
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A transparent, four-phase engagement model designed for maximum rigor and zero disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnostic', desc: 'Thorough review of policies, risk registers, audit findings, and leadership interviews.' },
              { step: '02', title: 'Blueprint', desc: 'Formulation of bespoke governance recommendations and actionable risk mitigation roadmaps.' },
              { step: '03', title: 'Implementation', desc: 'Direct support in rolling out controls, training leadership, and establishing reporting lines.' },
              { step: '04', title: 'Assurance', desc: 'Ongoing monitoring, periodic reviews, and board-level integrity assurance reports.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 border border-gray-200">
                <span className="font-serif text-3xl font-bold text-[#FFD700] block mb-2">{step.step}</span>
                <h4 className="font-serif text-lg font-normal text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  )
}

