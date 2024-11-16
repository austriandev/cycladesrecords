"use client";
import TypingText from '../components/TypingText';
import CookieBanner from '../components/CookieBanner';

export default function Home() {
  return (
    <>
      <main className="container">
        <h1>CYCLADES RECORDS</h1>
        <TypingText />
      </main>
      <CookieBanner />
    </>
  );
}