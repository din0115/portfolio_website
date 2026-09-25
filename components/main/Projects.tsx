import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Selected Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="ScholarshipERP - Multi-Tenant Scholarship System"
          description="Multi-tenant ASP.NET MVC application serving 18+ municipal SEE scholarship portals across Nepal from a single shared codebase, with tenant-specific rules, dynamic routing, role-based access, approval workflows and reporting."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Pivotal ERP"
          description="Scalable ASP.NET and SQL backend for inventory, purchase and sales tracking, ledger vouchers and POS printing, with OneSignal notifications, PDF/Excel reports and chart dashboards."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Next Coach - Online Mentorship Platform"
          description="Backend for an online learning platform offering 1-on-1 mentorship, live classes and webinars, built with Next.js, TypeScript, Prisma and PostgreSQL."
        />
      </div>
    </div>
  );
};

export default Projects;
