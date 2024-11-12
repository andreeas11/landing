import React from 'react'
import Header from './Header'
import Hero from './Hero'
import KeyFeatures from './KeyFeatures'
import ValueProposition from './ValueProposition'
import CustomerSegments from './CustomerSegments'
import CompetitiveAdvantage from './CompetitiveAdvantage'
import EmailSignup from './EmailSignup'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <ValueProposition />
        <CustomerSegments />
        <CompetitiveAdvantage />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  )
}