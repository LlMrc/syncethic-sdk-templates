"use client";

import { ChatWidget } from "@syncethic/sdk/react";

export default function TestSDKPage() {
  const apiKey = process.env.NEXT_PUBLIC_SYNCETHIC_API_KEY || "sk_global_your_apikey_here";
  const botSlug = process.env.NEXT_PUBLIC_SYNCETHIC_BOT_SLUG || "finance_advisor";
  const endpoint = process.env.NEXT_PUBLIC_SYNCETHIC_ENDPOINT || "https://syncethicai.com/api/v1/chat";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-slate-50 text-slate-900 border-t-4 border-indigo-600 overflow-hidden">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        <header className="space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
            SyncEthic SDK Template
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Chatbot Integration <br />
            <span className="text-indigo-600 text-6xl">Ready to Use</span>
          </h1>
          <p className="text-xl text-slate-600">
            This is a clean, production-ready template for embedding your SyncEthic AI Chatbot.
          </p>
        </header>
        
        <main className="p-8 bg-white rounded-3xl shadow-2xl shadow-indigo-200/50 border border-slate-100 text-left relative overflow-hidden group">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Configuration Status
          </h2>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-indigo-500 font-bold uppercase text-[10px]">Your API Key</span>
              <code className="text-sm text-slate-600 font-mono break-all">{apiKey}</code>
            </div>
            <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-indigo-500 font-bold uppercase text-[10px]">Target Bot</span>
              <span className="text-sm font-mono text-slate-600">{botSlug}</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 italic text-slate-400 text-sm text-center">
            Modify <code>.env.local</code> to see your chatbot in action.
          </div>
        </main>
      </div>

      {/* Instructional Arrow & Animation */}
      <div className="fixed bottom-24 right-4 flex flex-col items-center animate-bounce">
        <span className="text-sm font-bold text-indigo-600 mb-2 bg-white px-3 py-1 rounded-full shadow-lg border border-indigo-100">
          Try it now!
        </span>
        <svg 
          className="w-10 h-10 text-indigo-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>

      {/* Integration du Widget */}
      <ChatWidget 
        apiKey={apiKey}
        botSlug={botSlug}
        endpoint={endpoint}
        primaryColor="#4f46e5"
        botName={botSlug === "finance_advisor" ? "Finance Advisor" : "AI Assistant"}
        style={{ height: '520px', maxHeight: 'calc(100vh - 120px)' }}
      />
    </div>
  );
}
