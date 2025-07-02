import { 
  CodeBracketIcon, 
  ShieldCheckIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  CloudIcon,
  CogIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  CheckCircleIcon,
  PhoneIcon,
  SparklesIcon,
  BoltIcon,
  TrophyIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Certifications from '../components/Certifications'
import ChatWidgets from '../components/ChatWidgets'
import Link from 'next/link'

export default function CustomSoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <span className="text-teal-600">Custom software development solutions</span>
          </div>
        </div>
      </section>

      {/* Hero Section - Modern Attractive Design */}
      <section className="relative bg-gradient-to-br from-gray-50 via-orange-50/30 to-teal-50/30 overflow-hidden py-12">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#38857a]/10 to-[#FF934C]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-[#FF934C]/10 to-[#38857a]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#38857a]/5 to-[#FF934C]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#38857a]/10 to-[#FF934C]/10 border border-[#38857a]/20 rounded-lg backdrop-blur-sm">
                <SparklesIcon className="w-4 h-4 text-[#FF934C]" />
                <p className="text-[#38857a] font-medium text-xs tracking-wide uppercase">
                  CUSTOM SOFTWARE DEVELOPMENT SOLUTIONS
                </p>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">Custom Software Development</span><br />
                <span className="text-gray-900">for 50% higher revenue growth</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-4 font-semibold">
                Workflow efficiency, productivity, customer satisfaction and whatnot!
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The custom software development services by Scriza can boost your business to the next level of efficiency.
                Invest in our bespoke software and tailor-made technology solutions. These are designed to fulfil the unique requirements of your business.
              </p>
              
              <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF934C]/10 rounded-xl p-5 mb-6 border border-[#38857a]/20 backdrop-blur-sm">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  Scriza is a bespoke solution provider that drives results. So get in touch with our technology experts and enjoy 50% higher revenue from now onwards.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href='/contact' className="group bg-gradient-to-r from-[#38857a] to-[#FF934C] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
                  <span className="flex items-center justify-center">
                    Contact Us
                    <PhoneIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href='/about' className="group border-2 border-[#38857a] text-[#38857a] px-6 py-3 rounded-lg font-semibold hover:bg-[#38857a] hover:text-white transition-all duration-300 text-center">
                  <span className="flex items-center justify-center">
                    About
                    <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

                        {/* Right Content - Modern Attractive Image */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#38857a]/20">
                <div className="w-full h-80 rounded-xl overflow-hidden relative bg-gradient-to-br from-[#38857a]/20 to-[#FF934C]/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38857a]/10 via-transparent to-[#FF934C]/10"></div>
                  <CodeBracketIcon className="w-24 h-24 text-[#38857a] relative z-10" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF934C] to-[#38857a] text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="flex items-center space-x-2 text-sm">
                      <TrophyIcon className="w-4 h-4" />
                      <span className="font-semibold">50% Growth</span>
                    </div>
                  </div>
                  {/* Modern decorative elements */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#38857a]/20 rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 left-8 w-8 h-8 bg-[#FF934C]/20 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Custom Application Development Makes Business Efficient - Compact */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BoltIcon className="w-6 h-6 text-[#FF934C]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  How do custom application development services make your business <span className="text-[#38857a]">50% more efficient</span>?
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every business has unique software needs. Off-the-shelf solutions often fall short in completing such specific requirements. 
                Our custom software development ensures that every feature is designed to fit your business processes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircleIcon, title: "100% Customization", desc: "Get software that works exactly the way you want." },
                  { icon: ArrowTrendingUpIcon, title: "Scalability", desc: "Software solutions that can expand to match your business growth." },
                  { icon: CogIcon, title: "Flexibility", desc: "Ready to roll software features with changing business needs." },
                  { icon: RocketLaunchIcon, title: "Automate Processes", desc: "Reduce manual work by automating routine tasks." },
                  { icon: ChartBarIcon, title: "Improve Workflow", desc: "Enhanced coordination and workflow management." },
                  { icon: CloudIcon, title: "Real-time Info Access", desc: "Get real-time data analysis for your business operations." }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-[#38857a]/10 hover:border-[#FF934C]/30 transition-all duration-300 hover:shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#38857a] to-[#FF934C] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#38857a]/20">
                <div className="w-full h-64 bg-gradient-to-br from-[#38857a]/20 to-[#FF934C]/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF934C]/10 via-transparent to-[#38857a]/10"></div>
                  <CpuChipIcon className="w-20 h-20 text-[#38857a] relative z-10" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF934C]/20 rounded-full blur-md"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-[#38857a]/20 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Security Section - Modern */}
      <section className="py-12 bg-gradient-to-br from-[#38857a]/5 via-gray-50/50 to-[#FF934C]/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#38857a]/20">
                <div className="w-full h-64 bg-gradient-to-br from-[#38857a]/20 to-[#FF934C]/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#FF934C]/10 via-transparent to-[#38857a]/10"></div>
                  <ShieldCheckIcon className="w-20 h-20 text-[#38857a] relative z-10" />
                  <div className="absolute top-6 left-6 w-10 h-10 bg-[#FF934C]/15 rounded-full blur-lg"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#38857a]/15 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <StarIcon className="w-6 h-6 text-[#FF934C]" />
                <span className="text-[#38857a] font-bold text-sm tracking-wide uppercase">SECURITY</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                #1 Custom Software Company offering <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">Enhanced Security</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protect your business data with custom software solutions that offer enhanced security features. 
                Our custom software company ensures your data is secure from breaches and unauthorized access.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                {[
                  { icon: LockClosedIcon, title: "Data Encryption", desc: "Keep sensitive information secure." },
                  { icon: UserGroupIcon, title: "Access Control", desc: "Restrict access to critical data." },
                  { icon: ShieldCheckIcon, title: "Regular Updates", desc: "Keep customer data safe with security features." }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-white to-[#38857a]/5 rounded-xl border border-[#38857a]/10 hover:border-[#FF934C]/30 transition-all duration-300 hover:shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#38857a] to-[#FF934C] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF934C]/10 rounded-xl p-5 border border-[#38857a]/20 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cost-Effective Custom business software</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Investing in custom software seem costly upfront to small sized business. Though your investment pays off in the long run. 
                  Our custom software development services are designed to provide maximum return on investment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-[#38857a] mr-2 flex-shrink-0" />
                    <span><strong>Reduce Operational Costs:</strong> Streamline processes to save money.</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-[#FF934C] mr-2 flex-shrink-0" />
                    <span><strong>Increase Revenue:</strong> Improved efficiency leads to better business performance.</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-[#38857a] mr-2 flex-shrink-0" />
                    <span><strong>Long-Term Savings:</strong> Fewer issues and updates compared to off-the-shelf software.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialization Section - Compact */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our specialization: <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">Custom Software Development Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We create custom software for businesses that aligns with your specific goals. 
              Our solutions are crafted to improve your business processes and bring in growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="group bg-gradient-to-br from-white to-[#38857a]/5 p-6 rounded-xl shadow-lg border border-[#38857a]/20 hover:shadow-xl hover:border-[#FF934C]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#38857a] to-[#FF934C] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <CpuChipIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ERP Solutions</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We have successfully implemented ERP systems in the retail, manufacturing, healthcare and finance sector. 
                We provided bespoke software with features for handling sales, production, inventory and supply chain.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-[#FF934C]/5 p-6 rounded-xl shadow-lg border border-[#FF934C]/20 hover:shadow-xl hover:border-[#38857a]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF934C] to-[#38857a] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Systems</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our custom CRM systems are packed with features that make them way better than the off-the-shelf options. 
                Features include advanced customer segmentation, automated follow-ups, customizable dashboards, and seamless integration.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-[#38857a]/5 p-6 rounded-xl shadow-lg border border-[#38857a]/20 hover:shadow-xl hover:border-[#FF934C]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#38857a] to-[#FF934C] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our custom software for supply chain management has been a game-changer for various industries. 
                Enhanced inventory management, supplier coordination, parts procurement, and compliance solutions.
              </p>
            </div>
          </div>

          {/* Custom Development Services */}
          <div className="bg-gradient-to-br from-[#38857a]/10 via-white to-[#FF934C]/10 rounded-2xl p-8 border border-[#38857a]/20 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">Custom Development</span> Services
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-white to-[#38857a]/5 rounded-lg border border-[#38857a]/10">
                    <CheckCircleIcon className="w-5 h-5 text-[#38857a]" />
                    <span className="font-semibold text-gray-800">Mobile Apps: iOS, Android, and cross-platform solutions.</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-white to-[#FF934C]/5 rounded-lg border border-[#FF934C]/10">
                    <CheckCircleIcon className="w-5 h-5 text-[#FF934C]" />
                    <span className="font-semibold text-gray-800">Web Applications: Custom web apps for various business functions.</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-white to-[#38857a]/5 rounded-lg border border-[#38857a]/10">
                    <CheckCircleIcon className="w-5 h-5 text-[#38857a]" />
                    <span className="font-semibold text-gray-800">Desktop Applications: Reliable and high performing desktop software.</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#38857a]/5 to-[#FF934C]/5 rounded-lg p-4 border border-[#38857a]/10">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We sit down with to chat about your needs. We then whip up custom software that perfectly suits your business. 
                    Our team handles everything from the initial brainstorming to the final rollout. And the best part? We are always here for software support.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-[#38857a]/20">
                  <div className="w-full h-48 bg-gradient-to-br from-[#38857a]/20 to-[#FF934C]/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF934C]/10 via-transparent to-[#38857a]/10"></div>
                    <RocketLaunchIcon className="w-16 h-16 text-[#38857a] relative z-10" />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF934C]/20 rounded-full blur-md"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#38857a]/20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Best Section - Modern */}
      <section className="py-12 bg-gradient-to-br from-[#38857a] via-gray-900 to-[#FF934C] text-white relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#FF934C]/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#38857a]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What makes us the <span className="bg-gradient-to-r from-[#FF934C] to-white bg-clip-text text-transparent">best custom development</span> company?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-[#38857a]/30 hover:border-[#FF934C]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF934C] to-[#38857a] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FF934C]">Expertise and Experience</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Proven Track Record: Over 100 positive customisation projects.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Industry Experts: Skilled developers with domain expertise.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Customer Satisfaction: High customer satisfaction rate.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-[#FF934C]/30 hover:border-[#38857a]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#38857a] to-[#FF934C] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#38857a]">Next-gen Solutions</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-[#38857a] mt-1">•</span>
                  <span>Modern Technologies: AI, Machine Learning, Blockchain and more.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#38857a] mt-1">•</span>
                  <span>Creative Approaches: Unique solutions to complex problems.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#38857a] mt-1">•</span>
                  <span>Future-Ready Solutions: Scalable and adaptable software.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-[#38857a]/30 hover:border-[#FF934C]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF934C] to-[#38857a] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FF934C]">Customer-Centric Approach</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Custom Solutions: We create services specifically designed for your business.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Clear Communication: Enjoy weekly project updates throughout the process.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF934C] mt-1">•</span>
                  <span>Post-Deployment Support: Ongoing support to ensure smooth operations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Compact */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">Result driven</span> custom software for your business
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom software development can reduce manual errors, and you can increase profitability with automation features. 
                Here are some key benefits:
              </p>

              <div className="space-y-6">
                <div className="group p-4 bg-gradient-to-r from-[#38857a]/5 to-white rounded-xl border border-[#38857a]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-semibold flex items-center">
                      <ArrowTrendingUpIcon className="w-5 h-5 mr-2 text-[#38857a]" />
                      50% Increase in Productivity
                    </span>
                    <span className="text-[#38857a] font-bold text-lg">50%</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">Custom software streamlines operations, leading to significant productivity gains.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-[#38857a] to-[#FF934C] h-3 rounded-full shadow-sm transition-all duration-1000" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-[#FF934C]/5 to-white rounded-xl border border-[#FF934C]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-semibold flex items-center">
                      <ChartBarIcon className="w-5 h-5 mr-2 text-[#FF934C]" />
                      30% Reduction in Costs
                    </span>
                    <span className="text-[#FF934C] font-bold text-lg">30%</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">Automating tasks can help you cut down business process costs.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-[#FF934C] to-[#38857a] h-3 rounded-full shadow-sm transition-all duration-1000" style={{width: '30%'}}></div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-[#38857a]/5 to-white rounded-xl border border-[#38857a]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-semibold flex items-center">
                      <StarIcon className="w-5 h-5 mr-2 text-[#38857a]" />
                      40% Improvement in Customer Satisfaction
                    </span>
                    <span className="text-[#38857a] font-bold text-lg">40%</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">Better customer service with personalized solutions.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-[#38857a] to-[#FF934C] h-3 rounded-full shadow-sm transition-all duration-1000" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#38857a] to-[#FF934C] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                {/* Modern background elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-3">Begin with the <span className="text-white/90">best custom software developer</span> today!</h3>
                    <p className="text-white/90 leading-relaxed text-sm">
                      Thousands of businesses in your industry are getting help from the best custom software development companies to the next level? 
                      What is ceasing you from growing your productivity levels by 50%?
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mb-4 border border-white/20">
                    <div className="w-full h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg flex items-center justify-center relative">
                      <RocketLaunchIcon className="w-12 h-12 text-white relative z-10" />
                      <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/15 rounded-full blur-sm"></div>
                    </div>
                  </div>
                  <p className="text-white/90 text-center text-sm">
                    Contact us today to get into your custom software development needs. Our team is here to create software that drives success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section - Modern */}
      <section className="py-12 bg-gradient-to-br from-[#38857a]/5 via-gray-50 to-[#FF934C]/5 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-24 h-24 bg-[#38857a]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FF934C]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What do <span className="bg-gradient-to-r from-[#38857a] to-[#FF934C] bg-clip-text text-transparent">we offer</span>?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              So far, we have successfully delivered over 750 software development projects and helped big and small enterprises achieve their business targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CogIcon, title: "Bespoke solutions", desc: "We deliver tailor-made solutions best suited to your business requirements.", gradient: "from-[#38857a] to-[#FF934C]" },
              { icon: UserGroupIcon, title: "Experienced Developers", desc: "Our skilled team has worked for 500+ from various industries.", gradient: "from-[#FF934C] to-[#38857a]" },
              { icon: CpuChipIcon, title: "High-end tools", desc: "We use a broad range of high-end software development", gradient: "from-[#38857a] to-[#FF934C]" },
              { icon: RocketLaunchIcon, title: "Well-timed delivery", desc: "Our motivated team gives their best to launch the product within the agreed timeline.", gradient: "from-[#FF934C] to-[#38857a]" },
              { icon: DocumentCheckIcon, title: "Affordable packages", desc: "We can adapt to what you expect and keep the price range budget and friendly.", gradient: "from-[#38857a] to-[#FF934C]" },
              { icon: ShieldCheckIcon, title: "Constant tech support", desc: "We never stop working; constant maintenance and post-release support are assured.", gradient: "from-[#FF934C] to-[#38857a]" }
            ].map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[#38857a]/20 hover:shadow-xl hover:border-[#FF934C]/30 transition-all duration-300">
                <div className={`h-20 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative`}>
                  <service.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/15 rounded-full blur-sm"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="py-12 bg-gradient-to-r from-gray-900 via-[#38857a] to-[#FF934C] text-white relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF934C]/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#38857a]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FF934C] bg-clip-text text-transparent">Contact</span> now
          </h2>
          <p className="text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Scriza boasts a passionate team of individuals who have access to the most powerful development technology. 
              Leverage our proficiency and get bespoke software development solutions suitable for your business requirements. 
              Schedule a discovery call right now!
            </p>
            
          <button className="group bg-gradient-to-r from-white to-white/90 text-[#38857a] px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20">
              <Link href='/contact' className="flex items-center justify-center">
                Get Started
              <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </button>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />
      
      {/* Enhanced Chat Widgets */}
      <ChatWidgets />
    </div>
  );
} 