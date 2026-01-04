'use client';

import { useState, useEffect, useRef } from 'react';

const ConversationHub = ({ selectedLead, onSelectLead }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Sample conversations
  const conversations = [
    {
      id: 1,
      lead: {
        id: 1,
        name: 'John Martinez',
        email: 'john.martinez@email.com',
        equipment: 'Caterpillar 320D Excavator'
      },
      messages: [
        {
          id: 1,
          sender: 'buyer',
          text: 'I\'m interested in this excavator. Can you provide more details about its maintenance history?',
          time: '2026-01-15 10:30 AM'
        },
        {
          id: 2,
          sender: 'operator',
          text: 'Hello John! Thank you for your interest. The Caterpillar 320D has been well-maintained with regular service records. I can send you the complete maintenance history. Would you like to schedule an inspection?',
          time: '2026-01-15 11:15 AM'
        },
        {
          id: 3,
          sender: 'buyer',
          text: 'Yes, that would be great. When would be a good time?',
          time: '2026-01-15 2:30 PM'
        }
      ]
    },
    {
      id: 2,
      lead: {
        id: 2,
        name: 'Maria Rodriguez',
        email: 'maria.rodriguez@email.com',
        equipment: 'John Deere 872GP Wheel Loader'
      },
      messages: [
        {
          id: 1,
          sender: 'buyer',
          text: 'What is the best price you can offer? I\'m ready to purchase this week.',
          time: '2026-01-14 2:15 PM'
        },
        {
          id: 2,
          sender: 'operator',
          text: 'Hi Maria! The listed price is $97,500, but I can offer you $95,000 for a quick sale. The machine is in excellent condition with only 2,800 hours.',
          time: '2026-01-14 3:00 PM'
        }
      ]
    }
  ];

  const [activeConversation, setActiveConversation] = useState(
    selectedLead 
      ? conversations.find(c => c.lead.id === selectedLead.id) || conversations[0]
      : conversations[0]
  );

  useEffect(() => {
    if (selectedLead) {
      const conversation = conversations.find(c => c.lead.id === selectedLead.id);
      if (conversation) {
        setActiveConversation(conversation);
      }
    }
  }, [selectedLead]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation?.messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // In real app, this would send message via API
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <div className="lg:col-span-1 border-r border-slate-200 pr-6 overflow-y-auto">
        <h3 className="font-bold text-slate-900 mb-4">Conversations</h3>
        <div className="space-y-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => {
                setActiveConversation(conversation);
                onSelectLead(conversation.lead);
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeConversation.id === conversation.id
                  ? 'bg-yellow-50 border-yellow-300'
                  : 'bg-white border-slate-200 hover:border-yellow-200'
              }`}
            >
              <div className="font-bold text-slate-900 mb-1">{conversation.lead.name}</div>
              <div className="text-xs text-slate-500 mb-2">{conversation.lead.equipment}</div>
              <div className="text-xs text-slate-400 line-clamp-2">
                {conversation.messages[conversation.messages.length - 1]?.text}
              </div>
              <div className="text-xs text-slate-400 mt-2">
                {conversation.messages[conversation.messages.length - 1]?.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-2 flex flex-col">
        {activeConversation ? (
          <>
            {/* Chat Header */}
            <div className="border-b border-slate-200 pb-4 mb-4">
              <div className="font-bold text-slate-900">{activeConversation.lead.name}</div>
              <div className="text-sm text-slate-600">{activeConversation.lead.email}</div>
              <div className="text-sm text-slate-500">{activeConversation.lead.equipment}</div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {activeConversation.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'operator' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'operator'
                        ? 'bg-yellow-500 text-slate-900'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="text-sm">{msg.text}</div>
                    <div className={`text-xs mt-1 ${
                      msg.sender === 'operator' ? 'text-slate-700' : 'text-slate-500'
                    }`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-all"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <p>Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationHub;

