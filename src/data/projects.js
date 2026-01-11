export const projects = [
  {
    id: 1,
    title: 'HealthTrack MVP',
    category: 'startup',
    client: 'VC-backed Health Startup',
    industry: 'Healthcare',
    description: 'A patient monitoring app that helped founders raise $2M seed after validating with 1,000+ beta users.',
    fullDescription: 'We partnered with a health-tech founding team to build their MVP from scratch. In just 10 weeks, we delivered a fully functional patient monitoring app with real-time vitals tracking, doctor dashboard, and HIPAA-compliant data storage.',
    challenge: 'The founders needed to validate their concept quickly to meet their fundraising timeline while ensuring healthcare compliance.',
    solution: 'We ran a 2-week Discovery Sprint to define scope, then built the MVP using React Native for cross-platform reach and Node.js for the backend. The app included real-time data sync and a clean, intuitive UI.',
    results: ['$2M seed raised', '1,000+ beta users', '10 week delivery', '4.8★ app rating'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    timeline: '10 weeks',
    teamSize: '4 engineers',
    featured: true,
    testimonial: {
      quote: "Nemvol helped us go from idea to funded startup in under 3 months. Their product-first approach was exactly what we needed.",
      author: "Dr. Amara Obi",
      position: "Co-founder, HealthTrack"
    }
  },
  {
    id: 2,
    title: 'PropFlow',
    category: 'startup',
    client: 'Early-stage Founder',
    industry: 'Real Estate Tech',
    description: 'Property management platform built in 8 weeks, now serving 500+ landlords across 3 countries.',
    fullDescription: 'A solo founder came to us with a vision for simplifying property management. We helped validate the idea through user research, then built a web platform with tenant portals, rent collection, and maintenance tracking.',
    challenge: 'The founder was bootstrapping and needed maximum value from a limited budget while competing with established players.',
    solution: 'We prioritized features ruthlessly during Discovery, focusing on the 20% that would deliver 80% of the value. Built with Next.js for SEO and performance.',
    results: ['500+ active landlords', '8 week delivery', '3 countries', 'Break-even in 6 months'],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    timeline: '8 weeks',
    teamSize: '3 engineers',
    featured: false,
    testimonial: {
      quote: "They treated my product like their own. The MVP was exactly what my users needed—nothing more, nothing less.",
      author: "Tunde Adebayo",
      position: "Founder, PropFlow"
    }
  },
  {
    id: 3,
    title: 'AgencyOS',
    category: 'agency',
    client: 'Digital Marketing Agency',
    industry: 'Marketing Tech',
    description: 'White-label client management platform that improved agency efficiency by 30%.',
    fullDescription: 'A growing digital agency needed a custom solution to manage client projects, reporting, and billing. We built a fully white-labeled platform under NDA with their branding throughout.',
    challenge: 'The agency was losing clients due to poor project visibility and manual reporting. They needed an integrated solution fast.',
    solution: 'We delivered a milestone-based build with weekly demos. The platform includes automated reporting, client portals, and integrations with their existing tools.',
    results: ['30% efficiency gain', '12 week delivery', 'Full white-label', '100% team adoption'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    timeline: '12 weeks',
    teamSize: '5 engineers',
    featured: false,
    testimonial: {
      quote: "AgencyOS transformed how we work. Our team is more productive and clients love the transparency.",
      author: "Sarah Chen",
      position: "Managing Director, BrightPath Digital"
    }
  }
]