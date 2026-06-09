import { Icon } from "@iconify/react";

const SPARSE_GRID = Array(16).fill(null);

SPARSE_GRID[0]  = { key: "react-light",       label: "React" };
SPARSE_GRID[2]  = { key: "typescript",        label: "TypeScript" };
SPARSE_GRID[3]  = { key: "git",               label: "Git" };
SPARSE_GRID[5]  = { key: "tailwindcss-light",  label: "Tailwind CSS" };
SPARSE_GRID[7]  = { key: "nodejs-light",       label: "Node.js" };
SPARSE_GRID[8]  = { key: "java-light",         label: "Java" };
SPARSE_GRID[9]  = { key: "figma-light",         label: "Figma" };
SPARSE_GRID[10] = { key: "spring-light",       label: "Spring Boot" };
SPARSE_GRID[13] = { key: "python-light",       label: "Python" };
SPARSE_GRID[15] = { key: "flask-light",        label: "Flask" };

export function SkillsGrid() {
  // Filter out the null spaces so we can render a dense layout on mobile
  const denseSkills = SPARSE_GRID.filter(Boolean);

  return (
    <>
      <style>{`
        .skill-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          padding: 2px;
          background: transparent;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Neon glow border — box-shadow layered for depth */
        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(
            135deg,
            #4ade80,
            #86efac,
            #ffffff,
            #4ade80
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* Outer glow bloom */
        .skill-card::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: transparent;
          box-shadow:
            0 0 8px 1px   rgba(74, 222, 128, 0.5),
            0 0 20px 4px rgba(74, 222, 128, 0.25),
            0 0 40px 8px rgba(74, 222, 128, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-wrapper:hover .skill-card {
          transform: scale(1.1);
        }

        .skill-wrapper:hover .skill-card::before,
        .skill-wrapper:hover .skill-card::after {
          opacity: 1;
        }
      `}</style>

      {/* Reduced padding on mobile (p-2) to maximize space for icons */}
      <div className="w-full md:h-fit flex items-center justify-center p-2 md:p-6">
        
        {/* 1. MOBILE LAYOUT: Dense 3-column layout (No dead space, icons are ~50% bigger) */}
        <div className="grid grid-cols-3 gap-5 w-full md:hidden mb-8">
          {denseSkills.map((skill, index) => (
            <div key={`mobile-${index}`} className="flex items-center justify-center w-full aspect-square relative">
              <div className="skill-wrapper group relative w-full h-full flex flex-col gap-2 items-center cursor-pointer select-none">
                <div className="skill-card">
                  <div className="relative w-full h-full bg-white rounded-[14px] p-3 flex items-center justify-center z-10">
                    <Icon
                      icon={`skill-icons:${skill.key}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-7 font-mono text-[11px] font-semibold text-green-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out whitespace-nowrap z-20 pointer-events-none">
                  {skill.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. DESKTOP LAYOUT: Original abstract sparse 4x4 layout */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-6 w-full aspect-square">
          {SPARSE_GRID.map((skill, index) => (
            <div key={`desktop-${index}`} className="flex items-center justify-center w-full h-full relative">
              {skill ? (
                <div className="skill-wrapper group relative w-full h-full flex flex-col gap-2 items-center cursor-pointer select-none">
                  <div className="skill-card">
                    <div className="relative w-full h-full bg-white rounded-[14px] p-2 flex items-center justify-center z-10">
                      <Icon
                        icon={`skill-icons:${skill.key}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <span className="absolute -bottom-8 font-mono text-xs font-semibold text-green-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out whitespace-nowrap z-20 pointer-events-none">
                    {skill.label}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}