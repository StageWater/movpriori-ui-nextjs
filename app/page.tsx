"use client";
import React, { useState } from 'react';

export default function MovprioriDashboard() {
  // Simulasi hasil data mining dari association_rules_final.csv
  const [rules] = useState([
    { id: 1, antecedent: "The Matrix", consequent: "Inception", confidence: "85%", lift: 2.4 },
    { id: 2, antecedent: "The Dark Knight", consequent: "Interstellar", confidence: "78%", lift: 1.9 },
    { id: 3, antecedent: "Avengers: Endgame", consequent: "Spider-Man: No Way Home", confidence: "92%", lift: 3.1 },
    { id: 4, antecedent: "Toy Story", consequent: "Finding Nemo", confidence: "75%", lift: 1.5 },
  ]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header Section */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Movpriori.
          </h1>
          <nav>
            <ul className="space-x-6 text-sm font-medium text-slate-300 hidden md:flex">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">Dashboard</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">Dataset</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">Tentang Algoritma</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero / Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Sistem Rekomendasi <span className="text-indigo-400">Film Cerdas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Menganalisis pola asosiasi data penonton menggunakan algoritma Apriori untuk memberikan rekomendasi dengan akurasi tinggi.
          </p>
        </section>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center max-w-3xl mx-auto mb-12 shadow-2xl">
          <input
            type="text"
            placeholder="Ketik film yang pernah kamu tonton..."
            className="w-full px-6 py-4 rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-slate-800 border-2 border-slate-700 focus:outline-none focus:border-indigo-500 text-white placeholder-slate-500 transition-colors"
          />
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-b-xl md:rounded-r-xl md:rounded-bl-none font-semibold transition-colors duration-200 flex items-center justify-center">
            Analisis Pola
          </button>
        </div>

        {/* Grid Hasil */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold border-l-4 border-cyan-400 pl-3">
            Hasil Aturan Asosiasi (Apriori)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div 
              key={rule.id} 
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="bg-indigo-900/50 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-700/50 uppercase tracking-wide">
                  Rule #{rule.id}
                </span>
                <div className="flex items-center space-x-1 text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                  <span>Lift Ratio:</span>
                  <span className="font-bold text-cyan-400">{rule.lift}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Jika Menonton</p>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">{rule.antecedent}</h4>
              </div>

              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Maka Direkomendasikan</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-cyan-400">{rule.consequent}</h4>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                <span className="text-sm text-slate-400">Confidence</span>
                <span className="font-extrabold text-lg text-emerald-400">{rule.confidence}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}