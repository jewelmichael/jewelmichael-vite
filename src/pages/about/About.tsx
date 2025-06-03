import React from 'react';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <h1>Hi, I’m Jewel 👋</h1>
        <p>Front-end Developer</p>
        <p>
          I craft accessible, responsive, and clean UI experiences — with just the right amount of creative obsession.
        </p>
      </section>

      {/* About Me */}
      <section>
        <h2>About Me</h2>
        <p>
          It all started with a little PC envy. My uncle passed down an old desktop — but gave it to my brother instead of me. That nudge of jealousy made me choose Computer Science, just to earn a PC of my own.<br /><br />
          But what began as a petty mission turned into passion. I discovered C++ during my +2 and instantly clicked with coding. I wasn’t a top student overall, but I <em>nailed</em> anything computer-related — which only proved I was on the right path.<br /><br />
          While clearing a few backlogs, I took up an ASP.NET course at a local institute, funded by a part-time 5 AM courier job. That’s when I stumbled into front-end development — and fell in love with how code could bring designs to life.<br /><br />
          Since then, I’ve stayed focused on UI development, moving from ASP.NET to modern stacks like React, SharePoint, and OutSystems. And honestly? I still get excited every time I see a design come to life in the browser.
        </p>
      </section>

      {/* Qualifications */}
      <section>
        <h2>Qualifications</h2>
        <ul>
          <li>🎓 B.Tech in Computer Science Engineering (Yes, I passed... especially the coding stuff 😄)</li>
          <li>🧾 ASP.NET Training — Local Institute</li>
          <li>🧠 Certified in Front-End Development — 2x OutSystems Certified</li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <div>
          <p><strong>Languages & Frameworks:</strong> React, TypeScript, JavaScript, HTML5, SCSS, CSS3, ASP.NET, PHP, Laravel</p>
          <p><strong>Tools & Platforms:</strong> OutSystems, SharePoint, PowerApps, HubSpot, WordPress, Magento, Shopify, Ionic</p>
          <p><strong>Other Stuff I Love:</strong> Tailwind CSS, Framer Motion, Figma, Git, UI/UX, Theming (Dark/Light), Responsive Design, Performance Optimization</p>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2>Experience</h2>
        <div>
          <div>
            <h3>🛠️ Factweavers (2021 – Present)</h3>
            <p>Started as a UX Manager, shifted to front-end development in OutSystems. Now a certified expert building scalable, maintainable UIs.</p>
          </div>
          <div>
            <h3>📈 Global Infonet (2019 – 2021)</h3>
            <p>Focused front-end development using SharePoint, PowerApps, HubSpot, and React. Built components, layouts, and Microsoft-based UI flows.</p>
          </div>
          <div>
            <h3>🌐 2Hats Logic (2018 – 2019)</h3>
            <p>A deep dive into multiple stacks — WordPress, Magento, Laravel, Shopify, Ionic, React, PHP. Learned a lot. Got overwhelmed. Gained perspective.</p>
          </div>
          <div>
            <h3>🚀 Veristics Networks (2016 – 2018)</h3>
            <p>My first job. Built UIs, then led the team. Managed hiring, client delivery, and a small dev team at a young age.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-100 py-8 px-6 text-center rounded-xl">
        <h2 className="text-2xl font-semibold mb-2">Got a project or opportunity in mind?</h2>
        <p className="mb-4 text-gray-700">I’d love to hear from you.</p>
        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">📬 Contact Me</a>
      </section>
    </main>
  );
};

export default About;