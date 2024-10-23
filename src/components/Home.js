import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const heroSectionStyle = {
    backgroundImage: "url('https://imgs.search.brave.com/BjAPDBPLuihPs2e-GMe6tQyjwSCNWRO4_m6FfvopoQA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbWFnZS1yZXN0/YXVyYW50LXdpdGgt/bGl2ZS1tdXNpYy1w/ZXJmb3JtYW5jZS1j/cmVhdGluZy12aWJy/YW50LWRpbmluZy1l/eHBlcmllbmNlXzEz/MTQ0NjctNDIxMjIu/anBnP3NpemU9NjI2/JmV4dD1qcGc')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const heroTextStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'yellow',
  };

  const heroParagraphStyle = {
    fontSize: '1.5rem',
    marginBottom: '30px',
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px',
  };

  const contentTextStyle = {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div>
          <h1 style={heroTextStyle}>Welcome to Eats & Treats</h1>
          <p style={heroParagraphStyle}>Your one-stop solution for amazing services.</p>
          <Link to="/services" className="btn btn-primary btn-lg" style={buttonStyle}>Explore Services</Link>
        </div>
      </section>

      {/* Content */}
      <div className="container mt-5" style={containerStyle}>
        <h2>Why Choose Us?</h2>
        <p style={contentTextStyle}>
          At MyWebsite, we pride ourselves on delivering the best services to our clients, with a focus on innovation, quality, and customer satisfaction. 
          Browse through our offerings and find out how we can help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Home;
