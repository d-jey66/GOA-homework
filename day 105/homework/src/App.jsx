import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section className="services">
        <Service title="Web Development" description="Creating stunning websites." />
        <Service title="SEO Services" description="Improving your website's visibility." />
        <Service title="Digital Marketing" description="Promoting your brand online." />
      </section>
    </div>
  );
};

export default App;
