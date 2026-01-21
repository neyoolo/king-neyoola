import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Code, Smartphone, Database, Palette, Zap, Cpu, Globe, Rocket } from 'lucide-react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const skills = [
    { name: 'Frontend Development', level: 60, icon: Code, color: '#dc2626', tech: ['React', 'Vue', 'Angular', 'TypeScript'] },
    { name: 'Mobile Development', level: 40, icon: Smartphone, color: '#ef4444', tech: ['React Native', 'Flutter', '', ''] },
    { name: 'Backend Development', level: 85, icon: Database, color: '#f87171', tech: ['Node.js', 'Express js', '', ''] },
    { name: 'UI/UX Design', level: 50, icon: Palette, color: '#fca5a5', tech: ['Figma', 'Adobe XD', '', ''] },
    { name: 'DevOps & Cloud', level: 82, icon: Zap, color: '#dc2626', tech: ['AWS', 'Docker', '', ''] },
    // { name: 'AI & Machine Learning', level: 75, icon: Cpu, color: '#ef4444', tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'] },
    // { name: 'Blockchain', level: 70, icon: Globe, color: '#f87171', tech: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'] },
    { name: 'Performance Optimization', level: 90, icon: Rocket, color: '#fca5a5', tech: ['Web Vitals', 'Lighthouse', 'Bundle Analysis', 'CDN'] },
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: '🚀' },
    { label: 'Years Experience', value: '2+', icon: '⚡' },
    { label: 'Happy Clients', value: '5+', icon: '👽' },
    { label: 'Lines of Code', value: '50K+', icon: '🔥' },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Complex Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />
        
        {/* Floating Plasma Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-red-600/20 to-red-800/20 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                <polygon points="50,1 87,25 87,75 50,99 13,75 13,25" fill="none" stroke="#dc2626" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-7xl mb-8 bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            About Me
          </motion.h2>
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 mx-auto mb-12 rounded-full" />
            <motion.div
              className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full"
              animate={{ x: [-128, 128, -128] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a digital architect who transforms ideas into reality through code. 
            With expertise spanning multiple dimensions of technology, I create solutions 
            that bridge the impossible with the inevitable.
          </p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -10 }}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-red-600/40 hover:border-red-400 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-4xl mb-2 text-red-500 font-mono">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Revolutionary Skills Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl mb-8 text-white">Neural Network</h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              My expertise forms an interconnected web of technologies, each skill amplifying 
              the others to create solutions that transcend traditional boundaries. Hover over 
              each node to explore the depths of my capabilities.
            </p>
            
            <div className="space-y-8">
              {hoveredSkill !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl p-8 border border-red-600/30 backdrop-blur-sm"
                >
                  <h4 className="text-2xl mb-4 text-red-400">{skills[hoveredSkill].name}</h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {skills[hoveredSkill].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/60 rounded-full text-sm text-gray-300 border border-red-600/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white">Mastery Level:</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 glow-effect"
                        initial={{ width: 0 }}
                        animate={{ width: `${skills[hoveredSkill].level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <span className="text-red-500 font-mono">{skills[hoveredSkill].level}%</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* 3D Skills Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            {/* Central Core */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center glow-effect z-20"
              style={{ x: springX, y: springY }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-white" size={32} />
            </motion.div>

            {/* Skill Nodes */}
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  style={{
                    x: hoveredSkill === index ? springX : x,
                    y: hoveredSkill === index ? springY : y,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Connection Line */}
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      width: Math.sqrt(x * x + y * y) + 100, 
                      height: 2,
                      left: -Math.sqrt(x * x + y * y) / 2 - 50,
                      top: -1,
                      transform: `rotate(${Math.atan2(-y, -x) * 180 / Math.PI}deg)`,
                    }}
                  >
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="100%"
                      y2="1"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                    <defs>
                      <linearGradient id="connectionGradient">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor={skill.color} />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Hexagonal Node */}
                  <motion.div
                    className="w-20 h-20 relative cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    }}
                  >
                    {/* Hexagon Background */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <polygon
                        points="50,5 85,25 85,75 50,95 15,75 15,25"
                        fill={`url(#hexGradient${index})`}
                        stroke={skill.color}
                        strokeWidth="2"
                        className={hoveredSkill === index ? 'glow-effect' : ''}
                      />
                      <defs>
                        <linearGradient id={`hexGradient${index}`}>
                          <stop offset="0%" stopColor={`${skill.color}20`} />
                          <stop offset="100%" stopColor={`${skill.color}40`} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon 
                        size={24} 
                        className="text-white z-10"
                        style={{ color: hoveredSkill === index ? skill.color : 'white' }}
                      />
                    </div>

                    {/* Orbit Ring */}
                    <motion.div
                      className="absolute inset-0 border border-red-600/30 rounded-full"
                      style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Skill Label */}
                  <motion.div
                    className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSkill === index ? 1 : 0.7 }}
                  >
                    <div className="text-sm text-white whitespace-nowrap bg-gray-900/80 px-3 py-1 rounded-full border border-red-600/30 backdrop-blur-sm">
                      {skill.name}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Pulse Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-red-600/20 rounded-full"
                style={{
                  width: 100 + i * 100,
                  height: 100 + i * 100,
                  left: `calc(50% - ${50 + i * 50}px)`,
                  top: `calc(50% - ${50 + i * 50}px)`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;