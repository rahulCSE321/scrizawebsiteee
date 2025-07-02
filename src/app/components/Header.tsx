"use client"

import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FreeTrialPopup from "./FreeTrialPopup";

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCoreServicesDropdownOpen, setIsCoreServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when mobile menu closes
    if (isMobileMenuOpen) {
      setIsProductsDropdownOpen(false);
      setIsCoreServicesDropdownOpen(false);
    }
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    setIsCoreServicesDropdownOpen(false);
  };

  const toggleCoreServicesDropdown = () => {
    setIsCoreServicesDropdownOpen(!isCoreServicesDropdownOpen);
    setIsProductsDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a  
                href="https://mail.google.com/"  
                target="_blank"
                rel="noopener noreferrer" 
                className="hidden sm:flex items-center cursor-pointer transform transition-transform hover:scale-110"
              >
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                <span>sales@scriza.in</span>
              </a>
              <a 
                href={`tel:${"9116011899"}`} 
                className="flex items-center cursor-pointer transform transition-transform hover:scale-105"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">+91 911 6011 899</span>
                <span className="sm:hidden">Call Us</span>
              </a>
            </div>
            <div className="flex space-x-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/company/scriza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/linkdin1.svg"
                  alt="LinkedIn"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/faceBook1.svg"
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/Insta1.svg"
                  alt="Instagram"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
              <a
                href="https://www.youtube.com/@scrizaprivatelimited2215"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/youtube1.svg"
                  alt="YouTube"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Scriza (1).svg"
                  alt="Scriza Logo"
                  width={200}
                  height={80}
                  className="h-12 sm:h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                About Us
              </Link>
              <div className="relative group">
                <div className="text-gray-700 hover:text-teal-600 font-medium flex items-center cursor-pointer">
                  Our Products
                  <span className="ml-1 text-xs">+</span>
                </div>
                {/* Desktop Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-5 gap-6">
                      {/* Products Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Products
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/recharge-software-application"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Recharge Software
                          </Link>
                          <Link
                            href="/money-transfer-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Money Transfer Software
                          </Link>
                          <Link
                            href="/hotel-management-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Hotel Management Software
                          </Link>
                          <Link
                            href="/crm"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            CRM Software
                          </Link>
                          <Link
                            href="/hrms-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            HRMS Software
                          </Link>
                          <Link
                            href="/custom-software-development"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Custom Software Development
                          </Link>
                          <Link
                            href="/school-management-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            School Software Development
                          </Link>
                        </div>
                      </div>

                      {/* Banking Services Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Banking Services
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/aeps-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            AEPS Api
                          </Link>
                          <Link
                            href="/micro-atm-machine-providers"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            MATM-POSM Api
                          </Link>
                          <Link
                            href="/pancard-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Pan Card Api
                          </Link>
                          <Link
                            href="/payout-api-service"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Payout Api
                          </Link>
                          <Link
                            href="/pay-in-service"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Pay In Service
                          </Link>
                          <Link
                            href="/upi-collection-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            UPI Collection API
                          </Link>
                          <Link
                            href="/credit-card-billpay-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Credit Card BillPay Api
                          </Link>
                        </div>
                      </div>

                      {/* Other Services Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Other Services
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/recharge-api-provider"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Recharge Api
                          </Link>
                          <Link
                            href="/bbps-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            BBPS Api
                          </Link>
                          <Link
                            href="/lic-premium-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            LIC Premium Pay Api
                          </Link>
                          <Link
                            href="/verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Validation API
                          </Link>
                          <Link
                            href="/sms-api"
                            className="block text-teal-600 hover:text-teal-700 transition-colors text-xs py-1 font-medium"
                          >
                            SMS API
                          </Link>
                          <Link
                            href="/whatsapp-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            WhatsApp API
                          </Link>
                        </div>
                      </div>

                      {/* Travel Api Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Travel Api
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/bus-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Bus Booking API
                          </Link>
                          <Link
                            href="/hotel-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Hotel Booking API
                          </Link>
                          <Link
                            href="/air-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Air Booking API
                          </Link>
                        </div>
                      </div>

                      {/* Verification Api Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Verification Api
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/bank-account-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Bank Ac Verification API
                          </Link>
                          <Link
                            href="/upi-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            UPI ID Verification API
                          </Link>
                          <Link
                            href="/aadhaar-validation-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Aadhaar Verification API
                          </Link>
                          <Link
                            href="/voter-ID-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Voter Id Verification API
                          </Link>
                          <Link
                            href="/driving-licence-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Driving License Verification
                          </Link>
                          <Link
                            href="/vehicle-rc-verification"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Vehicle RC Verification API
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="text-gray-700 hover:text-teal-600 font-medium flex items-center cursor-pointer">
                  Core Services
                  <span className="ml-1 text-xs">+</span>
                </div>
                {/* Desktop Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    <Link
                      href="/custom-software-development"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Custom Software Development
                    </Link>
                    <Link
                      href="/website-design-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Website Design
                    </Link>
                    <Link
                      href="/software-development-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Software Development
                    </Link>
                    <Link
                      href="/application-development-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Application Development
                    </Link>
                    <Link
                      href="/digital-marketing-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Digital Marketing
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Contact Us
              </Link>

              <button  
                onClick={() => setIsPopupOpen(true)} 
                className="bg-white border-2 cursor-pointer border-teal-600 text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-colors"
              >
                Get A Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-white border-2 border-teal-600 text-teal-600 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-teal-600 hover:text-white transition-colors"
              >
                Demo
              </button>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-700" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="space-y-2 pt-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Products Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={toggleProductsDropdown}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors rounded-md"
                >
                  Our Products
                  {isProductsDropdownOpen ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                <div className={`transition-all duration-300 ${
                  isProductsDropdownOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                }`}>
                  <div className="pl-6 pb-2 space-y-1">
                    <h4 className="text-sm font-semibold text-teal-600 px-2 py-1">Products</h4>
                    <Link href="/recharge-software-application" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Recharge Software</Link>
                    <Link href="/money-transfer-software" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Money Transfer Software</Link>
                    <Link href="/hotel-management-software" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Hotel Management Software</Link>
                    <Link href="/crm" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>CRM Software</Link>
                    <Link href="/hrms-software" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>HRMS Software</Link>
                    <Link href="/custom-software-development" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Custom Software Development</Link>
                    <Link href="/school-management-software" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>School Software Development</Link>
                    
                    <h4 className="text-sm font-semibold text-teal-600 px-2 py-1 pt-3">Banking Services</h4>
                    <Link href="/aeps-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>AEPS Api</Link>
                    <Link href="/micro-atm-machine-providers" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>MATM-POSM Api</Link>
                    <Link href="/pancard-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Pan Card Api</Link>
                    <Link href="/payout-api-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Payout Api</Link>
                    <Link href="/pay-in-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Pay In Service</Link>
                    <Link href="/upi-collection-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>UPI Collection API</Link>
                    <Link href="/credit-card-billpay-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Credit Card BillPay Api</Link>
                    
                    <h4 className="text-sm font-semibold text-teal-600 px-2 py-1 pt-3">Other Services</h4>
                    <Link href="/recharge-api-provider" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Recharge Api</Link>
                    <Link href="/bbps-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>BBPS Api</Link>
                    <Link href="/lic-premium-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>LIC Premium Pay Api</Link>
                    <Link href="/verification-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Validation API</Link>
                    <Link href="/sms-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>SMS API</Link>
                    <Link href="/whatsapp-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>WhatsApp API</Link>
                    
                    <h4 className="text-sm font-semibold text-teal-600 px-2 py-1 pt-3">Travel Api</h4>
                    <Link href="/bus-booking-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Bus Booking API</Link>
                    <Link href="/hotel-booking-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Hotel Booking API</Link>
                    <Link href="/air-booking-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Air Booking API</Link>
                    
                    <h4 className="text-sm font-semibold text-teal-600 px-2 py-1 pt-3">Verification Api</h4>
                    <Link href="/bank-account-verification-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Bank Ac Verification API</Link>
                    <Link href="/upi-verification-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>UPI ID Verification API</Link>
                    <Link href="/aadhaar-validation-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Aadhaar Verification API</Link>
                    <Link href="/voter-ID-verification-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Voter Id Verification API</Link>
                    <Link href="/driving-licence-verification-api" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Driving License Verification</Link>
                    <Link href="/vehicle-rc-verification" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Vehicle RC Verification API</Link>
                  </div>
                </div>
              </div>

              {/* Mobile Core Services Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={toggleCoreServicesDropdown}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors rounded-md"
                >
                  Core Services
                  {isCoreServicesDropdownOpen ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                <div className={`transition-all duration-300 ${
                  isCoreServicesDropdownOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                }`}>
                  <div className="pl-6 pb-2 space-y-1">
                    <Link href="/custom-software-development" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Custom Software Development</Link>
                    <Link href="/website-design-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Website Design</Link>
                    <Link href="/software-development-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Software Development</Link>
                    <Link href="/application-development-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Application Development</Link>
                    <Link href="/digital-marketing-service" className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</Link>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <div className="px-4 py-3">
                <button  
                  onClick={() => {
                    setIsPopupOpen(true);
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors"
                >
                  Get A Demo
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      <FreeTrialPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </div>
  );
}
