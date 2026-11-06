import React, { useState } from 'react';
import { Building2, MapPin, Maximize2, ShieldCheck, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/websiteData';
import { ProjectItem } from '../types';

interface ProjectsGalleryProps {
  onSelectProjectForEnquiry: (projectName: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProjectForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', '3D Elevation', 'Interiors'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0F141C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
              <span className="w-6 h-[2px] bg-[#C5A869]"></span>
              <span>Portfolio of Engineering Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Residential & Commercial Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              A curated selection of turnkey residences, commercial hubs, 3D elevations, and interiors designed and executed under the direct structural supervision of Er. Sabarimannan, M.E., Civil.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C5A869] text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-[#151c26] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151c26] via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#0F141C]/90 border border-neutral-700 text-[#C5A869] text-xs font-semibold px-2.5 py-1 rounded-xs backdrop-blur-sm">
                    {project.category}
                  </div>

                  {/* Built-up area */}
                  <div className="absolute bottom-3 right-3 bg-[#0F141C]/90 border border-neutral-700 text-white text-xs px-2.5 py-1 rounded-xs backdrop-blur-sm font-mono">
                    {project.area}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
                      <span>{project.location}</span>
                      <span className="text-neutral-600">·</span>
                      <span>{project.floors}</span>
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#C5A869] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{project.type}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {project.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Chief Engineer's Note */}
                  <div className="p-3 bg-[#0a0d12] border border-neutral-800 rounded-sm">
                    <p className="text-[11px] uppercase tracking-wider text-[#C5A869] font-bold">
                      Er. Sabarimannan, M.E. Structural Note:
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 italic leading-relaxed">
                      "{project.engineerNote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="flex-1 py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-sm text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint & Specs</span>
                </button>
                <button
                  onClick={() => onSelectProjectForEnquiry(project.title)}
                  className="py-2.5 px-4 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Build Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Inspection */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#151c26] border border-neutral-700 rounded-sm max-w-2xl w-full p-6 text-white max-h-[90vh] overflow-y-auto space-y-5">
              <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs text-[#C5A869] font-bold uppercase">{activeProjectModal.category} Case Study</span>
                  <h3 className="text-xl font-bold text-white mt-1">{activeProjectModal.title}</h3>
                  <p className="text-xs text-neutral-400">{activeProjectModal.location} · {activeProjectModal.area} · {activeProjectModal.floors}</p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="text-neutral-400 hover:text-white p-1 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-sm overflow-hidden border border-neutral-800 h-64">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Engineering Highlights & Scope:</h4>
                <div className="space-y-2">
                  {activeProjectModal.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#0a0d12] border border-neutral-800 rounded-sm">
                <span className="text-xs text-[#C5A869] font-bold uppercase">Civil Quality Standard</span>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  {activeProjectModal.engineerNote}
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const name = activeProjectModal.title;
                    setActiveProjectModal(null);
                    onSelectProjectForEnquiry(name);
                  }}
                  className="flex-1 py-3 bg-[#C5A869] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm cursor-pointer hover:bg-[#d8bc7c]"
                >
                  Inquire About Building This Spec
                </button>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold rounded-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
