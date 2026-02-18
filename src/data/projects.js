import sparkDating from "../assets/Dating-app.png"
import cleanMaster from "../assets/Cleaner-Image.png"
import photographyWeb from "../assets/Photography-web.png"

export const projects = [
  {
    id: 1,
    title: 'Blynque',
    category: 'startup',
    client: 'Blynque Team',
    industry: 'Social Networking',
    link: 'https://blyn-qe.vercel.app/',
    description: 'A modern, high-performance dating app focusing on meaningful connections through real-time interaction.',
    fullDescription: 'Spark is a dating platform designed to minimize "swipe fatigue." It features real-time ice-breaker games, video introductions, and an AI-driven matching algorithm that prioritizes shared interests and values.',
    challenge: 'Building a real-time social app that maintains low latency even with thousands of concurrent users chatting and playing games.',
    solution: 'We utilized Flutter for a seamless mobile experience and a highly scalable backend with Redis for real-time messaging and AWS for media storage.',
    results: ['10k+ active users in first month', 'Average session duration of 15 mins', '99.9% uptime since launch', 'High user retention rates'],
    technologies: ['Flutter', 'Firebase', 'Redis', 'Node.js', ''],
    image: sparkDating,
    timeline: '14 weeks',
    teamSize: '5 engineers',
    featured: true,
    testimonial: {
      quote: "Nemvol delivered a product that exceeded our expectations. Their technical expertise in real-time systems was evident from day one.",
      author: "Monica Geller",
      position: "Product Lead, Social Connect"
    }
  },
  {
    id: 2,
    title: 'Comtranz Global',
    category: 'service',
    client: 'Comtranz Global Ltd',
    industry: 'Home & Office Services',
    link: 'https://www.comtranzglobal.com/',
    description: 'An on-demand cleaning service platform connecting professional cleaners with home and office owners.',
    fullDescription: 'CleanMaster provides a seamless way for users to book and manage professional cleaning services. It includes features like automated scheduling, professional cleaner ratings, and an integrated secure payment system.',
    challenge: 'Creating a trust-based system where both service providers and customers feel secure and can easily communicate building requirements.',
    solution: 'We built a two-sided marketplace with background-checked profiles, a detailed rating system, and an in-app chat for specific cleaning instructions.',
    results: ['500+ service bookings weekly', '4.9/5 average service rating', 'Integrated payment with Stripe', 'User-friendly mobile-first design'],
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Stripe', 'Twilio'],
    image: cleanMaster,
    timeline: '10 weeks',
    teamSize: '3 engineers',
    featured: false,
    testimonial: {
      quote: "The efficiency of the platform has allowed us to scale our cleaning business across three cities in just six months.",
      author: "David Chen",
      position: "Founder, Elite Property Services"
    }
  },
  {
    id: 3,
    title: 'Lucis',
    category: 'agency',
    client: 'Lucis Studio',
    industry: 'Creative Arts',
    link: 'https://lucis-ph.vercel.app/',
    description: 'A premium photography portfolio and client collaboration platform focusing on high-resolution visual storytelling.',
    fullDescription: 'Lucis is a bespoke digital experience for professional photographers. It combines a stunning, minimalist portfolio gallery with a private client proofing area for selecting and commenting on shoot deliverables.',
    challenge: 'Delivering high-resolution images rapidly without compromising page load speeds or the premium feel of the user interface.',
    solution: 'We implemented advanced image optimization techniques and a custom-built gallery engine that uses progressive loading to ensure a silky-smooth browsing experience.',
    results: ['Sub-1s initial page load', 'Elegant, minimalist UI/UX', 'Automated client proofing workflow', 'Seamless high-res delivery'],
    technologies: ['React', 'Framer Motion', 'Cloudinary', 'GraphQL', 'Next.js'],
    image: photographyWeb,
    timeline: '8 weeks',
    teamSize: '2 engineers',
    featured: false,
    testimonial: {
      quote: "Finally, a platform that respects the art of photography. Our clients are consistently impressed by the proofing experience.",
      author: "Elena Rodriguez",
      position: "Creative Director, Lucis Studio"
    }
  }
]
