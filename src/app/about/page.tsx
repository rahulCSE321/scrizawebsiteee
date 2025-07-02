import { 
  CheckIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  HeartIcon, 
  SparklesIcon, 
  TrophyIcon,
  RocketLaunchIcon,
  BoltIcon,
  EyeIcon,
  TagIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import Certifications from '../components/Certifications'
import ChatWidgets from '../components/ChatWidgets'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We at Scriza are experts in software development, starting from scratch and building it from the ground up. We understand that not all projects are the same.',
  openGraph: {
    title: 'About SCRIZA - We Core Your Future',
    description: 'We build software that works like the world around you. Expert software development from scratch.',
    url: '/about',
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-6 overflow-hidden">
        {/* Advanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div className="h-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#38857a_40deg,transparent_80deg,#FF934C_120deg,transparent_160deg,#38857a_200deg,transparent_240deg,#FF934C_280deg,transparent_320deg)] bg-[size:3rem_3rem] animate-pulse"></div>
          </div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-8 left-8 w-20 h-20 rounded-full animate-bounce" style={{ background: 'radial-gradient(circle, rgba(56, 133, 122, 0.12), transparent 70%)', animationDuration: '6s' }}></div>
          <div className="absolute top-12 right-12 w-16 h-16 rounded-lg rotate-45 animate-pulse" style={{ background: 'linear-gradient(45deg, rgba(255, 147, 76, 0.1), transparent)', animationDuration: '4s' }}></div>
          <div className="absolute bottom-12 left-12 w-18 h-18 rounded-full animate-bounce" style={{ background: 'radial-gradient(circle, rgba(255, 147, 76, 0.08), transparent 70%)', animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-8 right-8 w-14 h-14 rounded-lg -rotate-12 animate-pulse" style={{ background: 'linear-gradient(-45deg, rgba(56, 133, 122, 0.12), transparent)', animationDuration: '3s' }}></div>
          
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/3 via-transparent to-orange-500/3"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start animate-fade-in-scale">
            {/* Left Side - Enhanced Image */}
            <div className="relative">
              <div className="relative group">
                {/* Image Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-orange-400/15 to-teal-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                
                {/* Image Container */}
                <div className="relative bg-white/8 backdrop-blur-xl rounded-xl p-3 border border-white/15 shadow-xl group-hover:scale-102 transition-all duration-500">
                  <Image
                    src="/luke-peters-B6JINerWMz0-unsplash 1 (1).png"
                    alt="Developer at Work"
                    width={350}
                    height={230}
                    className="w-full h-auto rounded-lg shadow-xl border border-white/20"
                    priority
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl rotate-12 shadow-lg animate-bounce flex items-center justify-center" style={{ animationDuration: '3s' }}>
                    <RocketLaunchIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-md animate-bounce flex items-center justify-center" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <BoltIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="space-y-4">
              <div className="relative">
                {/* Content Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-white/6 to-white/3 rounded-xl blur-lg"></div>
                
                {/* Content Card */}
                <div className="relative bg-white/8 backdrop-blur-xl rounded-xl p-6 border border-white/15 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #38857a 0%, #FF934C 100%)' }}>
                      <RocketLaunchIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-12 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #38857a 0%, #FF934C 100%)' }}></div>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    We Core Your <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Future</span>
                  </h1>
                  
                  <h2 className="text-lg font-semibold text-gray-200 mb-4">
                    We build software that works like the world around you.
                  </h2>
                  
                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-0.5 h-full rounded-full bg-gradient-to-b from-teal-400 to-orange-400"></div>
                    <div className="space-y-3 pl-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        We at Scriza are experts in software development, starting from scratch and building it from the ground up. 
                        We understand that not all projects are the same, and that&apos;s why we take the time to get to know you and your project before we begin.
                      </p>
                      <p className="text-gray-400 leading-relaxed text-xs">
                        We&apos;ve seen it all—horror stories about projects that went south because of poor communication, inadequate planning, 
                        or simply not enough time. That&apos;s why we&apos;re here: to make sure that doesn&apos;t happen to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #38857a 0%, #FF934C 100%)' }}>
                <TagIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-base tracking-wide uppercase bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">OUR MISSION</span>
            </div>
            
            <div className="w-20 h-0.5 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(90deg, #38857a 0%, #FF934C 100%)' }}></div>
            
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              Our mission at Scriza is to create great software that helps people to do better and faster with impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF934C 0%, #38857a 100%)' }}>
                <EyeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-base tracking-wide uppercase bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">OUR VISION</span>
            </div>
            
            <div className="w-20 h-0.5 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(90deg, #FF934C 0%, #38857a 100%)' }}></div>
            
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              At Scriza Software, we believe that every business has the potential to be successful. 
              Our vision is to help you make it happen with software that transforms your operations and accelerates growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3" style={{ background: 'linear-gradient(135deg, #38857a 0%, #FF934C 100%)' }}>
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">Our Values</h2>
            <div className="w-16 h-0.5 mx-auto mb-3 rounded-full" style={{ background: 'linear-gradient(90deg, #38857a 0%, #FF934C 100%)' }}></div>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">Our values define who we are and guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Values Grid - Left Side */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: UserGroupIcon, title: "Collaboration", desc: "We believe in the power of purposeful collaboration.", color: "#38857a" },
                { icon: SparklesIcon, title: "Embracing Uniqueness", desc: "We believe in the importance of being different.", color: "#FF934C" },
                { icon: LightBulbIcon, title: "Growth Mindset", desc: "We believe in being open to change and growth—and knowing that those things are not always easy or fun.", color: "#38857a" },
                { icon: TrophyIcon, title: "We Challenge Our Potential", desc: "We're not afraid to try new things because that's how you grow as a company—and as individuals!", color: "#FF934C" },
                { icon: HeartIcon, title: "Customer Centricity", desc: "And lastly… we believe in YOU!", color: "#38857a" }
              ].map((value, index) => (
                <div key={index} className={`group relative ${index === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl blur-md opacity-30" style={{ backgroundColor: value.color }}></div>
                        <div className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500" style={{ backgroundColor: value.color }}>
                          <value.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Brain Intelligence Section - Right Side */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <Image
                  src="/3380376_analytical_brain_creative_intelligence_mindset_icon 1.png"
                  alt="Creative Intelligence Brain"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Scriza Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,#38857a_2px,transparent_2px),radial-gradient(circle_at_75%_75%,#FF934C_2px,transparent_2px)] bg-[size:4rem_4rem]"></div>
          </div>
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full blur-2xl opacity-5" style={{ background: 'linear-gradient(135deg, rgba(56, 133, 122, 0.3), rgba(255, 147, 76, 0.2))' }}></div>
          <div className="absolute bottom-8 left-8 w-28 h-28 rounded-full blur-2xl opacity-4" style={{ background: 'linear-gradient(-45deg, rgba(255, 147, 76, 0.25), rgba(56, 133, 122, 0.15))' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-scale">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4" style={{ background: 'linear-gradient(135deg, #38857a 0%, #FF934C 100%)' }}>
              <TrophyIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">Why Choose Scriza?</h2>
            <div className="w-20 h-0.5 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(90deg, #38857a 0%, #FF934C 100%)' }}></div>
            <p className="text-lg font-semibold text-gray-800 mb-4 max-w-3xl mx-auto">We&apos;re not just a software company. We&apos;re the solution to your problem.</p>
            
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-orange-400/10 to-teal-600/10 rounded-xl blur-lg"></div>
              <div className="relative bg-white/70 backdrop-blur-md rounded-xl px-6 py-4 border border-white/40 shadow-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  We know you have a lot of options when it comes to choosing a software development company. 
                  That&apos;s why we&apos;re excited to share the six reasons why Scriza is your best option:
                </p>
              </div>
            </div>
          </div>
          
          {/* Circular Reasons Layout */}
          <div className="relative flex justify-center items-center min-h-[450px]">
            {/* Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-orange-400/20 to-teal-600/20 rounded-full blur-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-8 border-2 border-white/60 shadow-2xl">
                  <Image
                    src="/features 1 (1).png"
                    alt="Scriza Features"
                    width={240}
                    height={240}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Circular Points */}
            <div className="relative w-full max-w-2xl aspect-square">
              {[
                {
                  text: "We're committed to providing the highest quality products and services possible",
                  position: "top-2 left-1/2 transform -translate-x-1/2",
                  color: "#38857a"
                },
                {
                  text: "We use agile development methods to make sure our clients' needs come first",
                  position: "top-8 right-2 transform translate-x-2",
                  color: "#FF934C"
                },
                {
                  text: "We pride ourselves on being flexible, so you can rely on us to roll with the punches (and keep rolling)",
                  position: "bottom-8 right-2 transform translate-x-2",
                  color: "#38857a"
                },
                {
                  text: "Our team works hard to ensure that every member of your team is well-versed in the project and invested in its success",
                  position: "bottom-2 left-1/2 transform -translate-x-1/2",
                  color: "#FF934C"
                },
                {
                  text: "We're focused on delivering results—so you won't have to worry about whether or not we'll get things done",
                  position: "bottom-8 left-2 transform -translate-x-2",
                  color: "#38857a"
                },
                {
                  text: "You won't want to leave once it's done: We treat every client like family, so there's no doubt that we'll be working with each other again in the future!",
                  position: "top-8 left-2 transform -translate-x-2",
                  color: "#FF934C"
                }
              ].map((reason, index) => (
                <div key={index} className={`absolute ${reason.position} group`}>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-1/2 w-12 h-0.5 origin-left opacity-20" 
                       style={{ 
                         backgroundColor: reason.color,
                         transform: `translate(-50%, -50%) rotate(${60 * index}deg)`
                       }}></div>
                  
                  {/* Reason Card */}
                  <div className="relative w-40 group-hover:scale-105 transition-all duration-300">
                    {/* Number Badge */}
                    <div className="absolute -top-2 -left-2 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-sm opacity-40" style={{ backgroundColor: reason.color }}></div>
                        <div className="relative w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: reason.color }}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: reason.color }}></div>
                      
                      <div className="relative flex items-start space-x-2">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-2.5 h-2.5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: reason.color }}>
                            <CheckIcon className="w-1.5 h-1.5 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-xs font-medium group-hover:text-gray-900 transition-colors">{reason.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,#38857a_0deg,transparent_60deg,#FF934C_120deg,transparent_180deg,#38857a_240deg,transparent_300deg)] bg-[size:6rem_6rem]"></div>
          </div>
          <div className="absolute top-8 left-1/4 w-20 h-20 rounded-full blur-2xl opacity-8" style={{ background: 'radial-gradient(circle, rgba(56, 133, 122, 0.2), transparent 70%)' }}></div>
          <div className="absolute bottom-8 right-1/4 w-24 h-24 rounded-full blur-2xl opacity-6" style={{ background: 'radial-gradient(circle, rgba(255, 147, 76, 0.15), transparent 70%)' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            {/* Icon and Header */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: 'linear-gradient(135deg, #38857a 0%, #FF934C 100%)' }}>
              <RocketLaunchIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 leading-tight">
              Don&apos;t wait another <span style={{ color: '#38857a' }}>minute!</span>
            </h2>
            
            <div className="w-24 h-0.5 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(90deg, #38857a 0%, #FF934C 100%)' }}></div>
            
            <div className="relative max-w-4xl mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-orange-400/5 to-teal-600/5 rounded-xl blur-lg"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-xl px-6 py-4 border border-white/50 shadow-lg">
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  Call us today to schedule a free consultation with one of our experts and let&apos;s core your future together.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href='/contact' className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    Get Started Now
                    <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
              
              <Link href='/' className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white rounded-xl blur-sm opacity-60"></div>
                <div className="relative border-2 bg-white/80 backdrop-blur-sm hover:bg-white border-teal-600 hover:border-teal-700 px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-gray-800 hover:text-gray-900">
                  <span className="flex items-center">
                    Learn More
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />

      {/* Enhanced Chat Widgets */}
      <ChatWidgets />
    </div>
  )
} 