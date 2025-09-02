'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

interface AISolutionPackagesProps {
  dictionary: {
    aiPackages: {
      title: string;
      subtitle: string;
      packages: {
        basic: Package;
        professional: Package;
        enterprise: Package;
        premium: Package;
        community: Package;
      };
    };
  };
}

const AISolutionPackages: React.FC<AISolutionPackagesProps> = ({ dictionary }) => {
  const { aiPackages } = dictionary;
  
  // Filter out premium and community packages
  const availablePackages = {
    basic: aiPackages.packages.basic,
    professional: aiPackages.packages.professional,
    enterprise: aiPackages.packages.enterprise
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {aiPackages.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aiPackages.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(availablePackages).map(([key, pkg]) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Nejpopulárnější
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  {pkg.price !== 'Zdarma' && pkg.price !== 'Free' && (
                    <span className="text-gray-500 ml-2">/měsíc</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.href}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Premium and Community packages are commented out */}
        {/*
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{aiPackages.packages.premium.name}</h3>
            </div>
            <p className="text-gray-600 mb-6">{aiPackages.packages.premium.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">{aiPackages.packages.premium.price}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {aiPackages.packages.premium.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={aiPackages.packages.premium.href}
              className="block w-full text-center py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              {aiPackages.packages.premium.cta}
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{aiPackages.packages.community.name}</h3>
            </div>
            <p className="text-gray-600 mb-6">{aiPackages.packages.community.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">{aiPackages.packages.community.price}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {aiPackages.packages.community.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={aiPackages.packages.community.href}
              className="block w-full text-center py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
            >
              {aiPackages.packages.community.cta}
            </Link>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default AISolutionPackages;