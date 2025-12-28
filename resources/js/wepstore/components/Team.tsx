import React from 'react';
import { Linkedin, Facebook, X, ArrowUpRight, Instagram } from 'lucide-react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
        name: "Dr. Barns | Barnabas Wepedam Baniyire",
        role: "Founder & CEO | Senior Developer",
        img: "/barns.png",
        socials: {
            linkedin: "https://www.linkedin.com/in/dr-barnabas-baniyire/",
            twitter: "https://x.com/doctor_barns",
            facebook: "https://web.facebook.com/doctorbarns",
            instagram: "https://www.instagram.com/Doctor.barns/",
            snapchat: "https://www.snapchat.com/@doctor.barns"
        }
    },
    {
        name: "Amos Jusu",
        role: "Junior Developer",
        img: "/amosjusu.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            facebook: "#",
            instagram: "#"
        }
    },
    {
        name: "David Bandoh",
        role: "Product Designer & Developer",
        img: "/david.png",
        socials: {
            linkedin: "#",
            twitter: "#",
            facebook: "#",
            instagram: "#"
        }
    }
  ];

  return (
    <section className="bg-accent-light py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
             <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Dedicated Team</div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                <span className="bg-primary text-white px-3 py-0.5 rounded transform -rotate-2 inline-block mr-2">Expert team</span>
                behind this builder
             </h2>
             <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
             </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {members.map((member, i) => (
                <div key={i} className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Full Height Image */}
                    <div className="absolute inset-0">
                        <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating Glass Info Panel */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 overflow-hidden relative transition-all duration-500 group-hover:bg-white/20">
                            
                            {/* Shine Effect on Glass */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold text-white mb-1">
                                    {member.name.includes('|') ? (
                                        <>
                                            <span className="block">{member.name.split('|')[0].trim()}</span>
                                            <span className="block text-base font-sans font-normal opacity-90 mt-1">{member.name.split('|')[1].trim()}</span>
                                        </>
                                    ) : (
                                        member.name
                                    )}
                                </h3>
                                <p className="text-blue-200 font-medium text-sm tracking-wide">{member.role}</p>
                            </div>

                            {/* Socials - Reveal on Hover */}
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                <div className="overflow-hidden">
                                    <div className="pt-5 mt-2 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                        <div className="flex gap-2 flex-wrap">
                                            {member.socials?.linkedin && member.socials.linkedin !== "#" && (
                                                <a 
                                                    href={member.socials.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                            {member.socials?.twitter && member.socials.twitter !== "#" && (
                                                <a 
                                                    href={member.socials.twitter} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                                                    aria-label="X (Twitter)"
                                                >
                                                    <X size={18} />
                                                </a>
                                            )}
                                            {member.socials?.facebook && member.socials.facebook !== "#" && (
                                                <a 
                                                    href={member.socials.facebook} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                                                    aria-label="Facebook"
                                                >
                                                    <Facebook size={18} />
                                                </a>
                                            )}
                                            {member.socials?.instagram && member.socials.instagram !== "#" && (
                                                <a 
                                                    href={member.socials.instagram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                                                    aria-label="Instagram"
                                                >
                                                    <Instagram size={18} />
                                                </a>
                                            )}
                                            {member.socials?.snapchat && member.socials.snapchat !== "#" && (
                                                <a 
                                                    href={member.socials.snapchat} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                                                    aria-label="Snapchat"
                                                    title="Snapchat"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.031c0 .234.195.413.429.413h1.524c2.114 0 3.814 1.678 3.814 3.75 0 2.071-1.7 3.75-3.814 3.75h-1.524c-.234 0-.429.18-.429.413l.003.031c.104 1.628.23 3.654-.299 4.847-1.583 3.545-4.94 3.821-5.93 3.821-.99 0-4.347-.276-5.93-3.821-.529-1.193-.403-3.219-.299-4.847l.003-.031c0-.234-.195-.413-.429-.413H3.814C1.7 16.5 0 14.822 0 12.75c0-2.071 1.7-3.75 3.814-3.75h1.524c.234 0 .429-.18.429-.413l-.003-.031c-.104-1.628-.23-3.654.299-4.847C6.859.069 10.216-.207 11.206-.207zm-5.93 3.821c-.407.92-.497 2.667-.404 4.22l.003.031c.026 1.65 1.138 2.95 2.624 2.95h1.524c2.114 0 3.814 1.678 3.814 3.75 0 2.071-1.7 3.75-3.814 3.75h-1.524c-1.486 0-2.598 1.3-2.624 2.95l-.003.031c-.093 1.553-.003 3.3.404 4.22.99 2.23 3.495 2.405 4.347 2.405.852 0 3.357-.175 4.347-2.405.407-.92.497-2.667.404-4.22l-.003-.031c-.026-1.65-1.138-2.95-2.624-2.95h-1.524c-2.114 0-3.814-1.678-3.814-3.75 0-2.071 1.7-3.75 3.814-3.75h1.524c1.486 0 2.598-1.3 2.624-2.95l.003-.031c.093-1.553.003-3.3-.404-4.22C15.553 1.338 13.048 1.163 12.196 1.163c-.852 0-3.357.175-4.347 2.405z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        {member.socials?.linkedin && member.socials.linkedin !== "#" && (
                                            <a 
                                                href={member.socials.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                                aria-label="View Profile"
                                            >
                                                <ArrowUpRight size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;