import React from 'react'
import Header from './Header'
import Hero from './Hero'
import KeyFeatures from './KeyFeatures'
import ValueProposition from './ValueProposition'
import CompetitiveAdvantage from './CompetitiveAdvantage'
import EmailSignup from './EmailSignup'
import Footer from './Footer'
import MailForm from './Newsletter'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <ValueProposition />
        <CompetitiveAdvantage />
        <EmailSignup />
        <MailForm/>
      </main>
      <Footer />
    </div>
  )
}