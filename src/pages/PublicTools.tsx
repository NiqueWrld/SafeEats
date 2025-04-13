import React, { useState } from 'react';
import { QrCode, AlertOctagon, Send, Camera } from 'lucide-react';

export default function PublicTools() {
  const [reportForm, setReportForm] = useState({
    location: '',
    incidentType: '',
    description: '',
    contact: '',
  });

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', reportForm);
  };

  const handleReportChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReportForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Public Safety Tools</h1>
        <p className="mt-2 text-gray-600">Access tools to help ensure food safety in our schools</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Code Scanner */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <QrCode className="h-6 w-6 text-green-600" />
            <h2 className="ml-2 text-xl font-semibold text-gray-900">QR Code Scanner</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Scan QR codes on food packages to verify authenticity and track food sources.
          </p>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8">
            <div className="text-center">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Open Scanner
              </button>
            </div>
          </div>
        </div>

        {/* Incident Reporting Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <AlertOctagon className="h-6 w-6 text-green-600" />
            <h2 className="ml-2 text-xl font-semibold text-gray-900">Report an Incident</h2>
          </div>
          <form onSubmit={handleReportSubmit} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                School Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={reportForm.location}
                onChange={handleReportChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700">
                Incident Type
              </label>
              <select
                id="incidentType"
                name="incidentType"
                value={reportForm.incidentType}
                onChange={handleReportChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              >
                <option value="">Select an incident type</option>
                <option value="food-quality">Food Quality Issue</option>
                <option value="hygiene">Hygiene Concern</option>
                <option value="safety">Safety Violation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={reportForm.description}
                onChange={handleReportChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact Information (optional)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={reportForm.contact}
                onChange={handleReportChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Email or phone number"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Send className="h-5 w-5 mr-2" />
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}