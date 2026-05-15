const sections = [
  {
    id: "home",
    title: "Home",
    bg: "bg-[#0A2540]",
    text: "text-white",
    description:
      "Welcome to LATAM Agile Delivery — connecting business strategy with technical execution.",
  },
  {
    id: "about",
    title: "About",
    bg: "bg-white",
    text: "text-gray-900",
    description:
      "10+ years leading distributed, high-performance teams at global companies. Specialised in nearshore engineering squads across Brazil, India, and South Africa.",
  },
  {
    id: "services",
    title: "Services",
    bg: "bg-slate-50",
    text: "text-gray-900",
    description:
      "Agile delivery management, DevSecOps, data engineering at scale, observability, and AI-powered engineering workflows.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    bg: "bg-white",
    text: "text-gray-900",
    description:
      "Mission-critical systems built for Serasa Experian, Amdocs, and global fintech companies processing 80M+ daily financial transactions.",
  },
  {
    id: "blog",
    title: "Blog",
    bg: "bg-slate-50",
    text: "text-gray-900",
    description:
      "Insights on Agile delivery, AI-driven workflows, DevSecOps, and nearshore team leadership.",
  },
  {
    id: "contact",
    title: "Contact",
    bg: "bg-[#0A2540]",
    text: "text-white",
    description:
      "Get in touch: wesley.zilva@gmail.com · linkedin.com/in/wesleyzilva · São Carlos, SP – Brazil",
  },
];

export default function HomePage() {
  return (
    <main>
      {sections.map(({ id, title, bg, text, description }) => (
        <section
          key={id}
          id={id}
          className={`min-h-screen flex flex-col items-center justify-center px-8 py-20 ${bg} ${text}`}
        >
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="max-w-2xl text-center text-lg leading-relaxed">
            {description}
          </p>
        </section>
      ))}
    </main>
  );
}
