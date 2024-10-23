import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import CSS for styling

const services = [
  {
    id: 1,
    title: "Menu & Branding Design",
    description: "Custom-designed menus and brand identity to showcase your restaurant's unique style.",
    image: "https://imgs.search.brave.com/zN-kNWdQBmmq2E6TxSalF_NjAaxlkslrRKzuwyrF6g0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2Ri/L2FhL2U2ZGJhYWRl/MWNhNWMzNTFlOGI5/OTk5ZDQ3MjRiNGMy/LmpwZw",
    link: "/services/menu-design"
  },
  {
    id: 2,
    title: "Website & App Development",
    description: "Build a modern website and app for online orders, reservations, and seamless user experience.",
    image: "https://imgs.search.brave.com/0-E-Ll8o7-bZYx0-el1xOWZHAVOc0_9A5ZInLUF-NjM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tb2Jp/cmlzZS5jb20vYXNz/ZXRzMjQvaW1hZ2Vz/L3RlbXBsYXRlcy53/ZWJw",
    link: "/services/web-app-development"
  },
  {
    id: 3,
    title: "Marketing & Social Media",
    description: "Engage with your customers through social media management and targeted marketing campaigns.",
    image: "https://imgs.search.brave.com/CCccja2Sm_KRXOd-74-Qi5OQiwDK1JDFwo2FDwuXbfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVsdHdhdGVyLmNv/bS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9pbWFnZXMucHJp/c21pYy5pby9tZWx0/d2F0ZXIvYzk5NzVj/MDQtZWJmNS00NDhl/LThhZjItMTFiMDUx/YTFhM2FhX0NhZGJ1/cnkrV29yZHdpZGUr/SGlkZStldmVudC5q/cGc_YXV0bz1jb21w/cmVzcyxmb3JtYXQm/dz0xOTIwJnE9NzU",
    link: "/services/marketing-social"
  },
  {
    id: 4,
    title: "Photography & Videography",
    description: "Professional food photography and video content for your restaurant’s digital presence.",
    image: "https://imgs.search.brave.com/nVVT-JyLVMdQWVcbFjipGPlckCy0J5b-Za9TASjAas4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q1/NjEyQVFHNWZ2N3JY/TU9yTFEvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNjk0/MjA4NTE0OTQ1P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD0yLVFK/eFAwU3YxVmFRX3I0/MkpRZnZ4N2xmLXM1/Z1RoZ091WEFHSkFD/dGF3.jpeg",
    link: "/services/photography"
  },
  {
    id: 5,
    title: "Customer Loyalty Program",
    description: "Create a loyalty program to reward your regular customers and keep them coming back.",
    image: "https://imgs.search.brave.com/g_AvEhfINaXUneXILqHwAN_Iy6vya9iPxfpIa2OX-m0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvY3VzdG9t/ZXIlMjBsb3lhbHR5/JTIwc29mdHdhcmVf/ZmVhdHVyZWQlMjBp/bWFnZS5qcGc",
    link: "/services/loyalty-program"
  },
  {
    id: 6,
    title: "Interior & Experience Design",
    description: "Consultation for creating a stunning ambiance with the right decor, music, and lighting.",
    image: "https://imgs.search.brave.com/ZSWX3JNX7caA1PUx1CNivPe23JokCRZEtJo-gByWCXk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9sdXhkZWNvLWRl/di9PREV3Tm1Nek5U/RXROV1ppTWkwME5t/VmpMVGczT0RBdFpX/STRZemsxTXpRNE9E/Tm1fcmVzdGF1cmFu/dF9pbnRlcmlvcl9k/ZXNpZ24tX2xheW91/dHNfZGVzaWduX2lk/ZWFzX19fbHV4ZGVj/b180LmpwZz9hdXRv/PWNvbXByZXNzLGZv/cm1hdCZ3PTEyMDAm/cT0xMDA",
    link: "/services/interior-design"
  },
  {
    id: 7,
    title: "Staff Training & Management Tools",
    description: "Empower your staff with modern management tools and training programs.",
    image: "https://imgs.search.brave.com/EbfM6itk7GeSYdZQPTKKn7XNMrfEKhKeLSge0BYl9h0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbG9j/a2lmeS5tZS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEyL0Jlc3QtcmVz/dGF1cmFudC1tYW5h/Z2VtZW50LXNvZnR3/YXJlLWNvdmVyLmpw/Zw",
    link: "/services/staff-training"
  }
];

const RestaurantServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Eats & Treats Restaurant Services</h1>
      <p className="services-intro">
        Our wide range of services helps restaurants create an unforgettable dining experience, both online and offline.
      </p>
      <div className="services-grid">
        {services.map(service => (
          <Link to={service.link} className="service-card" key={service.id}>
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantServices;
