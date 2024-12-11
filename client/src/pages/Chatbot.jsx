import React, { useState } from "react";
import "./chatbot.css";
import airobo from './assets/airobo.png';
import submit from './assets/submit.svg';
import upload from './assets/img.svg';
import user from './assets/user1.jpg';
import loadingSpinner from './assets/progress.webp';  // Add your progress image here

const ChatbotPage = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageMime, setImageMime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Track loading state

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCoj_9t2jKaVKmd25TUpOS4mNpcmeQFDyo`;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChatResponse(userMessage);
  };

  const handleChatResponse = (message) => {
    const newMessage = {
      message,
      sender: "user",
      image: imageData ? `data:${imageMime};base64,${imageData}` : null,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserMessage(""); // Clear the input after submission
    setImageData(null); // Clear the image after submission
    setIsLoading(true);  // Set loading state to true

    // AI response simulation
    setTimeout(() => {
      fetchAIResponse(message);
    }, 600);
  };

  const fetchAIResponse = async (userMessage) => {
    try {
      const requestBody = {
        contents: [
          {
            parts: [
              { text: userMessage },
              ...(imageData ? [{ inline_data: { mime_type: imageMime, data: imageData } }] : []),
            ],
          },
        ],
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      setMessages((prevMessages) => [
        ...prevMessages,
        { message: aiResponse, sender: "ai" },
      ]);
      setIsLoading(false);  // Set loading state to false when response is received
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setIsLoading(false);  // Ensure loading state is reset on error
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = (e) => {
      const base64String = e.target.result.split(",")[1];
      setImageData(base64String);
      setImageMime(file.type);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="chat-container">
      <div className="ai-chat-box">
        <div className="ai-img">
          <img src={airobo} alt="AI" id="aiImage" width="60" />
        </div>
        <div className="ai-chat-area">Hello! How can I help you today?</div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "user-chat-box" : "ai-chat-box"}>
            <div className={msg.sender === "user" ? "user-chat-area" : "ai-chat-area"}>
              {msg.message}
              {msg.image && <img src={msg.image} alt="Uploaded" className="uploaded-img" />}
            </div>
            <div className={msg.sender === "user" ? "user-img" : "ai-img"}>
              <img src={msg.sender === "user" ? user : airobo} alt={msg.sender} width="40" />
            </div>
          </div>
        ))}
        
        {/* Display loading spinner if isLoading is true */}
        {isLoading && (
          <div className="loading-spinner">
            <img src={loadingSpinner} alt="Loading..." />
          </div>
        )}
      </div>

      <div className="prompt-area">
        <div className="input-container">
          {imageData && (
            <div className="image-preview">
              <img src={`data:${imageMime};base64,${imageData}`} alt="Preview" className="uploaded-img-preview" />
            </div>
          )}
          <input
            type="text"
            id="prompt"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Message....!"
          />
        </div>

        <button id="submit" onClick={() => document.getElementById("fileInput").click()}>
          <img src={upload} alt="Upload" />
          <input
            type="file"
            accept="images/*"
            id="fileInput"
            hidden
            onChange={handleFileInputChange}
          />
        </button>
        <button id="submit" onClick={handleSubmit}>
          <img src={submit} alt="Submit" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
