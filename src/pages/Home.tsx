import React from 'react';
import { Shield, Users, School, Award } from 'lucide-react';
import Scanner3D from '../components/Scanner3D';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Protecting Our Children's
          <span className="text-green-600"> Food Safety</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          SafeEats Solutions is dedicated to ensuring the safety and quality of school feeding schemes
          through innovative monitoring and compliance systems.
        </p>
      </div>

      {/* 3D Scanner Section */}
      <div className="max-w-3xl mx-auto">
        <Scanner3D />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 -mt-4 mr-4 bg-green-600 rounded-full p-2">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Quality Assurance</h3>
          <p className="mt-2 text-gray-500">
            Comprehensive monitoring system to ensure food safety standards are met consistently.
          </p>
        </div>

        <div className="relative rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 -mt-4 mr-4 bg-green-600 rounded-full p-2">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Vendor Management</h3>
          <p className="mt-2 text-gray-500">
            Streamlined registration and monitoring of food service providers.
          </p>
        </div>

        <div className="relative rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 -mt-4 mr-4 bg-green-600 rounded-full p-2">
            <School className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">School Support</h3>
          <p className="mt-2 text-gray-500">
            Dedicated tools and resources for schools to manage their feeding schemes effectively.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-green-600 rounded-lg shadow-xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by Schools Nationwide
            </h2>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Schools Protected
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">1000+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Registered Vendors
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">500+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Students Served
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">250K+</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ready to ensure food safety at your school?
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/school"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get Started
              <Award className="ml-3 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}