"use client";

import { useState } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState("new");
  const [gstTurnover, setGstTurnover] = useState("");
  const [calculatedTax, setCalculatedTax] = useState(null);
  const [calculatedGst, setCalculatedGst] = useState(null);

  const calculateIncomeTax = (annualIncome, taxRegime) => {
    let tax = 0;
    const incomeNum = parseFloat(annualIncome) || 0;

    if (taxRegime === "new") {
      // New Tax Regime 2024-25
      if (incomeNum <= 300000) tax = 0;
      else if (incomeNum <= 600000) tax = (incomeNum - 300000) * 0.05;
      else if (incomeNum <= 900000) tax = 15000 + (incomeNum - 600000) * 0.10;
      else if (incomeNum <= 1200000) tax = 45000 + (incomeNum - 900000) * 0.15;
      else if (incomeNum <= 1500000) tax = 90000 + (incomeNum - 1200000) * 0.20;
      else tax = 150000 + (incomeNum - 1500000) * 0.30;
    } else {
      // Old Tax Regime with deductions
      const standardDeduction = 50000;
      const taxableIncome = Math.max(0, incomeNum - standardDeduction);
      
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
      else tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }

    return Math.round(tax);
  };

  const calculateGST = (turnover) => {
    const turnoverNum = parseFloat(turnover) || 0;
    if (turnoverNum < 2000000) return 0; // No GST for turnover below 20L
    return Math.round(turnoverNum * 0.18); // 18% GST
  };

  const handleIncomeTaxCalculate = () => {
    if (income) {
      const tax = calculateIncomeTax(income, regime);
      setCalculatedTax(tax);
    }
  };

  const handleGSTCalculate = () => {
    if (gstTurnover) {
      const gst = calculateGST(gstTurnover);
      setCalculatedGst(gst);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tax Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your income tax and GST liability instantly with our advanced calculators
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Income Tax Calculator */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mr-4">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Income Tax Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income (₹)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="Enter your annual income"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Regime
                </label>
                <select
                  value={regime}
                  onChange={(e) => setRegime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="new">New Tax Regime (2024-25)</option>
                  <option value="old">Old Tax Regime (with deductions)</option>
                </select>
              </div>

              <button
                onClick={handleIncomeTaxCalculate}
                className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                Calculate Tax
              </button>

              {calculatedTax !== null && (
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ₹{calculatedTax.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Estimated Annual Tax</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Monthly: ₹{Math.round(calculatedTax / 12).toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* GST Calculator */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl mr-4">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900">GST Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Turnover (₹)
                </label>
                <input
                  type="number"
                  value={gstTurnover}
                  onChange={(e) => setGstTurnover(e.target.value)}
                  placeholder="Enter your annual turnover"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-sm text-gray-600 mb-2">GST Registration Required:</div>
                <div className="text-lg font-semibold text-green-600">
                  {parseFloat(gstTurnover) >= 2000000 ? "Yes (Mandatory)" : "No (Optional)"}
                </div>
              </div>

              <button
                onClick={handleGSTCalculate}
                className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Calculate GST
              </button>

              {calculatedGst !== null && (
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ₹{calculatedGst.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Estimated Annual GST</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Monthly: ₹{Math.round(calculatedGst / 12).toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Tax Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Our tax experts can provide personalized calculations and help optimize your tax liability. 
              Get a free consultation today.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-300">
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}