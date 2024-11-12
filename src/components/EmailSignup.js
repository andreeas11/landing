// import React, { useState } from 'react'
// import { Button, Input } from "./UIComponents"

// export default function EmailSignup() {
//   const [email, setEmail] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Here you would typically send the email to your backend
//     console.log('Submitted email:', email)
//     setEmail('')
//     alert('Thank you for signing up! We\'ll keep you updated.')
//   }

//   return (
//     <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
//         <p className="text-xl mb-8">Sign up for our newsletter to receive the latest updates and offers.</p>
//         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full sm:w-auto bg-primary-foreground text-primary"
//           />
//           <Button type="submit" variant="secondary">Subscribe</Button>
//         </form>
//       </div>
//     </section>
//   )
// }
import React, { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="email-signup">
      <h2>Sign up for Updates</h2>
      <p>Subscribe to receive the latest news and updates directly in your inbox.</p>

      {isSubmitted ? (
        <p className="text-white font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}
