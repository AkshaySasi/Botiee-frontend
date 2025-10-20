import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import botieeAvatar from "@/assets/botiee-logo.png";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi, I'm Botiee, Akshay Sasi's personal career chatbot and AI Portfolio. Ask me anything to know about his professional journey, education, skills etc.",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll only after user interaction or new bot response
  useEffect(() => {
    if (hasInteracted) {
      scrollToBottom();
    }
  }, [messages, hasInteracted]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
  
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };
  
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setHasInteracted(true);
  
    try {
      const API_URL = import.meta.env.DEV 
        ? "https://botiee-backend.onrender.com"  // Local = Render too!
        : import.meta.env.VITE_API_URL;
        
      const response = await axios.post(`${API_URL}/chat`, {
        message: input.trim(),
      }, {
        timeout: 30000, // Render is slower
      });
  
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.data.response || "No response from backend.",
        role: "assistant",
        timestamp: new Date(),
      };
  
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = "Botiee is thinking...";
      toast({
        title: "Connecting",
        description: errorMessage,
      });
  
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: errorMessage,
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
    setHasInteracted(true); // Mark interaction on prebuilt question click
  };

  const prebuiltQuestions = [
    "Tell me about yourself",
    "What are your best AI projects?",
    "What are your strengths?",
  ];

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Dynamically adjust height based on message count
  const messageCount = messages.length;
  const dynamicHeight = Math.min(80 + (messageCount - 1) * 10, 90); // Starts at 80vh, increases by 10vh per message, caps at 90vh

  return (
    <section className="min-h-screen flex flex-col px-6 py-12 bg-black">
      <div className="max-w-4xl mx-auto w-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={botieeAvatar}
              alt="Botiee Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Ask Me
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Hi, I'm Botiee, Akshay Sasi's personal career chatbot and AI Portfolio. Ask me anything to know about his professional journey, education, skills etc.
          </p>
        </div>

        {/* Chat Messages */}
        <Card className={`flex flex-col p-0 overflow-hidden bg-gray-900/50 border border-gray-800`}
              style={{ height: `${dynamicHeight}vh` }}>
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-green-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <img
                      src={botieeAvatar}
                      alt="Botiee"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-green-500/80 text-white"
                      : "bg-gray-800 text-gray-200"
                  } shadow-sm`}
                >
                  <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                  <div className="text-xs opacity-70 mt-1">
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 text-gray-300 flex items-center justify-center">
                  <img
                    src={botieeAvatar}
                    alt="Botiee"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </div>
                <div className="bg-gray-800 text-gray-200 p-3 rounded-lg flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prebuilt Questions */}
          <div className="border-t border-gray-700 p-4 bg-gray-900/70">
            <p className="text-sm text-gray-400 mb-3">Quick questions to get started:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {prebuiltQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuestionClick(question)}
                  className="text-xs bg-gray-800/50 hover:bg-green-500 hover:text-white transition-all duration-200 border-gray-600"
                  disabled={isLoading}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me..."
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
