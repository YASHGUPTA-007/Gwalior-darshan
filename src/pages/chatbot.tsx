"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function ChatBot() {
  const initialBotMessage: Message = {
    id: "init",
    content: `Welcome to the Gwalior Heritage Explorer!

Here are some topics you can explore about Gwalior:
1. **Gwalior Fort** - Discover the architectural marvel and its historical significance.
2. **Royal Palaces & Museums** - Learn about the royal legacy and cultural treasures.
3. **Local Temples & Religious Heritage** - Explore ancient temples and their stories.
4. **Festivals & Traditions** - Understand the vibrant cultural events of the city.

Feel free to ask about any of these topics or any other aspect of Gwalior's history and heritage.`,
    role: "assistant",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Initialize API
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userQuery = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      const promptText = `You are an expert on the history and heritage of Gwalior city. Only share information about Gwalior. Now answer the following question: ${userQuery}`;

      const result = await model.generateContent([promptText]);
      const response = await result.response;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text(),
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: "Failed to fetch response. Please try again later.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif mb-4">
              Ask About Gwalior's Heritage
            </h2>

            <div
              ref={messagesContainerRef}
              className="h-80 overflow-y-auto border p-4 mb-4 rounded"
            >
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-10">
                  <p className="text-lg">How can I assist you today?</p>
                  <p className="text-sm mt-2 text-gray-500">
                    Ask me anything!
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-2 p-2 rounded ${
                      message.role === "user"
                        ? "bg-blue-200 text-right"
                        : "bg-gray-200 text-left"
                    }`}
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                ))
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center border-t pt-2"
            >
              <input
                type="text"
                className="flex-1 p-2 border rounded-l focus:outline-none"
                placeholder="Ask about Gwalior..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-stone-900 text-white px-4 py-2 rounded-r hover:bg-stone-800 transition flex items-center"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
