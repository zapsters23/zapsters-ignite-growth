import { useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

// Generate 50 unique testimonials
const generateTestimonials = () => {
  const names = [
    'Anbu Selvan', 'Thamizh Selvi', 'Karthik Murugan', 'Kavitha Sundaram', 'Senthil Kumar',
    'Meenakshi Ammal', 'Rajesh Kannan', 'Lakshmi Narayanan', 'Priya Anand', 'Vijay Kumar',
    'Divya Bharathi', 'Surya Prakash', 'Aishwarya Rajesh', 'Bala Murugan', 'Deepa Venkat',
    'Ganesh Venkatraman', 'Hema Malini', 'Iniyan Karunakaran', 'Jothi Lakshmi', 'Kamal Haasan',
    'Lalitha Kumari', 'Madhan Karky', 'Nithya Menen', 'Oviya Helen', 'Prashanth Neel',
    'Ramya Krishnan', 'Santhosh Narayanan', 'Trisha Krishnan', 'Udhaya Kumar', 'Vairamuthu',
    'Yamini Bhaskar', 'Arjun Sarja', 'Bhavana Menon', 'Chitra Lakshmanan', 'Dhanush Rajamani',
    'Easwari Rao', 'Fazil Mannan', 'Gayathri Raghuram', 'Harish Kalyan', 'Iniya Selvam',
    'Jayam Ravi', 'Keerthi Suresh', 'Lokesh Kanagaraj', 'Mumtaj Sorcar', 'Nassar Abdulla',
    'Parvathy Thiruvothu', 'Radha Ravi', 'Saranya Ponvannan', 'Thalapathy Vijay', 'Urvashi Dholakia'
  ];

  const companies = [
    'TechCorp', 'InnovateLab', 'DataFlow Inc', 'Nexus Systems', 'Quantum Solutions',
    'Apex Digital', 'Horizon Tech', 'Fusion Innovations', 'Elevate Software', 'Pinnacle AI',
    'Catalyst Dynamics', 'Spectrum Analytics', 'Vertex Computing', 'Pulse Networks', 'Eclipse Technologies',
    'Orbit Platforms', 'Zenith Designs', 'Prism Data', 'Lumina Interactive', 'Nova Ventures',
    'Axiom Enterprises', 'Beacon Systems', 'Crest Solutions', 'Delta Innovations', 'Echo Technologies',
    'Frontier Digital', 'Gateway Platforms', 'Helix Software', 'Insight Analytics', 'Junction Networks',
    'Kinetic Solutions', 'Lighthouse Tech', 'Meridian Systems', 'Nimbus Computing', 'Oasis Digital',
    'Phoenix Innovations', 'Quantum Leap', 'Radiant Technologies', 'Sapphire Platforms', 'Tempest Solutions',
    'Unity Software', 'Vortex Systems', 'Wavelength Tech', 'Xenon Innovations', 'Yellowstone Digital',
    'Zephyr Networks', 'Alpine Solutions', 'Borealis Systems', 'Cascade Technologies', 'Denali Platforms'
  ];

  const roles = [
    'CEO', 'CTO', 'Product Lead', 'Founder', 'Director of Engineering',
    'VP of Product', 'Head of Design', 'Lead Developer', 'Marketing Director', 'COO',
    'UX Director', 'Technical Architect', 'Project Manager', 'Innovation Lead', 'Design Manager',
    'Software Architect', 'IT Director', 'Data Scientist', 'DevOps Lead', 'Frontend Lead',
    'Backend Lead', 'Full Stack Developer', 'UI/UX Designer', 'Product Owner', 'Scrum Master',
    'QA Manager', 'Systems Architect', 'Cloud Engineer', 'Mobile Lead', 'AI Specialist',
    'Blockchain Developer', 'Security Engineer', 'Network Administrator', 'Database Administrator', 'Business Analyst',
    'Solutions Architect', 'Technical Lead', 'Growth Hacker', 'Digital Strategist', 'Content Manager',
    'Operations Manager', 'Customer Success Manager', 'Sales Director', 'Business Development', 'Strategic Partnerships',
    'Research Lead', 'Innovation Consultant', 'Technology Advisor', 'Startup Mentor', 'Investor'
  ];

  const testimonialContents = [
    'Zapsters transformed our outdated platform into a modern, high-performing application. Their attention to detail and technical expertise is unmatched. Our user engagement increased by 200%!',
    'Working with Zapsters was a game-changer for our startup. They delivered a beautiful, scalable solution that helped us secure our Series A funding. The team\'s professionalism is exceptional.',
    'The internship program at Zapsters is phenomenal. The graduates they produce are work-ready from day one. We\'ve hired multiple interns and they\'ve all exceeded our expectations.',
    'Zapsters delivered our project ahead of schedule and under budget. The quality of their work is outstanding, and they were responsive to all our feedback throughout the process.',
    'Our e-commerce site redesign by Zapsters resulted in a 150% increase in conversions. Their UI/UX expertise made all the difference in creating an intuitive shopping experience.',
    'The cybersecurity audit conducted by Zapsters uncovered critical vulnerabilities we had missed. Their detailed remediation plan helped us secure our systems effectively.',
    'Zapsters built our mobile app from concept to launch in just 3 months. The user feedback has been overwhelmingly positive, and we\'re already planning our next project with them.',
    'The AI solution developed by Zapsters has automated 70% of our manual data processing tasks. The ROI was evident within the first month of implementation.',
    'Our collaboration with Zapsters on our brand redesign exceeded all expectations. They captured our vision perfectly and delivered a cohesive identity system that resonates with our audience.',
    'Zapsters helped us migrate our legacy system to a modern cloud architecture. The transition was seamless, and we\'ve seen significant improvements in performance and reliability.',
    'The custom CRM solution from Zapsters has streamlined our sales process and improved team coordination. It\'s like they built exactly what we needed before we even knew we needed it.',
    'Zapsters\'s workshop on digital transformation was eye-opening for our executive team. Their strategic insights have guided our technology roadmap for the next three years.',
    'The data visualization dashboard created by Zapsters has transformed how we make decisions. Complex metrics are now accessible to everyone in our organization.',
    'Our partnership with Zapsters has been instrumental in our growth. They\'ve become an extension of our team, consistently delivering high-quality solutions that drive our business forward.',
    'Zapsters revamped our entire digital presence, from website to social media. The cohesive strategy has significantly improved our brand recognition and lead generation.',
    'The accessibility audit and improvements made by Zapsters have made our platform inclusive for all users. Their commitment to universal design principles is commendable.',
    'Zapsters implemented an IoT solution that has revolutionized our manufacturing process. Real-time monitoring and predictive maintenance have reduced downtime by 40%.',
    'The knowledge transfer from Zapsters to our internal team was comprehensive and well-structured. They didn\'t just build a solution; they empowered us to maintain and extend it.',
    'Zapsters\'s agile development approach kept us involved throughout the project. Their transparency and regular updates made the complex development process understandable and manageable.',
    'The performance optimization by Zapsters reduced our page load times by 60%. The impact on user satisfaction and SEO has been substantial.',
    'Zapsters helped us launch our MVP in record time, allowing us to validate our concept and secure additional funding. Their strategic guidance was as valuable as their technical execution.',
    'The custom e-learning platform developed by Zapsters has transformed our training programs. Engagement is up, and completion rates have increased by 80%.',
    'Zapsters\'s integration of our disparate systems has eliminated data silos and improved operational efficiency across departments. The ROI has exceeded our projections.',
    'The UX research conducted by Zapsters provided invaluable insights into our users\'s needs. The resulting product improvements have significantly enhanced customer satisfaction.',
    'Zapsters implemented a robust security framework that has given us and our clients peace of mind. Their proactive approach to potential vulnerabilities is impressive.',
    'The scalable architecture designed by Zapsters has supported our growth from 10,000 to 1 million users without any performance issues. Their foresight saved us from costly rewrites.',
    'Zapsters\'s development of our internal tools has improved team productivity by 35%. The intuitive interfaces and streamlined workflows have been game-changers for our operations.',
    'The blockchain solution implemented by Zapsters has brought unprecedented transparency to our supply chain. Our customers appreciate the ability to verify product authenticity.',
    'Zapsters\'s redesign of our checkout process reduced cart abandonment by 25%. Their attention to conversion optimization has directly impacted our bottom line.',
    'The custom reporting system developed by Zapsters has automated what used to take our team days to compile. The time savings and improved accuracy have been transformative.',
    'Zapsters helped us implement a comprehensive DevOps pipeline that has reduced our deployment time from days to minutes. The improvement in our development cycle is remarkable.',
    'The voice interface designed by Zapsters for our application has received praise for its natural interactions and accessibility benefits. They\'re truly at the forefront of emerging technologies.',
    'Zapsters\'s development of our customer portal has reduced support tickets by 30%. The self-service capabilities have improved customer satisfaction while reducing our operational costs.',
    'The predictive analytics model developed by Zapsters has improved our inventory management accuracy by 40%. The reduction in stockouts and overstock situations has had a significant financial impact.',
    'Zapsters implemented a comprehensive testing strategy that has dramatically reduced bugs in production. Our release cycles are now faster and more reliable.',
    'The localization framework built by Zapsters allowed us to expand into five new markets in record time. Their global perspective was evident in every aspect of the implementation.',
    'Zapsters\'s API design and documentation have made integration with our partners seamless. The developer experience they created has been praised by our entire ecosystem.',
    'The recommendation engine developed by Zapsters has increased our average order value by 28%. Their understanding of both data science and user psychology delivered exceptional results.',
    'Zapsters helped us achieve GDPR and CCPA compliance with minimal disruption to our operations. Their expertise in privacy regulations saved us from potential legal issues.',
    'The microservices architecture implemented by Zapsters has made our platform more resilient and easier to maintain. Individual teams can now deploy independently, accelerating our development.',
    'Zapsters\'s redesign of our mobile app increased user retention by 45%. Their focus on core user journeys and performance optimization made all the difference.',
    'The knowledge base system developed by Zapsters has become the single source of truth for our organization. Information sharing and onboarding have never been more efficient.',
    'Zapsters implemented a comprehensive monitoring solution that has allowed us to identify and resolve issues before they impact users. Our system reliability has never been better.',
    'The design system created by Zapsters has accelerated our product development and ensured consistency across all our digital touchpoints. It\'s been a foundational investment.',
    'Zapsters\'s implementation of our subscription billing system has reduced revenue leakage and improved financial reporting. The automation has been flawless.',
    'The virtual event platform developed by Zapsters enabled us to pivot during the pandemic. The engagement features they built exceeded what many established platforms offer.',
    'Zapsters helped us implement a zero-trust security model that has protected us from increasingly sophisticated threats. Their ongoing security assessments give us confidence in our defenses.',
    'The content management system customized by Zapsters has empowered our marketing team to create and publish without IT dependencies. The workflow improvements have accelerated our content strategy.',
    'Zapsters\'s development of our internal communication platform has improved collaboration across our global offices. The cultural impact has been as significant as the technological one.',
    'The AR feature developed by Zapsters for our retail app has increased conversion rates by 35%. They turned an experimental technology into a practical business tool.',
    'Zapsters implemented a comprehensive analytics framework that has given us visibility into user behavior we never had before. Data-driven decisions are now the norm across our organization.'
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const nameIndex = i % names.length;
    const companyIndex = i % companies.length;
    const roleIndex = i % roles.length;
    const contentIndex = i % testimonialContents.length;
    
    return {
      id: i + 1,
      name: names[nameIndex],
      role: `${roles[roleIndex]} at ${companies[companyIndex]}`,
      content: testimonialContents[contentIndex],
      rating: 5
    };
  });
};

const testimonials = generateTestimonials();

const InfiniteTestimonials = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the testimonials to create a seamless loop
  const allTestimonials = [...testimonials, ...testimonials];
  
  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Slower when hovering, faster when not hovering
    const scrollSpeed = isHovering ? 0.5 : 2; // pixels per frame
    let scrollPos = scrollerRef.current.scrollLeft; // Start from current position
    let animationFrameId: number;
    
    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollPos += scrollSpeed;
      
      // Reset position when we've scrolled through the first set of testimonials
      if (scrollPos >= scrollerRef.current.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollerRef.current.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);
  
  return (
    <div 
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={scrollerRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          transition: 'scroll-behavior 0.5s ease'
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[350px]"
          >
            <Card className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-3 group-hover:scale-110 transition-transform shadow-lg">
                <Quote className="w-full h-full text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-purple-500 text-purple-500"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg leading-relaxed text-white">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-purple-400/50">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400/50 bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays to indicate infinite scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
};

export default InfiniteTestimonials;