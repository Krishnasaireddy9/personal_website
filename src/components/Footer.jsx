import {Github, Linkedin, Box} from 'lucide-react';

export default function Footer(){
  // PASTE YOUR LIVE PROFILE LINKS HERE:
  const socialLinks = [
    [Linkedin, 'LinkedIn', 'https://www.linkedin.com/in/krishna-sai-reddy-b96632245'],
    [Github, 'GitHub', 'https://github.com/Krishnasaireddy9'],
    [Box, 'Hugging Face', 'https://huggingface.co/krishnasai2004']
  ];

  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-5 py-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-10">
      <p>© {new Date().getFullYear()} Alla Krishna Sai Reddy. Built with purpose.</p>
      
      {/* Updated Social Links */}
      <div className="flex gap-4">
        {socialLinks.map(([Icon, label, url]) => (
          <a 
            key={label}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={label} 
            className="transition hover:text-violet-300"
          >
            <Icon size={17}/>
          </a>
        ))}
      </div>
    </footer>
  );
}