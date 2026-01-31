import { useState } from 'react';
import { ArrowLeft, Send, MessageCircle } from 'lucide-react';
import { mockChatChannels, mockChatMessages, quickReplyTemplates } from '@/data/mockData';
import { ChatChannel, ChatMessage } from '@/data/types';
import { toast } from 'sonner';

export function ChatScreen() {
  const [selectedChannel, setSelectedChannel] = useState<ChatChannel | null>(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    toast.success('Message sent', { duration: 2000 });
    setMessage('');
  };

  const handleQuickReply = (template: string) => {
    setMessage(template);
  };

  if (selectedChannel) {
    const messages = mockChatMessages[selectedChannel.id] || [];
    
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 py-3 safe-area-top sticky top-0 z-40">
          <div className="max-w-lg mx-auto flex items-center gap-3">
            <button
              onClick={() => setSelectedChannel(null)}
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="font-semibold text-foreground truncate">
                {selectedChannel.name}
              </h1>
            </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto px-4 py-4 max-w-lg mx-auto w-full pb-32">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.isYou ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.isYou 
                      ? 'bg-primary text-primary-foreground rounded-br-md' 
                      : 'bg-card border border-border rounded-bl-md'
                  }`}
                >
                  {!msg.isYou && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">
                        {msg.sender}
                      </span>
                      {msg.senderRole && (
                        <span className="text-xs opacity-70">
                          ({msg.senderRole})
                        </span>
                      )}
                    </div>
                  )}
                  <p className={msg.isYou ? '' : 'text-foreground'}>
                    {msg.content}
                  </p>
                  <p className={`text-xs mt-1 ${msg.isYou ? 'opacity-70' : 'text-muted-foreground'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Message Input */}
        <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 safe-area-bottom">
          <div className="max-w-lg mx-auto space-y-3">
            {/* Quick replies */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {quickReplyTemplates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(template)}
                  className="flex-shrink-0 px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-muted/80 transition-colors"
                >
                  {template}
                </button>
              ))}
            </div>
            
            {/* Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-muted rounded-full px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 py-4 safe-area-top sticky top-0 z-40">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-foreground">Chat</h1>
        </div>
      </header>

      <main className="px-4 py-4 max-w-lg mx-auto">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Channels
        </h2>
        
        <div className="space-y-2">
          {mockChatChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className="w-full flex items-center gap-3 p-4 bg-card rounded-xl shadow-card border border-border hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {channel.name}
                </h3>
              </div>
              
              {channel.unreadCount > 0 && (
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {channel.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
