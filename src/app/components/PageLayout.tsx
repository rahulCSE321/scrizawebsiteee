"use client";

import {
  ChevronRightIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  SignalIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  PhoneIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  UsersIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  CogIcon,
  ComputerDesktopIcon,
  BoltIcon,
  LockClosedIcon,
  GlobeAltIcon,
  LanguageIcon,
  CurrencyDollarIcon,
  EyeIcon,
  ScaleIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  TagIcon,
  BellIcon,
  MapPinIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  CalculatorIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  IdentificationIcon,
  ExclamationTriangleIcon,
  TruckIcon,
  UserIcon,
  DocumentCheckIcon,
  TrophyIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import Header from "./Header";
import Footer from "./Footer";
import Certifications from "./Certifications";
import Breadcrumbs from "./Breadcrumbs";
import ChatWidgets from "./ChatWidgets";
import ContactForm from "./ContactForm";
import { PageContent } from "../data/pages-content";
import FreeTrialPopup from "./FreeTrialPopup";
import { useState } from "react";
import Link from "next/link";

interface PageLayoutProps {
  pageContent: PageContent;
}

export default function PageLayout({ pageContent }: PageLayoutProps) {
  const { hero, mainContent } = pageContent;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    PhoneIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    CreditCardIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ClockIcon,
    StarIcon,
    UsersIcon,
    BanknotesIcon,
    BuildingOfficeIcon,
    CogIcon,
    ComputerDesktopIcon,
    BoltIcon,
    LockClosedIcon,
    RocketLaunchIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    LanguageIcon,
    CurrencyDollarIcon,
    EyeIcon,
    ScaleIcon,
    DocumentTextIcon,
    PaintBrushIcon,
    TagIcon,
    BellIcon,
    MapPinIcon,
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
    PresentationChartLineIcon,
    ClipboardDocumentListIcon,
    ChatBubbleLeftRightIcon,
    CalculatorIcon,
    DocumentMagnifyingGlassIcon,
    AcademicCapIcon,
    WifiIcon,
    SignalIcon,
    IdentificationIcon,
    ExclamationTriangleIcon,
    TruckIcon,
    UserIcon,
    DocumentCheckIcon,
    TrophyIcon,
    CloudArrowUpIcon,
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - Professional Design */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#38857a] to-gray-800 py-16">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38857a]/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-32 h-32 border border-[#FF934C]/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#38857a]/30 rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#FF934C]/10 rounded-full"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#38857a]/20 to-[#FF934C]/20 border border-[#38857a]/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              {hero.subtitle}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>

            {/* Recharge Software Icons Grid - Only for recharge software page */}
            {pageContent.slug === "recharge-software-application" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-[#38857a]/20 to-[#38857a]/10 backdrop-blur-sm rounded-lg p-4 border border-[#38857a]/30">
                  <PhoneIcon className="w-8 h-8 text-[#FF934C] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Mobile Recharge</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF934C]/20 to-[#FF934C]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FF934C]/30">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-[#38857a] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">DTH Recharge</p>
                </div>
                <div className="bg-gradient-to-br from-[#38857a]/20 to-[#38857a]/10 backdrop-blur-sm rounded-lg p-4 border border-[#38857a]/30">
                  <BanknotesIcon className="w-8 h-8 text-[#FF934C] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Bill Payments</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF934C]/20 to-[#FF934C]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FF934C]/30">
                  <ShieldCheckIcon className="w-8 h-8 text-[#38857a] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Secure API</p>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-gradient-to-r from-[#38857a] to-[#38857a]/90 hover:from-[#38857a]/90 hover:to-[#38857a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                {hero.ctaText}
                <RocketLaunchIcon className="w-5 h-5 ml-2" />
              </button>
              {hero.ctaSecondary && (
                <button className="border-2 border-[#FF934C] text-[#FF934C] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF934C] hover:text-white transition-all duration-200 inline-flex items-center">
                  {hero.ctaSecondary}
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>

        <ChatWidgets />
      </section>

      {/* Main Content Sections */}
      {mainContent.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="py-16 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 leading-tight">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-base text-gray-600 font-normal leading-snug">
                  {section.subtitle}
                </p>
              )}
              {section.description && (
                <div className="max-w-2xl mx-auto mt-3 p-3 bg-gray-50 rounded-md border-l-4 border-[#38857a]">
                  <p className="text-sm text-gray-700 leading-normal italic">
                    &ldquo;{section.description}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {section.items.map((item, itemIndex) => {
  const iconKey = item.icon as keyof typeof iconMap;
  const IconComponent = iconMap[iconKey] ?? UserIcon;
  
  // Alternate between the two colors for variety
  const isOrange = itemIndex % 2 === 0;
  const iconBg = isOrange ? 'bg-[#FF934C]' : 'bg-[#38857a]';

  return (
    <div
      key={itemIndex}
      className="bg-white p-5 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200 group hover:shadow-sm"
    >
      <div
        className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200`}
      >
        <IconComponent className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 leading-normal">
        {item.description}
      </p>
    </div>
  );
})}

            </div>
          </div>
        </section>
      ))}

      {/* Contact Form Section - Only for recharge software page */}
      {pageContent.slug === "recharge-software-application" && <ContactForm />}

      {/* Contact Form Section - Only for money transfer software page */}
      {pageContent.slug === "money-transfer-software" && <ContactForm />}

      {/* Contact Form Section - Only for hotel management software page */}
      {pageContent.slug === "hotel-management-software" && <ContactForm />}

      {/* Contact Form Section - Only for CRM page */}
      {pageContent.slug === "crm" && <ContactForm />}

      {/* Contact Form Section - Only for HRMS software page */}
      {pageContent.slug === "hrms-software" && <ContactForm />}

      {/* Contact Form Section - Only for school management software page */}
      {pageContent.slug === "school-management-software" && <ContactForm />}

      {/* Contact Form Section - Only for AePS API page */}
      {pageContent.slug === "aeps-api" && <ContactForm />}

      {/* Contact Form Section - Only for Micro ATM Machine API Providers page */}
      {pageContent.slug === "micro-atm-machine-providers" && <ContactForm />}

      {/* Contact Form Section - Only for PAN Card API page */}
      {pageContent.slug === "pancard-api" && <ContactForm />}

      {/* Contact Form Section - Only for Payout API page */}
      {pageContent.slug === "payout-api-service" && <ContactForm />}

      {/* Contact Form Section - Only for Pay-in Service page */}
      {pageContent.slug === "pay-in-service" && <ContactForm />}

      {/* Contact Form Section - Only for UPI Collection API page */}
      {pageContent.slug === "upi-collection-api" && <ContactForm />}

      {/* Contact Form Section - Only for Credit Card Bill Pay API page */}
      {pageContent.slug === "credit-card-billpay-api" && <ContactForm />}

      {/* Contact Form Section - Only for Recharge API Provider page */}
      {pageContent.slug === "recharge-api-provider" && <ContactForm />}

      {/* Contact Form Section - Only for BBPS API page */}
      {pageContent.slug === "bbps-api" && <ContactForm />}

      {/* Contact Form Section - Only for LIC Premium API page */}
      {pageContent.slug === "lic-premium-api" && <ContactForm />}

      {/* Contact Form Section - Only for Verification API page */}
      {pageContent.slug === "verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for SMS API page */}
      {pageContent.slug === "sms-api" && <ContactForm />}

      {/* Contact Form Section - Only for WhatsApp API page */}
      {pageContent.slug === "whatsapp-api" && <ContactForm />}

      {/* Contact Form Section - Only for Bus Booking API page */}
      {pageContent.slug === "bus-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Hotel Booking API page */}
      {pageContent.slug === "hotel-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Air Booking API page */}
      {pageContent.slug === "air-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Bank Account Verification API page */}
      {pageContent.slug === "bank-account-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for UPI Verification API page */}
      {pageContent.slug === "upi-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for Aadhaar Validation API page */}
      {pageContent.slug === "aadhaar-validation-api" && <ContactForm />}

      {/* Contact Form Section - Only for Voter ID Verification API page */}
      {pageContent.slug === "voter-ID-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for Driving Licence Verification API page */}
      {pageContent.slug === "driving-licence-verification-api" && (
        <ContactForm />
      )}

      {/* Contact Form Section - Only for Vehicle RC Verification API page */}
      {pageContent.slug === "vehicle-rc-verification" && <ContactForm />}

      {/* Contact Form Section - Only for Website Design Service page */}
      {pageContent.slug === "website-design-service" && <ContactForm />}

      {/* Contact Form Section - Only for Software Development Service page */}
      {pageContent.slug === "software-development-service" && <ContactForm />}

      {/* Contact Form Section - Only for Application Development Service page */}
      {pageContent.slug === "application-development-service" && (
        <ContactForm />
      )}

      {/* Contact Form Section - Only for Digital Marketing Service page */}
      {pageContent.slug === "digital-marketing-service" && <ContactForm />}

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#38857a] rounded-lg flex items-center justify-center mx-auto mb-4">
              <RocketLaunchIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 leading-tight">
              Ready to get <span className="text-[#FF934C]">started?</span>
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-normal max-w-2xl mx-auto">
              Contact us today to discuss your project and see how we can help
              transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/about"
                className="bg-[#38857a] hover:bg-[#38857a]/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 inline-flex items-center text-sm"
              >
                About Us
                <RocketLaunchIcon className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/contact"
                className="border border-[#FF934C] text-[#FF934C] px-6 py-2.5 rounded-lg font-medium hover:bg-[#FF934C] hover:text-white transition-all duration-200 inline-flex items-center text-sm"
              >
                Contact Us
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />
      <FreeTrialPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
      <Footer />
    </div>
  );
}
