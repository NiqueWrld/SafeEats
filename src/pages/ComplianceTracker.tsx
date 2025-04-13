import React from 'react';
import { ClipboardCheck } from 'lucide-react';

function ComplianceTracker() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <ClipboardCheck className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Compliance Tracker</h1>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600">Welcome to the Compliance Tracker dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default ComplianceTracker;