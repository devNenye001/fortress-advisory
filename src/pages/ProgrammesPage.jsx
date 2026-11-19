import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, Users, Calendar, Award } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function ProgrammesPage() {
  const programmes = [
    {
      title: 'Executive Board Governance & Fiduciary Oversight',
      duration: '2-Day Executive Intensive',
      audience: 'Board Directors, Committee Chairs & Non-Executives',
      desc: 'An immersive masterclass on steering corporate governance, evaluating executive conduct, overseeing risk appetite, and upholding boardroom ethics.',
      modules: ['Board Charter Alignment', 'Navigating Conflicts of Interest', 'Crisis Governance Case Studies'],
    },
    {
      title: 'Enterprise Fraud Risk & Forensic Awareness',
      duration: '3-Day Comprehensive Course',
      audience: 'Audit Committee Members, Internal Auditors & Risk Officers',
      desc: 'Practical methodologies to detect procurement manipulation, financial statement misstatements, and digital deception before systemic losses materialize.',
      modules: ['Red Flags in Procurement', 'Interviewing & Fact Gathering', 'Designing Defensive Internal Controls'],
    },
    {
      title: 'Whistleblowing Governance & Speak-Up Operations',
      duration: '1-Day Masterclass',
      audience: 'Compliance Heads, Legal Counsel & HR Executives',
      desc: 'Equips organizations to design, operate, and triage confidential whistleblower programs while maintaining legal compliance and reporter safety.',
      modules: ['Confidential Intake Protocols', 'Triage & Evidence Preservation', 'Preventing Retaliation Claims'],
    },
    {
      title: 'Ethical Leadership in Ambiguous Environments',
      duration: 'Custom Cohort Series',
      audience: 'Senior Managers, Country Leads & C-Suite Executives',
      desc: 'Frameworks for resolving complex ethical dilemmas when business pressures, cultural norms, and regulatory mandates conflict.',
      modules: ['Tone-at-the-Top Calibration', 'Ethical Decision Matrix', 'Cultivating Psychological Safety'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
            Executive Education
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mt-4 mb-4">
            Training & Capacity Programmes
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Tailored governance masterclasses, board simulations, and anti-fraud workshops designed for decision-makers.
          </p>
        </div>
      </section>

      {/* Featured Training Banner with Image */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 overflow-hidden">
              <img 
                src="/training-section-pic.jpg" 
                alt="Executive Training Session" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#032543] uppercase tracking-wider bg-blue-50 px-3 py-1">
                Custom In-House Training
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 mt-4 mb-5 leading-tight">
                Empowering Teams with Actionable Integrity Tools
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our programmes depart from theoretical lecture slides to deliver real-world case studies, simulated crisis boardroom scenarios, and interactive forensic drills. We tailor each syllabus to address the specific operational risks facing your sector.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#032543]">500+</p>
                  <p className="text-gray-500 text-xs mt-1">Executives Trained</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#032543]">99%</p>
                  <p className="text-gray-500 text-xs mt-1">Satisfaction Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes List */}
      <section className="py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal mb-4">
              Upcoming & Core Programmes
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Available for open cohort enrollment or as customized bespoke corporate engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 text-gray-700">
                      <Clock size={12} /> {prog.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-blue-50 text-[#032543] px-3 py-1">
                      <Users size={12} /> {prog.audience}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-gray-900 mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Key Modules:</p>
                    <ul className="space-y-1.5">
                      {prog.modules.map((m, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#032543] hover:text-[#021b31] group"
                  >
                    <span>Request syllabus & pricing</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
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

