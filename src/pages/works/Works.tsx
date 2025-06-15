import React from 'react';

const Works = () => {
  return (
    <main>
      {/* Header Section */}
      <section>
        <h1>Projects That Tell My Story</h1>
        <p>Here are a few things I’ve built — some for work, some for fun, all with care and code.</p>
      </section>

      {/* Projects Grid */}
      <section>
        <div>
          <h2>🛍️ eCommX – Modern Storefront UI</h2>
          <p>A clean, responsive eCommerce interface for a mid-sized brand. Handled product grid, filter, cart, and account UI.</p>
          <p><strong>Role:</strong> Front-End Lead</p>
          <p><strong>Stack:</strong> React, Tailwind CSS, TypeScript, Framer Motion</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
        </div>

        <div>
          <h2>✈️ TravelFlow – Booking Portal Interface</h2>
          <p>A step-by-step travel booking UI with calendar and dynamic pricing. Designed UX flow, built UI logic, and implemented route-based transitions.</p>
          <p><strong>Role:</strong> Solo Front-End Dev</p>
          <p><strong>Stack:</strong> React, Context API, SCSS, OutSystems</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Case Study</a>
        </div>

        <div>
          <h2>🧠 AdminEase – Internal Dashboard</h2>
          <p>Internal admin panel for managing reports, users, and activities. Focused on layout structure, theming, and accessibility.</p>
          <p><strong>Role:</strong> UI/UX + Dev</p>
          <p><strong>Stack:</strong> OutSystems, PowerApps, Custom CSS</p>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <h2>Have something in mind?</h2>
        <p>I’d love to bring your idea to life.</p>
        <a href="/contact">📬 Let’s Work Together →</a>
      </section>
    </main>
  );
};

export default Works;
