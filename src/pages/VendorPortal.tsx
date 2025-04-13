import React, { useState } from 'react';
import { ClipboardCheck, AlertCircle, Building2, FileCheck, ChefHat, Award } from 'lucide-react';

export default function VendorPortal() {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    certifications: '',
    foodSafetyPolicy: false,
    haccp: false,
    healthCertificate: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Vendor Registration Portal</h1>
        <p className="mt-2 text-gray-600">Join our network of trusted food service providers</p>
      </div>

      {/* Requirements Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Registration Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Building2 className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Business Registration</h3>
              <p className="text-sm text-gray-500">Valid company registration documents</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FileCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Food Safety Certification</h3>
              <p className="text-sm text-gray-500">Current food safety certificates</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <ChefHat className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Kitchen Inspection</h3>
              <p className="text-sm text-gray-500">Passed health inspection</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Award className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Quality Standards</h3>
              <p className="text-sm text-gray-500">Meet SafeEats quality criteria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Vendor Registration Form</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Business Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
            Food Safety Certifications
          </label>
          <textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="List your current food safety certifications..."
            required
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700">Required Documents</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="foodSafetyPolicy"
                name="foodSafetyPolicy"
                checked={formData.foodSafetyPolicy}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="foodSafetyPolicy" className="ml-2 block text-sm text-gray-700">
                Food Safety Policy
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="haccp"
                name="haccp"
                checked={formData.haccp}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="haccp" className="ml-2 block text-sm text-gray-700">
                HACCP Certification
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="healthCertificate"
                name="healthCertificate"
                checked={formData.healthCertificate}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="healthCertificate" className="ml-2 block text-sm text-gray-700">
                Health Certificate
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center text-amber-600">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span className="text-sm">All fields are required</span>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <ClipboardCheck className="h-5 w-5 mr-2" />
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}