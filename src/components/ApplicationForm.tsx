'use client';

import React, { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    immediateJoining: 'Yes',
    currentSalary: '',
    expectedSalary: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreedToTerms: false,
  });

  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('بيانات الاستمارة:', formData, 'السيرة الذاتية:', cvFile);
    // يمكنك هنا ربط البيانات مع مسار الـ API الخاص بـ EvaluationAgent
  };

  return (
    <div className="min-h-screen bg-[#07365d] text-white flex items-center justify-center p-4 sm:p-6 dir-ltr">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#094171] p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-400/20 space-y-6"
      >
        {/* Immediate Joining */}
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-100">
            Are you available for immediate joining?*
          </label>
          <div className="flex gap-4">
            <label className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg cursor-pointer transition ${formData.immediateJoining === 'Yes' ? 'bg-white text-[#07365d] font-semibold' : 'bg-blue-900/40 text-white border border-blue-400/30'}`}>
              <input 
                type="radio" 
                name="immediateJoining" 
                value="Yes" 
                checked={formData.immediateJoining === 'Yes'}
                onChange={(e) => setFormData({...formData, immediateJoining: e.target.value})}
                className="hidden" 
              />
              Yes
            </label>
            <label className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg cursor-pointer transition ${formData.immediateJoining === 'No' ? 'bg-white text-[#07365d] font-semibold' : 'bg-blue-900/40 text-white border border-blue-400/30'}`}>
              <input 
                type="radio" 
                name="immediateJoining" 
                value="No" 
                checked={formData.immediateJoining === 'No'}
                onChange={(e) => setFormData({...formData, immediateJoining: e.target.value})}
                className="hidden" 
              />
              No
            </label>
          </div>
        </div>

        {/* Current Salary */}
        <div>
          <label className="block text-sm font-medium mb-1 text-blue-100">
            Current Salary Package (Fixed + Benefits):
          </label>
          <input 
            type="text" 
            value={formData.currentSalary}
            onChange={(e) => setFormData({...formData, currentSalary: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label className="block text-sm font-medium mb-1 text-blue-100">
            Expected Salary:
          </label>
          <input 
            type="text" 
            value={formData.expectedSalary}
            onChange={(e) => setFormData({...formData, expectedSalary: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
          />
        </div>

        {/* Divider - Personal information */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="border-t border-blue-300/40 w-full"></div>
          <span className="bg-[#094171] px-4 text-sm text-blue-200 font-medium whitespace-nowrap">
            Personal information
          </span>
          <div className="border-t border-blue-300/40 w-full"></div>
        </div>

        {/* Apply with LinkedIn Button Container */}
        <div className="bg-white p-3 rounded-xl flex justify-center shadow-sm">
          <button 
            type="button" 
            className="bg-[#0077b5] hover:bg-[#005f93] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            Apply with LinkedIn
          </button>
        </div>

        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-100">First name*</label>
            <input 
              type="text" 
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-100">Last name*</label>
            <input 
              type="text" 
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-100">Email*</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-100">Phone*</label>
            <div className="flex bg-white rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-300">
              <span className="flex items-center gap-1 bg-gray-100 px-3 border-r border-gray-200 text-gray-700 text-sm font-medium">
                🇦🇪 +971
              </span>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-3 text-gray-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Upload CV */}
        <div>
          <label className="block text-sm font-medium mb-1 text-blue-100">Upload CV*</label>
          <label className="flex flex-col items-center justify-center w-full h-20 bg-white rounded-lg cursor-pointer border-2 border-dashed border-blue-200 hover:border-blue-400 transition">
            <span className="text-gray-500 text-sm font-medium">
              {cvFile ? cvFile.name : 'Drop your file or upload'}
            </span>
            <input 
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden" 
            />
          </label>
        </div>

        {/* Terms & Privacy */}
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            required
            id="terms"
            checked={formData.agreedToTerms}
            onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
            className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-400"
          />
          <label htmlFor="terms" className="text-xs text-blue-100 leading-relaxed">
            By submitting this application, I agree that I have read the{' '}
            <a href="#" className="underline font-semibold hover:text-white">Privacy Policy</a>{' '}
            and confirm that ProHR AI store my personal details to be able to process my job application.*
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3.5 px-6 rounded-xl bg-[#062c4a] hover:bg-[#041e33] text-white font-semibold text-base shadow-lg transition border border-blue-400/30"
        >
          Submit application
        </button>
      </form>
    </div>
  );
}
