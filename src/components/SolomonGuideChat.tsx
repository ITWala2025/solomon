import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const SolomonGuideChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Dia duit! I'm the Solomon Grinds Digital Guide. How can I help you today? Ask about our Leaving Cert or Junior Cycle grinds, fees, Scoil Áine Naofa location, or examiner teachers.",
      timestamp: 'Just now'
    }
  ]);

  const quickQuestions = [
    "What are the fees?",
    "Where in Lucan are you?",
    "Tell me about the teachers",
    "What days do you operate?"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let botResponse = "Thank you for asking! For direct enquiries, Caitriona Hayes is available on 01 6284171 or WhatsApp at 087 2745234.";
      const lower = query.toLowerCase();

      if (lower.includes('fee') || lower.includes('cost') || lower.includes('price')) {
        botResponse = "Our standard fee is €20 per 1-hour class on a flexible pay-as-you-go basis (no rigid semester lock-ins). We also have multi-subject discounts: 2 subjects = €38/wk; 3 subjects = €55/wk (saving €150 over the year).";
      } else if (lower.includes('where') || lower.includes('location') || lower.includes('scoil') || lower.includes('bus') || lower.includes('parking')) {
        botResponse = "We are located at Scoil Áine Naofa on Newcastle Road, Lucan (K78 PF65), directly opposite SuperValu just off the N4. There is ample free parking inside the school gates, and Dublin Bus routes C1, C2, C4, L51, L52, and L53 stop right outside.";
      } else if (lower.includes('teacher') || lower.includes('staff') || lower.includes('examiner')) {
        botResponse = "All our teaching staff are hand-picked, experienced secondary school teachers who are past or present State Examinations Commission (SEC) examiners. They teach the exact secrets of the marking schemes and how to maximize partial credit.";
      } else if (lower.includes('day') || lower.includes('when') || lower.includes('time') || lower.includes('schedule')) {
        botResponse = "We operate on Wednesday Evenings (5:30 PM to 9:00 PM) and Saturday Mornings/Afternoons (9:30 AM to 2:15 PM). You can explore our live timetable above!";
      } else if (lower.includes('trial') || lower.includes('enrol') || lower.includes('book')) {
        botResponse = "Students are welcome to attend a trial class in their chosen subject! You can click the 'Enrol Now' button at the top of the page, or message Caitriona directly on WhatsApp.";
      }

      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-crimson-800 to-crimson-900 text-white rounded-full shadow-2xl hover:shadow-crimson-900/40 hover:scale-105 transition-all"
          aria-label="Open Admissions Assistant"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold hidden sm:inline">Ask Solomon Guide (AI)</span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-80 sm:w-96 overflow-hidden flex flex-col h-[480px] animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-crimson-850 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Solomon Guide</h4>
                <span className="text-[10px] text-amber-300 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  Admissions AI • Online 24/7
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-crimson-900 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-crimson-800 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Question Pills */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(q)}
                className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-crimson-50 text-slate-700 hover:text-crimson-800 border border-slate-200/80 transition flex-shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-1 focus:ring-crimson-700"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
