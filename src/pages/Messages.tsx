
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  User, 
  Phone,
  Clock,
  Search
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const conversations = [
    { 
      id: 1, 
      name: "Support Agent", 
      avatar: "", 
      status: "online", 
      lastMessage: "How can I help you today?", 
      time: "Just now",
      unread: 0,
      messages: [
        { sender: "agent", content: "Hello! How can I assist you with your power supply today?", time: "10:30 AM" },
        { sender: "user", content: "Hi, I want to report a power outage in my area", time: "10:32 AM" },
        { sender: "agent", content: "I'm sorry to hear that. Could you please provide your location and when the outage started?", time: "10:33 AM" },
        { sender: "user", content: "I'm in Lekki Phase 1. It started about 2 hours ago, around 8:15 AM", time: "10:34 AM" },
        { sender: "agent", content: "Thank you for that information. I've checked our system and there is indeed a reported outage in that area. Our technical team has been dispatched and they're working to restore power.", time: "10:36 AM" },
        { sender: "agent", content: "The estimated restoration time is around 1:00 PM today. We apologize for the inconvenience.", time: "10:36 AM" },
      ]
    },
    { 
      id: 2, 
      name: "Technical Support", 
      avatar: "", 
      status: "offline", 
      lastMessage: "Your ticket #12345 has been resolved", 
      time: "Yesterday",
      unread: 1,
      messages: [
        { sender: "agent", content: "Hello, this is Technical Support. How can I help you?", time: "Yesterday, 2:30 PM" },
        { sender: "user", content: "I'm having issues with my prepaid meter", time: "Yesterday, 2:35 PM" },
        { sender: "agent", content: "Could you describe the issue in more detail?", time: "Yesterday, 2:37 PM" },
      ]
    },
    { 
      id: 3, 
      name: "Billing Department", 
      avatar: "", 
      status: "online", 
      lastMessage: "Your last payment was received", 
      time: "2 days ago",
      unread: 0,
      messages: [
        { sender: "agent", content: "Hello, this is the Billing Department. How can I assist you today?", time: "2 days ago, 11:20 AM" },
        { sender: "user", content: "I want to check my current balance", time: "2 days ago, 11:25 AM" },
        { sender: "agent", content: "Your current balance is ₦15,420. Your next bill is due in 10 days.", time: "2 days ago, 11:30 AM" },
      ]
    }
  ];
  
  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const activeChat = conversations.find(conv => conv.id === activeConversation);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would send the message to the backend
      console.log("Sending message:", message);
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
        <p className="text-muted-foreground">
          Contact support and manage your conversations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(80vh-6rem)]">
        <Card className="md:col-span-1 flex flex-col overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <Badge variant="secondary" className="ml-auto">3</Badge>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search conversations" 
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="divide-y">
              {filteredConversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={cn(
                    "p-3 cursor-pointer hover:bg-accent/50",
                    conversation.id === activeConversation && "bg-accent"
                  )}
                  onClick={() => setActiveConversation(conversation.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {conversation.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.status === "online" && (
                        <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-power-green ring-1 ring-background"></div>
                      )}
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{conversation.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">{conversation.lastMessage}</p>
                      <div className="flex justify-end">
                        {conversation.unread > 0 && (
                          <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-power-blue text-white">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 flex flex-col overflow-hidden">
          {activeChat ? (
            <>
              <CardHeader className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activeChat.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {activeChat.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{activeChat.name}</CardTitle>
                    <p className="text-xs flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${activeChat.status === 'online' ? 'bg-power-green' : 'bg-gray-300'}`}></span>
                      <span className="capitalize">{activeChat.status}</span>
                    </p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {activeChat.messages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        msg.sender === 'user' 
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-muted rounded-tl-none"
                      )}
                    >
                      <div className="space-y-1">
                        <p className="text-sm">{msg.content}</p>
                        <p className="text-xs flex justify-end items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Type your message here..."
                    className="min-h-12 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="bg-muted h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-1">No Conversation Selected</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a conversation from the list to start messaging
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;
