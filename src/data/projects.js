export const projects = [
  {
    id: 1,
    title: 'FinTech Trading Platform',
    category: 'platform',
    client: 'TechVentures Global',
    industry: 'Financial Technology',
    description: 'Enterprise-grade trading platform serving 100,000+ active users with real-time market data and advanced analytics.',
    fullDescription: 'We developed a comprehensive trading platform that revolutionized how TechVentures Global serves their clients. The platform handles millions of transactions daily with sub-millisecond latency, featuring advanced charting tools, real-time market data feeds, and sophisticated risk management systems.',
    challenge: 'The client needed a scalable platform that could handle high-frequency trading while maintaining 99.9% uptime and ensuring regulatory compliance across multiple jurisdictions.',
    solution: 'We built a microservices architecture using React for the frontend and Node.js for the backend, with Redis for caching and PostgreSQL for data persistence. The platform includes real-time WebSocket connections, advanced security measures, and automated compliance reporting.',
    results: ['300% increase in platform efficiency', '99.9% uptime achieved', '50% reduction in trade execution time', '40% increase in user engagement', '25% reduction in operational costs'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'WebSocket', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    timeline: '8 months',
    teamSize: '12 developers',
    budget: '$500K - $1M',
    testimonial: {
      quote: "The platform exceeded our expectations. The team delivered a robust solution that scales with our growing user base.",
      author: "Sarah Johnson",
      position: "CTO, TechVentures Global"
    }
  },
  {
    id: 2,
    title: 'Healthcare Patient Portal',
    category: 'transformation',
    client: 'BioTech Solutions',
    industry: 'Healthcare Technology',
    description: 'HIPAA-compliant patient portal with telemedicine capabilities, serving 25,000+ patients across multiple facilities.',
    fullDescription: 'A comprehensive healthcare platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, medical record access, and prescription management. The system integrates with existing EMR systems and provides a seamless experience for both patients and healthcare professionals.',
    challenge: 'BioTech Solutions needed a HIPAA-compliant platform that could handle telemedicine consultations while integrating with legacy healthcare systems and ensuring patient data security.',
    solution: 'We developed a secure, scalable platform using Next.js and Python, with MongoDB for flexible data storage and WebRTC for video consultations. The system includes end-to-end encryption, role-based access control, and comprehensive audit logging.',
    results: ['85% improvement in user engagement', '60% reduction in administrative overhead', '95% patient satisfaction score', '70% increase in appointment bookings', '45% reduction in no-show rates'],
    technologies: ['Next.js', 'Python', 'MongoDB', 'WebRTC', 'Azure', 'FHIR', 'HL7', 'OAuth 2.0'],
    image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Healthcare+Portal',
    timeline: '12 months',
    teamSize: '15 developers',
    budget: '$750K - $1.5M',
    testimonial: {
      quote: "This platform transformed how we deliver healthcare services. Patient engagement has never been higher.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer, BioTech Solutions"
    }
  },
  {
    id: 3,
    title: 'Enterprise Mobile App',
    category: 'mobile',
    client: 'InnovateScale',
    industry: 'Enterprise Software',
    description: 'Cross-platform mobile application for field service management with offline capabilities and real-time synchronization.',
    fullDescription: 'A comprehensive field service management application that enables technicians to manage work orders, access customer information, and update job status in real-time. The app works seamlessly offline and syncs data when connectivity is restored, ensuring uninterrupted workflow for field teams.',
    challenge: 'InnovateScale needed a mobile solution that could work reliably in areas with poor connectivity while maintaining data consistency and providing real-time updates to management.',
    solution: 'We built a React Native application with offline-first architecture using SQLite for local storage and GraphQL for efficient data synchronization. The app includes GPS tracking, digital signatures, photo capture, and comprehensive reporting features.',
    results: ['450% growth in qualified leads', '40% increase in field productivity', '90% user adoption rate', '35% reduction in paperwork', '50% faster job completion'],
    technologies: ['React Native', 'GraphQL', 'SQLite', 'Firebase', 'Redux', 'Expo', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    timeline: '6 months',
    teamSize: '8 developers',
    budget: '$250K - $500K',
    testimonial: {
      quote: "The mobile app revolutionized our field operations. Our technicians are more efficient and customers are happier.",
      author: "Lisa Rodriguez",
      position: "Operations Director, InnovateScale"
    }
  }
]