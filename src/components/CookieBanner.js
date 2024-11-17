"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    setShowCookieBanner(!localStorage.getItem("cookiesAccepted"));
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  if (!showCookieBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use essential cookies to ensure the proper functioning of our website. 
        By continuing to use our site, you accept our use of cookies.{" "}
        <a href="/privacy">Learn more</a>.
      </p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
}