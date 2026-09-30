import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  Phone,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  Settings,
} from "lucide-react";
import { CLINIC_INFO } from "../types";
import { playChime } from "../lib/sound";

interface ChatMessage {
  id: string;
  sender: "bot" | "user" | "system";
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    url?: string;
    action?: string;
    primary?: boolean;
  }>;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! Welcome to Spatium Urgent Care & Wellness in Marietta, GA. 👋",
    timestamp: "Just now",
  },
  {
    id: "welcome-2",
    sender: "bot",
    text: "How can we assist you today? You can choose a quick question below or type your message.",
    timestamp: "Just now",
    actions: [
      { label: "⏱️ Check Current Wait Time", action: "wait_time" },
      { label: "📅 Book an Appointment", action: "book_apt", primary: true },
      { label: "💳 Insurance & Self-Pay Fees", action: "insurance" },
      { label: "🩺 Walk-in Policy", action: "walkin" },
      { label: "💊 Weight Loss & GLP-1 Info", action: "weight_loss" },
      { label: "📞 Request Front Desk Callback", action: "callback" },
    ],
  },
];

const LOCAL_STORAGE_KEY = "spatium_live_chat_history_v2";
const TAWK_PROPERTY_STORAGE_KEY = "spatium_tawk_property_id";

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"assistant" | "tawk" | "callback">("assistant");
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Fallback
    }
    return INITIAL_MESSAGES;
  });

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  // Callback form state
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackReason, setCallbackReason] = useState("");
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackTicket, setCallbackTicket] = useState("");

  // Tawk.to configuration state
  const [tawkKey, setTawkKey] = useState<string>(() => {
    try {
      return localStorage.getItem(TAWK_PROPERTY_STORAGE_KEY) || "";
    } catch {
      return "";
    }
  });
  const [tawkLoaded, setTawkLoaded] = useState(false);
  const [showTawkSettings, setShowTawkSettings] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Persist messages
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Ignore
    }
  }, [messages]);

  // Save Tawk key
  useEffect(() => {
    try {
      if (tawkKey) {
        localStorage.setItem(TAWK_PROPERTY_STORAGE_KEY, tawkKey);
      }
    } catch {
      // Ignore
    }
  }, [tawkKey]);

  // Load official Tawk.to script if property ID is provided
  useEffect(() => {
    if (activeTab === "tawk" && tawkKey.trim() && !tawkLoaded) {
      // Clean script injection
      const existingScript = document.getElementById("tawk-embed-script");
      if (existingScript) existingScript.remove();

      // Format propertyId/widgetId
      let src = tawkKey.trim();
      if (!src.startsWith("http")) {
        src = `https://embed.tawk.to/${src}`;
      }

      const s1 = document.createElement("script");
      s1.id = "tawk-embed-script";
      s1.async = true;
      s1.src = src;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s1.onload = () => setTawkLoaded(true);
      document.head.appendChild(s1);
    }
  }, [activeTab, tawkKey, tawkLoaded]);

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addBotMessage = (text: string, actions?: ChatMessage["actions"]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions,
      };
      setMessages((prev) => [...prev, newMsg]);

      if (soundEnabled) {
        playChime();
      }

      if (!isOpen) {
        setUnreadCount((c) => c + 1);
      }
    }, 700);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputVal.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    processUserQuery(query);
  };

  const handleActionClick = (action: string) => {
    if (action === "wait_time") {
      processUserQuery("wait time");
    } else if (action === "book_apt") {
      processUserQuery("book appointment");
    } else if (action === "insurance") {
      processUserQuery("insurance");
    } else if (action === "walkin") {
      processUserQuery("walk in");
    } else if (action === "weight_loss") {
      processUserQuery("weight loss");
    } else if (action === "callback") {
      setActiveTab("callback");
    } else if (action === "body_sculpt") {
      processUserQuery("body sculpting");
    } else if (action === "covid") {
      processUserQuery("covid test");
    } else if (action === "hours") {
      processUserQuery("hours");
    }
  };

  const processUserQuery = (query: string) => {
    const q = query.toLowerCase();

    // Emergency check
    if (
      q.includes("chest pain") ||
      q.includes("heart attack") ||
      q.includes("stroke") ||
      q.includes("can't breathe") ||
      q.includes("cannot breathe") ||
      q.includes("unconscious") ||
      q.includes("severe bleed")
    ) {
      addBotMessage(
        "⚠️ EMERGENCY NOTICE: If you or someone with you is experiencing severe chest pain, extreme shortness of breath, sudden numbness, or life-threatening symptoms, please call 911 or go immediately to the nearest Emergency Room. Urgent care clinics cannot treat acute life-threatening emergencies.",
        [
          { label: "🚨 Call 911 Now", url: "tel:911", primary: true },
          { label: "📞 Call Spatium Urgent Care (678-932-2121)", url: `tel:${CLINIC_INFO.phoneNumeric}` },
        ]
      );
      return;
    }

    // Wait time
    if (q.includes("wait") || q.includes("busy") || q.includes("queue") || q.includes("line")) {
      addBotMessage(
        "Current estimated wait time at our Marietta clinic is approximately 10–15 minutes (with 2–3 patients in queue). We accept both walk-ins and online reservations! You can reserve your spot online before arriving to minimize waiting.",
        [
          { label: "📅 Save Spot & Book Online", url: CLINIC_INFO.bookingUrl, primary: true },
          { label: "📍 View Clinic Directions", url: CLINIC_INFO.mapsUrl },
        ]
      );
      return;
    }

    // Booking & Appointment
    if (q.includes("book") || q.includes("appointment") || q.includes("schedule") || q.includes("reserve")) {
      addBotMessage(
        "You can instantly reserve an urgent care, primary care, or wellness visit online through our official booking portal. Walk-ins are also welcome anytime during clinic hours!",
        [
          { label: "👉 Click Here to Book Online", url: CLINIC_INFO.bookingUrl, primary: true },
          { label: "📞 Call to Schedule: (678) 932-2121", url: `tel:${CLINIC_INFO.phoneNumeric}` },
        ]
      );
      return;
    }

    // Insurance & Pricing
    if (
      q.includes("insurance") ||
      q.includes("cost") ||
      q.includes("price") ||
      q.includes("copay") ||
      q.includes("self pay") ||
      q.includes("cash") ||
      q.includes("cherry")
    ) {
      addBotMessage(
        "Spatium Urgent Care accepts most major commercial insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, Humana, Tricare, and more.\n\nNo insurance? We offer transparent self-pay pricing starting at $99 per visit. We also support Cherry Financing for flexible 0% APR monthly payment plans on wellness & aesthetic services.",
        [
          { label: "💳 View Financing Options", url: "/financing" },
          { label: "📞 Call Billing: (678) 932-2121", url: `tel:${CLINIC_INFO.phoneNumeric}` },
          { label: "📅 Book Self-Pay Visit", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // Walk-ins
    if (q.includes("walk in") || q.includes("walk-in") || q.includes("walkin")) {
      addBotMessage(
        "Yes! Walk-ins are always warmly welcomed at Spatium Urgent Care. No prior appointment is required. If you prefer, you can also save your spot in line before driving over.",
        [
          { label: "📍 Get Directions (3595 Canton Rd)", url: CLINIC_INFO.mapsUrl },
          { label: "📅 Save My Spot Online", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // Weight loss & GLP-1
    if (
      q.includes("weight") ||
      q.includes("glp") ||
      q.includes("semaglutide") ||
      q.includes("tirzepatide") ||
      q.includes("diet") ||
      q.includes("ozempic")
    ) {
      addBotMessage(
        "Our Medically Supervised Weight Loss Program features doctor-guided Semaglutide and Tirzepatide (GLP-1) therapies. We are currently offering a promotional starter rate of $199! Treatments include baseline assessments, nutrition counseling, and ongoing physician monitoring.",
        [
          { label: "💉 Weight Loss Program Details", url: "/weight-loss-program-spatium" },
          { label: "📅 Book Weight Loss Consultation", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // Aesthetics & Body Sculpting
    if (
      q.includes("aesthetic") ||
      q.includes("botox") ||
      q.includes("facial") ||
      q.includes("skin") ||
      q.includes("emsculpt") ||
      q.includes("body sculpt") ||
      q.includes("muscle")
    ) {
      addBotMessage(
        "Spatium Wellness provides premium medical aesthetics (Botox, chemical peels, microneedling, dermaplaning) and EMSCULPT NEO non-invasive body sculpting (burns fat and builds muscle simultaneously in 30 minutes).",
        [
          { label: "✨ Explore Aesthetics Menu", url: "/aesthetics" },
          { label: "💪 EMSCULPT NEO Details", url: "/body-sculpting" },
          { label: "📅 Book Consultation", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // Primary Care
    if (q.includes("primary") || q.includes("dawn") || q.includes("chronic") || q.includes("doctor") || q.includes("physical")) {
      addBotMessage(
        "Dawn Primary Care at Spatium provides comprehensive family medicine, chronic condition management (diabetes, hypertension, asthma), annual wellness physicals, lab work, and $99/monthly unlimited care memberships!",
        [
          { label: "🩺 Dawn Primary Care Page", url: "/dawn-primary-care-service" },
          { label: "📞 Call Primary Care: (678) 932-2138", url: `tel:${CLINIC_INFO.primaryPhoneNumeric}` },
          { label: "📅 Book Primary Visit", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // COVID / Flu / Testing
    if (q.includes("covid") || q.includes("flu") || q.includes("strep") || q.includes("test") || q.includes("rsv") || q.includes("lab")) {
      addBotMessage(
        "We offer rapid on-site testing with results in as fast as 15 minutes! Services include Rapid COVID-19 Antigen & PCR, Flu A/B, RSV, Rapid Strep Throat, Urinalysis, EKG, and blood glucose testing.",
        [
          { label: "🧪 COVID-19 & Testing Details", url: "/covid-19-testing" },
          { label: "📅 Book Rapid Testing Visit", url: CLINIC_INFO.bookingUrl, primary: true },
        ]
      );
      return;
    }

    // Hours & Address
    if (q.includes("hour") || q.includes("open") || q.includes("close") || q.includes("location") || q.includes("where") || q.includes("address")) {
      addBotMessage(
        `📍 Address: ${CLINIC_INFO.address}\n\n🕒 Hours:\n• Monday – Friday: 10:00 AM – 7:00 PM\n• Saturday & Sunday: Closed\n\nWalk-ins are welcomed throughout open hours!`,
        [
          { label: "📍 Open in Google Maps", url: CLINIC_INFO.mapsUrl },
          { label: "📞 Call: (678) 932-2121", url: `tel:${CLINIC_INFO.phoneNumeric}` },
        ]
      );
      return;
    }

    // Contact / Human Callback
    if (q.includes("call") || q.includes("phone") || q.includes("speak") || q.includes("human") || q.includes("front desk")) {
      addBotMessage(
        "Would you like our front desk staff to call you directly? You can call us immediately at (678) 932-2121 or submit our quick callback request form.",
        [
          { label: "📞 Call (678) 932-2121", url: `tel:${CLINIC_INFO.phoneNumeric}`, primary: true },
          { label: "📝 Request Front Desk Callback", action: "callback" },
        ]
      );
      return;
    }

    // Default intelligent response
    addBotMessage(
      "Thank you for contacting Spatium Urgent Care & Wellness. Our team can help you with walk-in visits, primary care, medically supervised weight loss, and aesthetics.\n\nHow else can I help you?",
      [
        { label: "📅 Book an Appointment", url: CLINIC_INFO.bookingUrl, primary: true },
        { label: "⏱️ Check Wait Time", action: "wait_time" },
        { label: "💳 Insurance & Pricing", action: "insurance" },
        { label: "📞 Call Clinic Now", url: `tel:${CLINIC_INFO.phoneNumeric}` },
      ]
    );
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName.trim() || !callbackPhone.trim()) return;

    const ticketId = `SP-${Math.floor(1000 + Math.random() * 9000)}`;
    setCallbackTicket(ticketId);
    setCallbackSubmitted(true);

    // Also add to chat log
    const confirmationMsg: ChatMessage = {
      id: `sys-${Date.now()}`,
      sender: "system",
      text: `✅ Callback Request Submitted (Ticket #${ticketId})\nName: ${callbackName}\nPhone: ${callbackPhone}\nNote: ${callbackReason || "General inquiry"}\n\nOur front desk coordinator will contact you promptly during business hours.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, confirmationMsg]);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 md:bottom-6 md:right-6">
      {/* 1. LAUNCHER BUTTON */}
      {!isOpen && (
        <div className="relative group flex items-center">
          {/* Subtle Tooltip Pill */}
          <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-full shadow-md border border-slate-200 pointer-events-none transition-all group-hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with Spatium Care</span>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            aria-label="Open live chat"
            className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary/30"
            style={{
              background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
            }}
          >
            <MessageCircle className="w-7 h-7" />
            {/* Live Online Badge */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full" />

            {/* Unread Message Indicator */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      )}

      {/* 2. CHAT WINDOW MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-heading"
          className="w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* A. HEADER */}
          <div
            className="px-4 py-3.5 text-white flex items-center justify-between select-none"
            style={{
              background: "linear-gradient(135deg, #007045 0%, #26a069 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-white border border-white/30 text-sm">
                  SC
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-900 rounded-full" />
              </div>
              <div>
                <h3 id="chat-heading" className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                  <span>Spatium Live Care</span>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                </h3>
                <p className="text-[11px] text-white/85">Marietta Clinic · Fast Responses</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSoundEnabled((prev) => !prev)}
                title={soundEnabled ? "Mute audio chime" : "Enable audio chime"}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={soundEnabled ? "Mute chime" : "Enable chime"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart conversation"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* B. TAB SELECTOR */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200 text-xs">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("assistant")}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === "assistant"
                    ? "bg-white text-emerald-800 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Virtual Receptionist
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("callback")}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === "callback"
                    ? "bg-white text-emerald-800 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Request Callback
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tawk")}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === "tawk"
                    ? "bg-white text-emerald-800 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Tawk.to Live
              </button>
            </div>
          </div>

          {/* C. BODY CONTENT BY TAB */}
          {activeTab === "assistant" && (
            <>
              {/* Emergency Banner */}
              <div className="bg-amber-50 px-3 py-1.5 border-b border-amber-200 flex items-center justify-between text-[11px] text-amber-900">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>For life-threatening emergencies, call 911 immediately.</span>
                </span>
                <a href="tel:911" className="font-bold text-amber-950 underline hover:no-underline">
                  911
                </a>
              </div>

              {/* Messages list */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 bg-slate-50/50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-xs"
                          : msg.sender === "system"
                          ? "bg-emerald-50 text-emerald-950 border border-emerald-200 text-xs"
                          : "bg-white text-slate-800 shadow-xs border border-slate-200 rounded-bl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Interactive Action Buttons */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                          {msg.actions.map((act, idx) => {
                            if (act.url) {
                              const isExternal = act.url.startsWith("http") || act.url.startsWith("tel:");
                              return (
                                <a
                                  key={idx}
                                  href={act.url}
                                  target={isExternal && !act.url.startsWith("tel:") ? "_blank" : undefined}
                                  rel={isExternal && !act.url.startsWith("tel:") ? "noopener noreferrer" : undefined}
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                                    act.primary
                                      ? "bg-primary text-white hover:bg-emerald-800 shadow-xs"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  <span>{act.label}</span>
                                  {isExternal && !act.url.startsWith("tel:") && (
                                    <ExternalLink className="w-3 h-3 opacity-70" />
                                  )}
                                </a>
                              );
                            }
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => act.action && handleActionClick(act.action)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                                  act.primary
                                    ? "bg-primary text-white hover:bg-emerald-800 shadow-xs"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                              >
                                {act.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-3 bg-white text-slate-500 rounded-2xl rounded-bl-xs border border-slate-200 max-w-[120px] shadow-xs">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask a question (wait time, fees, services)..."
                  maxLength={300}
                  className="flex-1 bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-transparent focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="px-4 py-2.5 bg-primary hover:bg-emerald-800 disabled:opacity-40 text-white rounded-xl font-semibold flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

          {/* D. CALLBACK REQUEST TAB */}
          {activeTab === "callback" && (
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
              <div className="max-w-sm mx-auto">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary mx-auto flex items-center justify-center mb-2">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Request Front Desk Callback</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Leave your details and our Marietta clinic reception will call you back shortly.
                  </p>
                </div>

                {callbackSubmitted ? (
                  <div className="bg-white p-6 rounded-xl border border-emerald-200 text-center shadow-xs">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h5 className="font-bold text-slate-900 text-sm">Request Confirmed!</h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Ticket <span className="font-mono font-bold text-emerald-800">{callbackTicket}</span> has been logged.
                    </p>
                    <p className="text-xs text-slate-500 mt-3">
                      Need immediate assistance? You can also call us directly right now:
                    </p>
                    <a
                      href={`tel:${CLINIC_INFO.phoneNumeric}`}
                      className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call (678) 932-2121</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setCallbackSubmitted(false);
                        setCallbackName("");
                        setCallbackPhone("");
                        setCallbackReason("");
                      }}
                      className="block mx-auto mt-4 text-xs text-slate-400 hover:text-slate-700"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        placeholder="e.g. John Doe"
                        maxLength={60}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        placeholder="e.g. (678) 932-2121"
                        maxLength={20}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Reason for Contact (Optional)
                      </label>
                      <textarea
                        value={callbackReason}
                        onChange={(e) => setCallbackReason(e.target.value)}
                        placeholder="e.g. Question about wait times, weight loss, or billing..."
                        rows={2}
                        maxLength={200}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-primary hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      Submit Callback Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* E. TAWK.TO LIVE AGENT TAB */}
          {activeTab === "tawk" && (
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="text-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-2 font-bold text-xs">
                    tawk
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">tawk.to Live Chat Integration</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Connect directly to your active tawk.to human agent dashboard.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-xs text-slate-700 shadow-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Direct Agent Chat:</span> Use your free tawk.to property to chat with patients on your mobile app or browser dashboard in real time.
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Your tawk.to Property ID / Widget URL:
                    </label>
                    <input
                      type="text"
                      value={tawkKey}
                      onChange={(e) => setTawkKey(e.target.value)}
                      placeholder="e.g. 64b8a1c.../1h4..."
                      className="w-full font-mono text-[11px] px-3 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">
                      Find this in your tawk.to dashboard under <em>Administration → Property → Widget Code</em>.
                    </p>
                  </div>

                  {tawkKey.trim() && (
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={tawkKey.startsWith("http") ? tawkKey : `https://tawk.to/chat/${tawkKey}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Open tawk.to Dedicated Window</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 mt-4">
                <span className="font-semibold">Need 24/7 automated assistance?</span> You can switch back to our built-in <strong>Virtual Receptionist</strong> tab anytime for instant answers to common patient questions.
              </div>
            </div>
          )}

          {/* F. FOOTER ACTIONS */}
          <div className="px-3.5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-600" />
              <span>Mon–Fri: 10am–7pm</span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneNumeric}`}
                className="font-medium text-slate-700 hover:text-primary transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call Clinic</span>
              </a>
              <a
                href={CLINIC_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline flex items-center gap-0.5"
              >
                <Calendar className="w-3 h-3" />
                <span>Book Visit</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
