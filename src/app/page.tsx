"use client";

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CpuChipIcon,
  CreditCardIcon,
  StarIcon,
  ChevronRightIcon,
  SparklesIcon,

} from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ChatWidgets from "./components/ChatWidgets";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {

  interface BlogPosts {
  title: string;
  slug: string;
  content: string;
  featureImage: string;
  category?: {
    name: string;
  };
}

const [blogs, setBlogs] = useState<BlogPosts[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.20.156:5000/api/blogs",
          {
            withCredentials: true,
          }
        );

        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

            {/* Hero Section - Dark Futuristic Design */}
      <section className="relative h-auto overflow-hidden py-8">
        {/* Dark Cyberpunk Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(56, 133, 122, 0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(56, 133, 122, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'matrix-scroll 8s linear infinite'
            }}></div>
          </div>

          {/* Neon Glowing Orbs */}
          <div className="absolute inset-0">
            {/* Large Primary Teal Neon Orb */}
            <div className="absolute top-16 left-16 w-80 h-80 rounded-full opacity-40 animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, rgba(56, 133, 122, 0.8) 0%, rgba(56, 133, 122, 0.4) 20%, rgba(56, 133, 122, 0.2) 40%, rgba(56, 133, 122, 0.05) 70%, transparent 100%)',
                   filter: 'blur(40px)',
                   animationDuration: '4s'
                 }}></div>
            
            {/* Medium Orange Neon Orb */}
            <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full opacity-35 animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, rgba(255, 147, 76, 0.8) 0%, rgba(255, 147, 76, 0.4) 20%, rgba(255, 147, 76, 0.2) 40%, rgba(255, 147, 76, 0.05) 70%, transparent 100%)',
                   filter: 'blur(30px)',
                   animationDuration: '6s',
                   animationDelay: '1s'
                 }}></div>
            
            {/* Small Floating Neon Orbs */}
            <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full opacity-25 animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, rgba(56, 133, 122, 0.6), rgba(255, 147, 76, 0.3), transparent)',
                   filter: 'blur(25px)',
                   animationDuration: '7s',
                   animationDelay: '2s'
                 }}></div>
          </div>

          {/* Cyberpunk Geometric Elements */}
          <div className="absolute inset-0">
            {/* Glowing Hexagons */}
            <div className="absolute top-20 right-32 w-20 h-20 opacity-60 animate-pulse" 
                 style={{ 
                   background: `linear-gradient(135deg, rgba(56, 133, 122, 0.8), rgba(56, 133, 122, 0.4))`,
                   clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                   filter: 'drop-shadow(0 0 20px rgba(56, 133, 122, 0.8))',
                   animationDuration: '3s'
                 }}></div>
            
            <div className="absolute bottom-32 left-32 w-16 h-16 opacity-50 animate-pulse" 
                 style={{ 
                   background: `linear-gradient(135deg, rgba(255, 147, 76, 0.8), rgba(255, 147, 76, 0.4))`,
                   clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                   filter: 'drop-shadow(0 0 15px rgba(255, 147, 76, 0.8))',
                   animationDuration: '4s',
                   animationDelay: '1s'
                 }}></div>

            {/* Futuristic Triangles */}
            <div className="absolute top-1/2 left-20 w-12 h-12 opacity-40 animate-pulse" 
                 style={{ 
                   background: `linear-gradient(45deg, rgba(56, 133, 122, 0.7), transparent)`,
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   filter: 'drop-shadow(0 0 10px rgba(56, 133, 122, 0.6))',
                   animationDuration: '5s'
                 }}></div>
          </div>

          {/* Holographic UI Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-16 right-16 w-12 h-12 rounded-2xl rotate-12 opacity-70 animate-spin border-2 border-cyan-400/60" 
                 style={{ 
                   background: 'rgba(56, 133, 122, 0.2)',
                   backdropFilter: 'blur(10px)',
                   boxShadow: '0 0 30px rgba(56, 133, 122, 0.6), inset 0 0 30px rgba(56, 133, 122, 0.1)',
                   animationDuration: '8s'
                 }}></div>
            
            <div className="absolute bottom-16 left-16 w-10 h-10 rounded-full opacity-60 animate-bounce border-2 border-orange-400/60" 
                 style={{ 
                   background: 'rgba(255, 147, 76, 0.2)',
                   backdropFilter: 'blur(10px)',
                   boxShadow: '0 0 25px rgba(255, 147, 76, 0.6), inset 0 0 25px rgba(255, 147, 76, 0.1)',
                   animationDuration: '4s'
                 }}></div>
            
            <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-lg rotate-45 opacity-50 animate-pulse border border-cyan-300/50" 
                 style={{ 
                   background: 'rgba(56, 133, 122, 0.15)',
                   backdropFilter: 'blur(8px)',
                   boxShadow: '0 0 20px rgba(56, 133, 122, 0.4)',
                   animationDuration: '6s',
                   animationDelay: '1s'
                 }}></div>
          </div>

          {/* Scanning Lines Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-ping" 
                   style={{ 
                     top: '20%',
                     animationDuration: '3s',
                     filter: 'blur(1px)'
                   }}></div>
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-25 animate-ping" 
                   style={{ 
                     top: '70%',
                     animationDuration: '4s',
                     animationDelay: '1s',
                     filter: 'blur(1px)'
                   }}></div>
            </div>
          </div>

          {/* Digital Grid Overlay */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="neonLine1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38857a" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38857a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38857a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="neonLine2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF934C" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FF934C" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF934C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M10,10 Q50,30 90,10" stroke="url(#neonLine1)" strokeWidth="1" fill="none" className="animate-pulse" 
                    style={{ 
                      animationDuration: '4s',
                      filter: 'drop-shadow(0 0 5px rgba(56, 133, 122, 0.8))'
                    }} />
              <path d="M90,90 Q50,70 10,90" stroke="url(#neonLine2)" strokeWidth="1" fill="none" className="animate-pulse" 
                    style={{ 
                      animationDuration: '5s',
                      animationDelay: '1s',
                      filter: 'drop-shadow(0 0 5px rgba(255, 147, 76, 0.8))'
                    }} />
              <path d="M10,50 Q30,25 50,50 Q70,75 90,50" stroke="url(#neonLine1)" strokeWidth="0.8" fill="none" className="animate-pulse" 
                    style={{ 
                      animationDuration: '6s',
                      animationDelay: '2s',
                      filter: 'drop-shadow(0 0 3px rgba(56, 133, 122, 0.6))'
                    }} />
            </svg>
          </div>

          {/* Particle Effects */}
          <div className="absolute inset-0">
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  background: i % 2 === 0 ? 'rgba(56, 133, 122, 0.6)' : 'rgba(255, 147, 76, 0.6)',
                  boxShadow: i % 2 === 0 ? '0 0 10px rgba(56, 133, 122, 0.8)' : '0 0 10px rgba(255, 147, 76, 0.8)',
                  animationDuration: (Math.random() * 3 + 2) + 's',
                  animationDelay: Math.random() * 2 + 's'
                }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes matrix-scroll {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Futuristic Badge */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-lg blur-md animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="relative inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/90 backdrop-blur-md border-2 border-cyan-400/40 rounded-lg shadow-2xl">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" 
                     style={{ 
                       backgroundColor: '#FF934C',
                       boxShadow: '0 0 10px rgba(255, 147, 76, 0.8)'
                     }}></div>
                <SparklesIcon className="w-4 h-4" style={{ color: '#FF934C' }} />
                <span className="text-cyan-100 font-medium text-xs tracking-wider uppercase" 
                      style={{ textShadow: '0 0 10px rgba(56, 133, 122, 0.5)' }}>
                  Innovative Software Solutions
                </span>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" 
                     style={{ 
                       backgroundColor: '#38857a',
                       boxShadow: '0 0 10px rgba(56, 133, 122, 0.8)'
                     }}></div>
            </div>
            </div>
          </div>

          {/* Cyberpunk Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Futuristic Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 text-center lg:text-left space-y-4">
              {/* Holographic Content Card */}
              <div className="relative">
                {/* Neon Glow Background Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full blur-lg animate-pulse" 
                     style={{ 
                       background: 'radial-gradient(circle, rgba(255, 147, 76, 0.6), transparent)',
                       animationDuration: '3s'
                     }}></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full blur-lg animate-pulse" 
                     style={{ 
                       background: 'radial-gradient(circle, rgba(56, 133, 122, 0.6), transparent)',
                       animationDuration: '4s',
                       animationDelay: '1s'
                     }}></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/40 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl p-5 border border-cyan-400/30 shadow-2xl overflow-hidden" 
                     style={{ boxShadow: '0 0 50px rgba(56, 133, 122, 0.3), inset 0 0 50px rgba(56, 133, 122, 0.1)' }}>
                  
                  {/* Cyberpunk Header with Neon Effects */}
                  <div className="relative mb-4">
                    {/* Neon Accent Lines */}
                    <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent animate-pulse" 
                         style={{ boxShadow: '0 0 10px rgba(255, 147, 76, 0.8)' }}></div>
                    <div className="absolute -top-2 right-0 w-6 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent animate-pulse" 
                         style={{ animationDelay: '0.5s', boxShadow: '0 0 8px rgba(56, 133, 122, 0.8)' }}></div>
                    
                    <h1 className="relative">
                      {/* Futuristic Typography with Neon Glow */}
                      <div className="space-y-1">
                        {/* Collaborate */}
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-transparent rounded blur-sm"></div>
                          <span className="relative text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight" 
                                style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
                            Collaborate
                          </span>
                          <div className="absolute -right-2 top-1 w-2 h-2 rounded-full animate-ping" 
                               style={{ 
                                 backgroundColor: '#FF934C',
                                 boxShadow: '0 0 15px rgba(255, 147, 76, 0.8)'
                               }}></div>
                        </div>
                        
                        {/* Innovate */}
                        <div className="relative inline-block ml-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent rounded blur-sm"></div>
                          <span className="relative text-2xl md:text-3xl lg:text-4xl font-black tracking-tight" 
                                style={{ 
                                  color: '#38857a',
                                  textShadow: '0 0 20px rgba(56, 133, 122, 0.8)'
                                }}>
                            Innovate.
                          </span>
                          <div className="absolute -right-1 -top-1 w-1.5 h-1.5 rounded-full animate-bounce" 
                               style={{ 
                                 backgroundColor: '#38857a',
                                 boxShadow: '0 0 10px rgba(56, 133, 122, 0.8)',
                                 animationDelay: '0.5s'
                               }}></div>
                        </div>
                        
                        {/* Build */}
                        <div className="relative inline-block ml-8">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-transparent rounded blur-sm"></div>
                          <span className="relative text-2xl md:text-3xl lg:text-4xl font-black text-gray-200 tracking-tight" 
                                style={{ textShadow: '0 0 15px rgba(156, 163, 175, 0.5)' }}>
                            Build.
                          </span>
                          <div className="absolute -left-2 top-0 w-1 h-1 rounded-full animate-pulse" 
                               style={{ 
                                 backgroundColor: '#FF934C',
                                 boxShadow: '0 0 8px rgba(255, 147, 76, 0.8)',
                                 animationDelay: '1s'
                               }}></div>
                        </div>
                      </div>

                      {/* Neon Underline Effect */}
                      <div className="mt-2 flex space-x-2">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent animate-pulse" 
                             style={{ boxShadow: '0 0 8px rgba(255, 147, 76, 0.6)' }}></div>
                        <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse" 
                             style={{ animationDelay: '0.3s', boxShadow: '0 0 6px rgba(56, 133, 122, 0.6)' }}></div>
                        <div className="w-4 h-0.5 bg-gradient-to-r from-gray-400 to-transparent animate-pulse" 
                             style={{ animationDelay: '0.6s', boxShadow: '0 0 4px rgba(156, 163, 175, 0.6)' }}></div>
                      </div>
                    </h1>
                  </div>

                  {/* Holographic Description */}
                  <div className="relative">
                    {/* Cyberpunk Quote Design */}
                    <div className="absolute -left-3 -top-2 text-3xl font-serif opacity-30" 
                         style={{ 
                           color: '#FF934C',
                           textShadow: '0 0 15px rgba(255, 147, 76, 0.6)'
                         }}>
                      &ldquo;
                    </div>
                    
                    {/* Holographic Content Box */}
                    <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 shadow-lg" 
                         style={{ boxShadow: '0 0 30px rgba(56, 133, 122, 0.2), inset 0 0 30px rgba(56, 133, 122, 0.05)' }}>
                      
                      {/* Neon Corner Elements */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-orange-400/60 rounded-tl" 
                           style={{ boxShadow: '0 0 10px rgba(255, 147, 76, 0.4)' }}></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400/60 rounded-br" 
                           style={{ boxShadow: '0 0 10px rgba(56, 133, 122, 0.4)' }}></div>
                      
                      {/* Enhanced Text with Neon Highlights */}
                      <div className="relative">
                        <div className="absolute -left-1 top-0 w-0.5 h-full bg-gradient-to-b from-orange-400 via-cyan-400 to-gray-400 rounded-full" 
                             style={{ boxShadow: '0 0 10px rgba(56, 133, 122, 0.6)' }}></div>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed pl-4 font-medium">
                          <span className="relative">
                            We provide{' '}
                            <span className="relative inline-block">
                              <span className="font-semibold" 
                                    style={{ 
                                      color: '#38857a',
                                      textShadow: '0 0 10px rgba(56, 133, 122, 0.6)'
                                    }}>cutting-edge</span>
                              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/70 to-transparent block" 
                                    style={{ boxShadow: '0 0 5px rgba(56, 133, 122, 0.6)' }}></span>
                            </span>
                            {' '}software development services to help businesses stay ahead in today&apos;s{' '}
                            <span className="relative inline-block">
                              <span className="font-semibold" 
                                    style={{ 
                                      color: '#FF934C',
                                      textShadow: '0 0 10px rgba(255, 147, 76, 0.6)'
                                    }}>fast-paced</span>
                              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400/70 to-transparent block" 
                                    style={{ boxShadow: '0 0 5px rgba(255, 147, 76, 0.6)' }}></span>
                            </span>
                            {' '}digital world.
                          </span>
                        </p>
                      </div>
                      
                      {/* Glowing Data Points */}
                      <div className="absolute -right-2 -bottom-2 flex space-x-1">
                        <div className="w-2 h-2 rounded-full animate-pulse" 
                             style={{ 
                               backgroundColor: 'rgba(255, 147, 76, 0.8)',
                               boxShadow: '0 0 8px rgba(255, 147, 76, 0.8)'
                             }}></div>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" 
                             style={{ 
                               backgroundColor: 'rgba(56, 133, 122, 0.8)',
                               boxShadow: '0 0 6px rgba(56, 133, 122, 0.8)',
                               animationDelay: '0.3s'
                             }}></div>
                        <div className="w-1 h-1 rounded-full animate-pulse" 
                             style={{ 
                               backgroundColor: 'rgba(156, 163, 175, 0.8)',
                               boxShadow: '0 0 4px rgba(156, 163, 175, 0.8)',
                               animationDelay: '0.6s'
                             }}></div>
                      </div>
                    </div>

                    <div className="absolute -right-3 -bottom-2 text-3xl font-serif opacity-30" 
                         style={{ 
                           color: '#38857a',
                           textShadow: '0 0 15px rgba(56, 133, 122, 0.6)'
                         }}>
                      &rdquo;
                    </div>
                  </div>
                </div>
              </div>

              {/* Cyberpunk CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity" 
                       style={{ boxShadow: '0 0 30px rgba(56, 133, 122, 0.6)' }}></div>
                  <Link
                    href="/contact"
                    className="relative group text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 border border-cyan-400/30"
                    style={{ 
                      boxShadow: '0 0 20px rgba(56, 133, 122, 0.4), inset 0 0 20px rgba(56, 133, 122, 0.1)',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    <span className="flex items-center justify-center">
                      Discover More
                      <RocketLaunchIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Holographic Image Container - Takes 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 rounded-xl blur-xl animate-pulse" 
                   style={{ 
                     background: 'radial-gradient(circle, rgba(255, 147, 76, 0.3), rgba(56, 133, 122, 0.3), transparent)',
                     animationDuration: '6s'
                   }}></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 border border-cyan-400/40 shadow-2xl" 
                   style={{ boxShadow: '0 0 40px rgba(56, 133, 122, 0.3), inset 0 0 40px rgba(56, 133, 122, 0.1)' }}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-cyan-400/20 rounded-lg blur-md"></div>
                  <Image
                    src="/Group 12.png"
                    alt="Scriza Professional Services"
                    width={350}
                    height={280}
                    className="relative w-full h-auto rounded-lg shadow-lg border border-cyan-400/30"
                    style={{ 
                      filter: 'brightness(1.1) contrast(1.2)',
                      boxShadow: '0 0 30px rgba(56, 133, 122, 0.2)'
                    }}
                    priority
                  />
              </div>
              </div>
              </div>
            </div>
          </div>

        {/* Chat Widgets */}
        <ChatWidgets />
      </section>

      {/* What We Offer Section - Compact Premium Design */}
      <section className="relative py-12 overflow-hidden">
        {/* Sophisticated Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-white">
          {/* Premium Mesh Gradient */}
        <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-16 left-16 w-48 h-48 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 147, 76, 0.12), transparent 70%)' }}></div>
              <div className="absolute bottom-16 right-16 w-56 h-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(56, 133, 122, 0.12), transparent 70%)' }}></div>
          </div>
            </div>

          {/* Unique Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            </div>

          {/* Premium Floating Elements */}
          <div className="absolute top-12 right-12 w-10 h-10 bg-white/40 backdrop-blur-sm rounded-xl rotate-45 shadow-lg border border-white/60"></div>
          <div className="absolute bottom-12 left-12 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full shadow-lg border border-white/50"></div>
            </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Badge Design */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-teal-600/20 rounded-xl blur-lg"></div>
              <div className="relative inline-flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-lg border-2 border-white/60 rounded-xl shadow-lg">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF934C' }}></div>
                <span className="text-slate-800 font-semibold text-xs tracking-wider uppercase">
                  What We Offer
              </span>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#38857a' }}></div>
              </div>
            </div>
          </div>

          {/* Compact Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            {/* Enhanced Image Container */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-teal-600/15 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-xl">
                  <div className="relative max-w-xs mx-auto">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/10 to-teal-600/10 rounded-xl blur-lg"></div>
                    <Image
                      src="/amico.png"
                      alt="Business Analytics and Solutions"
                      width={300}
                      height={260}
                      className="relative w-full h-auto rounded-xl shadow-md border border-white/40"
                      priority
                    />
              </div>
            </div>
            </div>
          </div>

            {/* Compact Content Card */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-xl space-y-5">
                  {/* Enhanced Heading */}
                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-1 h-full rounded-full bg-gradient-to-b from-orange-400 to-teal-600"></div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 leading-tight tracking-tight pl-5">
                The best solutions for your business - what we do.
              </h2>
            </div>

                  {/* Compact Quote Card */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 rounded-xl blur-lg"></div>
                    <div className="relative bg-white/80 backdrop-blur-md border-2 border-white/70 rounded-xl p-4 shadow-lg">
                      <div className="absolute top-2 left-2 text-2xl font-serif opacity-30" style={{ color: '#FF934C' }}>
                        &ldquo;
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pt-4">
                        30+ Years of Global Expertise in Business & Technology
                  Consulting. Trusted Partner to 5k+ Clients Worldwide.
                  Let&apos;s Create Your Digital Transformation Timeline with
                        Experience & Innovation.
                      </p>
                      <div className="absolute bottom-2 right-2 text-2xl font-serif opacity-30" style={{ color: '#38857a' }}>
                        &rdquo;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Software Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/15 to-teal-700/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-lg border-2 border-white/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl blur-md opacity-50"></div>
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
                      <CodeBracketIcon className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#38857a' }}>
                    Services
                  </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1">
                    Software Development
                  </h3>
                </div>
              </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#38857a' }}></div>
                  <p className="text-slate-600 leading-relaxed text-xs pl-3">
                We leverage tried and tested methodologies to offer bespoke
                software development solutions. The competitively priced
                technology products are created for both large and small
                enterprises across various industry verticals.
              </p>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-orange-500/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-lg border-2 border-white/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl blur-md opacity-50"></div>
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 shadow-md">
                      <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#FF934C' }}>
                    Services
                  </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1">
                    Mobile Application Development
                  </h3>
                </div>
              </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#FF934C' }}></div>
                  <p className="text-slate-600 leading-relaxed text-xs pl-3">
                With 12+ years of industry experience, we have become
                specialists in sophisticated iOS and Android mobile application
                development. Partner with us and accelerate the growth of your
                enterprises beyond your imagination.
              </p>
                </div>
              </div>
            </div>

            {/* Virtual Developer */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/15 to-teal-700/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-lg border-2 border-white/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl blur-md opacity-50"></div>
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#38857a' }}>
                    Services
                  </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1">
                    Virtual Developer
                  </h3>
                </div>
              </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#38857a' }}></div>
                  <p className="text-slate-600 leading-relaxed text-xs pl-3">
                Need a developer who focuses on your key business outcomes?
                We&apos;d love to help you streamline your business. Talk to one
                of our specialists and get a trusted and highly experienced
                virtual developer for your projects.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Compact Professional Design */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          {/* Premium Gradient Mesh */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#38857a_1px,transparent_1px),linear-gradient(to_bottom,#38857a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          </div>

          {/* Professional Gradient Orbs */}
          <div className="absolute top-12 left-12 w-40 h-40 rounded-full blur-3xl opacity-8" style={{ background: 'radial-gradient(circle, rgba(56, 133, 122, 0.3), transparent 70%)' }}></div>
          <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full blur-3xl opacity-6" style={{ background: 'radial-gradient(circle, rgba(255, 147, 76, 0.3), transparent 70%)' }}></div>
          </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section Image - Enhanced Large Display */}
          <div className="text-center mb-12">
            <div className="relative max-w-4xl mx-auto">
              {/* Advanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-400/20 rounded-3xl blur-3xl transform rotate-1"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/15 to-teal-600/15 rounded-3xl blur-2xl transform -rotate-1"></div>
              
              {/* Premium Glass Container */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/70 shadow-2xl overflow-visible">
                {/* Inner Glow Effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl blur-xl"></div>
                
                {/* Enhanced Image Container */}
                <div className="relative z-10 p-4">
                  {/* Floating Shadow Elements - Adjusted to not overflow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/15 via-orange-400/15 to-teal-600/15 rounded-2xl blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-400/10 to-teal-600/10 rounded-xl blur-lg"></div>
                  
                  {/* Premium Image Frame */}
                  <div className="relative bg-gradient-to-br from-white/80 to-white/60 rounded-2xl p-3 shadow-xl border border-white/80 z-20">
                    <Image
                      src="/Rectangle 33.png"
                      alt="Team Collaboration"
                      width={900}
                      height={450}
                      className="w-full h-auto rounded-xl shadow-2xl border-2 border-white/60 transform hover:scale-[1.01] transition-all duration-500 relative z-30"
                      priority
                    />
                    
                    {/* Corner Accent Elements - Positioned inside the frame */}
                    <div className="absolute top-5 left-5 w-4 h-4 bg-gradient-to-br from-teal-600/60 to-transparent rounded-full z-40"></div>
                    <div className="absolute top-5 right-5 w-4 h-4 bg-gradient-to-bl from-orange-400/60 to-transparent rounded-full z-40"></div>
                    <div className="absolute bottom-5 left-5 w-4 h-4 bg-gradient-to-tr from-orange-400/60 to-transparent rounded-full z-40"></div>
                    <div className="absolute bottom-5 right-5 w-4 h-4 bg-gradient-to-tl from-teal-600/60 to-transparent rounded-full z-40"></div>
                  </div>

                  {/* Floating Decorative Elements - Positioned outside image area */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-xl rotate-45 shadow-lg border border-white/60 animate-bounce z-50" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute top-0 right-0 w-5 h-5 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-white/50 animate-bounce z-50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/60 backdrop-blur-sm rounded shadow-sm border border-white/40 animate-bounce z-50" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-white/85 backdrop-blur-sm rounded-lg rotate-12 shadow-lg border border-white/70 animate-bounce z-50" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }}></div>
                </div>

                {/* Premium Reflection Effect - Adjusted to not cover image */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/20 to-transparent rounded-b-3xl backdrop-blur-sm"></div>
              </div>

              {/* Outer Floating Elements */}
              <div className="absolute -top-6 left-1/4 w-8 h-8 bg-gradient-to-br from-teal-600/30 to-teal-700/30 rounded-xl rotate-45 shadow-lg animate-float"></div>
              <div className="absolute -top-4 right-1/3 w-6 h-6 bg-gradient-to-br from-orange-400/30 to-orange-500/30 rounded-full shadow-md animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 left-1/3 w-7 h-7 bg-gradient-to-br from-teal-600/25 to-orange-400/25 rounded-lg rotate-12 shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 right-1/4 w-5 h-5 bg-gradient-to-br from-orange-400/35 to-teal-600/35 rounded shadow-md animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

                    {/* Compact Header Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            {/* Left Side - Badge and Heading */}
            <div className="text-left">
              {/* Enhanced Badge */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/15 to-orange-400/15 rounded-lg blur-md"></div>
                <div className="relative inline-flex items-center space-x-3 px-6 py-3 bg-white/90 backdrop-blur-md border border-white/60 rounded-lg shadow-md">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#38857a' }}></div>
                  <span className="text-gray-800 font-semibold text-xs tracking-wider uppercase">Who We Are</span>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF934C' }}></div>
            </div>
          </div>

              {/* Compact Professional Heading */}
              <div className="mb-6">
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                    <span style={{ color: '#38857a' }} className="font-black">Powering</span>{' '}
                    <span className="text-gray-800 font-medium">Software</span>
                  </h2>
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-teal-600 to-orange-400 rounded-full"></div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 mt-3">
                  Passionate about{' '}
                  <span style={{ color: '#FF934C' }} className="font-semibold">Technology</span>.
                  </h3>
              </div>

              {/* Professional Content Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-xl blur-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-lg">
                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-0.5 h-full rounded-full bg-gradient-to-b from-teal-600 to-orange-400"></div>
                    <p className="text-base text-gray-700 leading-relaxed mb-6 pl-4">
                If you&apos;re looking for a top software development company
                that can be trusted to deliver high-quality, innovative
                solutions at a reasonable price, you&apos;ve come to the right
                      place. <span className="font-bold" style={{ color: '#38857a' }}>Scriza</span>{' '}
                is the best software development company in the industry.
                We&apos;ve been helping our clients solve their biggest problems
                with Tech.
              </p>
              </div>

              <div className="text-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <button 
                        className="relative text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                        style={{ backgroundColor: '#38857a' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2d6b61';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#38857a';
                        }}
                      >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    Discover More
                          <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </button>
              </div>
            </div>
                </div>
                  </div>
                </div>

            {/* Right Side - Enhanced Large Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/15 to-orange-400/15 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/70 shadow-xl">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-600/10 to-orange-400/10 rounded-xl blur-md"></div>
                  <Image
                    src="/Pairprogramming 2.png"
                    alt="Software Development Team"
                    width={700}
                    height={500}
                    className="relative w-full h-auto rounded-xl shadow-lg border border-white/50"
                    priority
                  />
                    </div>
                  </div>
                </div>
              </div>

          {/* Compact Skills and Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Professional Skills Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Custom Software Development Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/8 to-orange-500/8 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded blur-sm opacity-50"></div>
                      <div className="relative w-10 h-10 rounded flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 shadow-sm">
                        <CodeBracketIcon className="w-5 h-5 text-white" />
              </div>
            </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Custom Software Development</h4>
          </div>
        </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600 font-medium">Success Rate</span>
                      <span className="font-bold text-base" style={{ color: '#FF934C' }}>92%</span>
          </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" style={{ width: '92%' }}></div>
            </div>
            </div>
            </div>
          </div>

              {/* Application Development Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/8 to-teal-700/8 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded blur-sm opacity-50"></div>
                      <div className="relative w-10 h-10 rounded flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-sm">
                        <DevicePhoneMobileIcon className="w-5 h-5 text-white" />
              </div>
            </div>
              <div>
                      <h4 className="font-bold text-gray-800 text-base">Application Development</h4>
              </div>
              </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600 font-medium">Delivery Rate</span>
                      <span className="font-bold text-base" style={{ color: '#38857a' }}>90%</span>
              </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-700" style={{ width: '90%' }}></div>
            </div>
          </div>
              </div>
            </div>
          </div>

            {/* Compact Experience Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/8 to-teal-600/8 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-teal-600/15 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-to-br from-orange-400/10 to-teal-600/10 border border-white/40">
                      <div className="text-2xl font-black bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent">2+</div>
              </div>
            </div>
                  <h3 className="text-lg font-bold text-gray-800">Years Experience</h3>
              </div>
              </div>
              </div>
            </div>
          </div>
      </section>

      {/* Valued Services Section - Premium Professional Design */}
      <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          {/* Premium Mesh Gradient */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,#38857a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-white/40 backdrop-blur-sm rounded-xl rotate-45 shadow-md opacity-60"></div>
          <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full shadow-sm opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ultra Compact Header */}
          <div className="text-center mb-8">
            {/* Professional Badge */}
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-orange-400/10 rounded-lg blur-md"></div>
              <div className="relative inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-white/60 rounded-lg shadow-md">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#38857a' }}></div>
                <span className="text-gray-800 font-semibold text-xs tracking-wider uppercase">Valued Services</span>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF934C' }}></div>
              </div>
            </div>

            {/* Redesigned Heading */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/80 rounded-xl blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/70 rounded-xl p-4 shadow-lg">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 leading-tight">
                  Expert <span style={{ color: '#38857a' }}>Software Development</span>
              </h2>
                <p className="text-xs text-gray-600">
                  Services <span style={{ color: '#FF934C' }} className="font-semibold">Tailored to Your Business Needs</span>
                </p>
              </div>
            </div>
          </div>

          {/* Premium Services Grid - Compact Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Fintech Software Development */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
                      <CreditCardIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    Fintech Software Development
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                Our expertise in fintech software development can help you build
                an app that will make your business run more efficiently and
                effectively.
              </p>

              <Link href="custom-software-development" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#38857a' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2d6b61';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#38857a';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>

            {/* Travel Software Development */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 shadow-md">
                      <RocketLaunchIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    Travel Software Development
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                We develop, implement and maintain travel software applications
                for online booking, inventory management, and reservation
                functionality for the travel industry.
              </p>

              <Link href="air-booking-api" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#FF934C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8834a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF934C';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>

            {/* Recharge Portal Development */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
                      <DevicePhoneMobileIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    Recharge Portal Development
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                We develop recharge portals that allow you to boost your
                business and take it to new heights!
              </p>

              <Link href="/recharge-api-provider" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#38857a' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2d6b61';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#38857a';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>

            {/* Hotel Management Software */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 shadow-md">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    Hotel Management Software
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                We have the expertise to develop an online hotel booking
                  software that's easy to use and integrated with your
                existing back-end systems.
              </p>

              <Link href="/hotel-management-software" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#FF934C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8834a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF934C';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>

            {/* School Management Software */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
                      <LightBulbIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    School Management Software
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                  We're the best in the business at developing school
                software. We can create a custom management system for your
                school.
              </p>

              <Link href="/school-management-software" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#38857a' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2d6b61';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#38857a';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>

            {/* API Integration */}
            <div className="group relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg blur-sm opacity-30"></div>
                    <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 shadow-md">
                      <CodeBracketIcon className="w-5 h-5 text-white" />
                </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    API Integration
                  </h3>
              </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                Seamless API integration services to connect your applications
                with third-party services and enhance functionality.
              </p>

              <Link href="/aeps-api" passHref>
                  <button 
                    className="w-full text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#FF934C' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8834a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF934C';
                    }}
                  >
                  View More
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section - Professional Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Professional Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          {/* Subtle Geometric Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-lg rotate-12" style={{ background: 'linear-gradient(135deg, rgba(56, 133, 122, 0.1), rgba(56, 133, 122, 0.05))' }}></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(255, 147, 76, 0.1), rgba(255, 147, 76, 0.05))' }}></div>
          <div className="absolute top-1/2 right-8 w-16 h-16 rounded-lg rotate-45" style={{ background: 'linear-gradient(135deg, rgba(56, 133, 122, 0.08), rgba(255, 147, 76, 0.08))' }}></div>

          {/* Professional Accent Lines */}
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 mb-8 px-8 py-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF934C' }}></div>
              <span className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
                Achievement
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38857a' }}></div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight tracking-tight">
                See our{' '}
                <span style={{ color: '#FF934C' }} className="font-extrabold">success</span>
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 tracking-wide">
                in our{' '}
                <span style={{ color: '#38857a' }} className="font-bold">numbers</span>.
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We have come a long way in the last few years, building trust and
              delivering excellence across industries.
            </p>
          </div>

          {/* Partner Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image7.png"
                alt="Partner"
                width={120}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image8.png"
                alt="Partner"
                width={120}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image9.png"
                alt="Partner"
                width={120}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image10.png"
                alt="Partner"
                width={120}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Testimonial Section - Professional Design */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Professional Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          {/* Subtle Geometric Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-lg rotate-12" style={{ background: 'linear-gradient(135deg, rgba(56, 133, 122, 0.1), rgba(56, 133, 122, 0.05))' }}></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(255, 147, 76, 0.1), rgba(255, 147, 76, 0.05))' }}></div>
          <div className="absolute top-1/2 right-8 w-16 h-16 rounded-lg rotate-45" style={{ background: 'linear-gradient(135deg, rgba(56, 133, 122, 0.08), rgba(255, 147, 76, 0.08))' }}></div>

          {/* Professional Accent Lines */}
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 mb-8 px-8 py-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38857a' }}></div>
              <span className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
                TESTIMONIAL
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF934C' }}></div>
              </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Client Info Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
              <div className="text-center">
                {/* Client Avatar */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#38857a' }}>
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                
                {/* Client Details */}
                  <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                      John Smith
                  </h3>
                  <p className="text-gray-600 font-medium">
                      CEO, TechCorp
                  </p>
                    </div>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: '#FF934C' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div>
              <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
                {/* Quote Icon */}
                <div className="text-6xl font-serif mb-4" style={{ color: '#38857a' }}>
                &ldquo;
              </div>
                
                {/* Quote Text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  Working with SCRIZA has been a game-changer for our
                business. Their team delivered exactly what we needed, on time
                and within budget. The quality of their work is exceptional and
                  their support is outstanding.
              </blockquote>

                {/* Quote End */}
                <div className="text-right">
                  <div className="text-6xl font-serif" style={{ color: '#FF934C' }}>
                    &rdquo;
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-green-400/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Continuous Flying Lines with Small Squares */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Flying Lines */}
            <div className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-28 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-fly-right"
              style={{ animationDelay: "0.7s" }}
            ></div>
            <div
              className="absolute top-44 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-300/40 to-transparent animate-fly-left"
              style={{ animationDelay: "1.4s" }}
            ></div>
            <div
              className="absolute top-60 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/35 to-transparent animate-fly-left"
              style={{ animationDelay: "2.1s" }}
            ></div>
            <div
              className="absolute bottom-44 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent animate-fly-right"
              style={{ animationDelay: "2.8s" }}
            ></div>
            <div
              className="absolute bottom-28 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-fly-left"
              style={{ animationDelay: "3.5s" }}
            ></div>
            <div
              className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-fly-right"
              style={{ animationDelay: "4.2s" }}
            ></div>

            {/* Vertical Flying Lines */}
            <div
              className="absolute top-0 left-12 h-full w-px bg-gradient-to-b from-transparent via-orange-300/35 to-transparent animate-fly-up"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-0 left-28 h-full w-px bg-gradient-to-b from-transparent via-gray-300/30 to-transparent animate-fly-up"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-0 right-24 h-full w-px bg-gradient-to-b from-transparent via-green-300/40 to-transparent animate-fly-down"
              style={{ animationDelay: "1.9s" }}
            ></div>
            <div
              className="absolute top-0 right-40 h-full w-px bg-gradient-to-b from-transparent via-gray-400/30 to-transparent animate-fly-down"
              style={{ animationDelay: "2.6s" }}
            ></div>
            <div
              className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-orange-400/35 to-transparent animate-fly-up"
              style={{ animationDelay: "3.3s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-green-400/35 to-transparent animate-fly-down"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Flying Small Squares */}
            <div
              className="absolute top-16 left-32 w-1 h-1 bg-orange-400 opacity-50 animate-fly-right"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute top-32 right-40 w-1 h-1 bg-gray-500 opacity-40 animate-fly-left"
              style={{ animationDelay: "1.3s" }}
            ></div>
            <div
              className="absolute top-48 left-56 w-1 h-1 bg-green-400 opacity-55 animate-fly-right"
              style={{ animationDelay: "2.2s" }}
            ></div>
            <div
              className="absolute bottom-40 right-32 w-1 h-1 bg-orange-500 opacity-50 animate-fly-left"
              style={{ animationDelay: "3.1s" }}
            ></div>
            <div
              className="absolute top-64 left-24 w-1 h-1 bg-gray-400 opacity-45 animate-fly-diagonal"
              style={{ animationDelay: "1.7s" }}
            ></div>
            <div
              className="absolute bottom-32 right-48 w-1 h-1 bg-green-500 opacity-60 animate-fly-diagonal"
              style={{ animationDelay: "2.9s" }}
            ></div>
            <div
              className="absolute top-80 right-56 w-1 h-1 bg-orange-400 opacity-50 animate-fly-diagonal"
              style={{ animationDelay: "3.8s" }}
            ></div>
          </div>
        </div>

        <div
          id="blogs"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <LightBulbIcon className="w-10 h-10 text-orange-500 animate-bounce" />
              <h2 className="text-5xl font-black text-gray-900 tracking-tight">
                Latest blog posts
              </h2>
            </div>
            <p className="text-2xl text-gray-600 font-light tracking-wide">
              Stay updated with our insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs &&
              blogs?.map((post:BlogPosts, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover-lift animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`h-48 bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center relative overflow-hidden`}
                  >
                    <Image
                      src={`http://192.168.20.156:5000/${post?.featureImage}`}
                      alt={post?.title || "Blog image"}
                      width={400}
                      height={100}
                      className="rounded-xl object-cover"
                    />

                    <div className="absolute inset-0 shimmer"></div>
                  </div>
                  <div className="p-6 h-55">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-3 tracking-wider uppercase">
                      {post?.category?.name}
                    </div>
                    <h3 className="text-xl h-14  font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors tracking-wide">
                      {post?.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed font-light">
                      {post?.content.slice(0, 120)}...
                    </p>
                  </div>
                  <Link
                    href={`/blogDetails/${post.slug}`}
                    className="group/btn p-6 cursor-pointer flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors tracking-wide"
                  >
                    Read More
                    <ChevronRightIcon className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-orange-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Continuous Flying Lines with Small Squares */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Flying Lines */}
            <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fly-right"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute top-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-fly-left"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute top-48 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent animate-fly-left"
              style={{ animationDelay: "2.4s" }}
            ></div>
            <div
              className="absolute bottom-48 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/35 to-transparent animate-fly-right"
              style={{ animationDelay: "3.2s" }}
            ></div>
            <div
              className="absolute bottom-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/45 to-transparent animate-fly-left"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-fly-right"
              style={{ animationDelay: "4.8s" }}
            ></div>

            {/* Vertical Flying Lines */}
            <div
              className="absolute top-0 left-14 h-full w-px bg-gradient-to-b from-transparent via-orange-400/45 to-transparent animate-fly-up"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute top-0 left-30 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-fly-up"
              style={{ animationDelay: "1.4s" }}
            ></div>
            <div
              className="absolute top-0 right-26 h-full w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent animate-fly-down"
              style={{ animationDelay: "2.2s" }}
            ></div>
            <div
              className="absolute top-0 right-42 h-full w-px bg-gradient-to-b from-transparent via-orange-300/40 to-transparent animate-fly-down"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/35 to-transparent animate-fly-up"
              style={{ animationDelay: "3.8s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-green-500/45 to-transparent animate-fly-down"
              style={{ animationDelay: "4.6s" }}
            ></div>

            {/* Flying Small Squares */}
            <div
              className="absolute top-12 left-28 w-1 h-1 bg-orange-400 opacity-70 animate-fly-right"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-24 right-38 w-1 h-1 bg-white opacity-60 animate-fly-left"
              style={{ animationDelay: "1.3s" }}
            ></div>
            <div
              className="absolute top-40 left-52 w-1 h-1 bg-green-400 opacity-75 animate-fly-right"
              style={{ animationDelay: "2.1s" }}
            ></div>
            <div
              className="absolute bottom-44 right-30 w-1 h-1 bg-orange-500 opacity-65 animate-fly-left"
              style={{ animationDelay: "2.9s" }}
            ></div>
            <div
              className="absolute top-56 left-22 w-1 h-1 bg-white opacity-55 animate-fly-diagonal"
              style={{ animationDelay: "1.7s" }}
            ></div>
            <div
              className="absolute bottom-36 right-46 w-1 h-1 bg-green-500 opacity-70 animate-fly-diagonal"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute top-68 right-58 w-1 h-1 bg-orange-400 opacity-65 animate-fly-diagonal"
              style={{ animationDelay: "3.3s" }}
            ></div>
            <div
              className="absolute bottom-24 left-44 w-1 h-1 bg-white opacity-60 animate-fly-diagonal"
              style={{ animationDelay: "4.1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <RocketLaunchIcon className="w-12 h-12 text-orange-400 animate-bounce" />
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">
              Don&apos;t wait another{" "}
              <span className="gradient-text">minute!</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Call us today to schedule a free consultation with one of our
              experts and transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-orange-400 hover:to-green-500 transition-all duration-300 hover-lift animate-glow tracking-wide">
                <Link href="/contact" className="flex items-center cursor-pointer">
                  Get Started Now
                  <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </button>

              <button className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover-lift backdrop-blur-sm tracking-wide">
              <Link href={`tel:${"9116011899"}`} className="flex items-center">
  Schedule Call
  <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
</Link>

              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />
    </div>
  );
}
