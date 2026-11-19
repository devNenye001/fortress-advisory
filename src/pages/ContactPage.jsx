import React, { useState } from 'react'
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Governance & Board Advisory',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#032543] bg-blue-50 px-3 py-1">
            Confidential Consultation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mt-4 mb-4">
            Contact Fortress Advisory
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Reach out to our partners to discuss your board governance needs, forensic diagnostics, or sensitive integrity matters in total confidence.
          </p>
        </div>
      </section>

      {/* Main Form & Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10">
              <h2 className="font-serif text-2xl font-normal text-gray-900 mb-2">
                Initiate a Confidential Conversation
              </h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Complete the inquiry form below and a senior advisory partner will respond within 24 business hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 text-center animate-slide-up">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-gray-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Thank you, {formData.name}. Your details have been submitted securely. A member of our executive advisory team will contact you confidentially.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        service: 'Governance & Board Advisory',
                        message: '',
                      })
                    }}
                    className="bg-[#032543] text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#021b31]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Smith"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#032543]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.smith@organization.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#032543]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Organisation / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Board Name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#032543]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Area of Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#032543]"
                      >
                        <option>Governance & Board Advisory</option>
                        <option>Fraud Risk & Forensic Diagnostics</option>
                        <option>Whistleblowing Frameworks</option>
                        <option>Anti-Bribery & Compliance</option>
                        <option>Executive Training Programme</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Brief Message or Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the nature of your inquiry. You may omit sensitive names or details until a non-disclosure agreement is executed."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#032543]"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-[#032543] shrink-0" />
                    <span>Protected by our strict confidentiality protocol and NDA standard.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#032543] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#021b31] transition-colors"
                  >
                    Submit Confidential Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="font-serif text-xl font-normal text-gray-900 mb-6">
                  Advisory Headquarters
                </h3>

                <ul className="space-y-6 text-sm text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 text-[#032543]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Office Location</p>
                      <p className="mt-1 leading-relaxed">
                        Fortress Advisory Tower, Victoria Island,<br />
                        Lagos, Nigeria.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 text-[#032543]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Direct Inquiries</p>
                      <p className="mt-1 text-gray-600">advisory@fortressadvisory.com</p>
                      <p className="text-gray-600">governance@fortressadvisory.com</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 text-[#032543]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telephone</p>
                      <p className="mt-1 text-gray-600">+234 (0) 1 800 FORTRESS</p>
                      <p className="text-xs text-gray-500">Mon - Fri: 8:30 AM - 5:30 PM (WAT)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Confidentiality Notice Box */}
              <div className="p-6 bg-blue-50/50 border border-blue-100">
                <div className="flex items-center gap-2 text-[#032543] font-semibold text-sm mb-2">
                  <ShieldCheck size={18} />
                  <span>Whistleblower & Hotline Intake</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If you are reporting a sensitive whistleblowing allegation under an active client hotline mandate, please use the designated encrypted portal or your assigned access pin for anonymity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  )
}

