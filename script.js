document.addEventListener('DOMContentLoaded', () => {
  setupContactButtonScroll();
  setupContactFormSubmission();
  fetchProjects(); // uses dummy data
  loadTestimonials();
  setupSubscriptionForm();
});

function setupContactButtonScroll() {
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Contact form with dummy response
function setupContactFormSubmission() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      mobile: form.mobile.value,
      city: form.city.value
    };

    console.log('Form Data Submitted:', data);
    alert('Thank you! Your details have been submitted.');
    form.reset();
  });
}

// Simulated fetchProjects using dummy data
function fetchProjects() {
  const dummyProjects = [
    {
      title: 'Skyline Villas',
      image: 'https://via.placeholder.com/300x200?text=Skyline+Villas',
      link: '#'
    },
    {
      title: 'Urban Bridge',
      image: 'https://via.placeholder.com/300x200?text=Urban+Bridge',
      link: '#'
    },
    {
      title: 'Luxe Interior',
      image: 'https://via.placeholder.com/300x200?text=Luxe+Interior',
      link: '#'
    },
    {
      title: 'Smart Towers',
      image: 'https://via.placeholder.com/300x200?text=Smart+Towers',
      link: '#'
    },
    {
      title: 'Eco Residency',
      image: 'https://via.placeholder.com/300x200?text=Eco+Residency',
      link: '#'
    }
  ];

  renderProjects(dummyProjects);
}

function renderProjects(projects) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h4>${project.title}</h4>
      <a href="${project.link}" class="project-btn">View Details</a>
    `;
    container.appendChild(card);
  });
}

// Testimonials already using static data
function loadTestimonials() {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Homebuyer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770741/Ellipse_33_pbgl6p.svg",
      message: "Real Trust helped me buy my dream home with zero stress. The design and service were top-notch!"
    },
    {
      name: "Anju Kapoor",
      role: "Investor",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770741/Ellipse_35_qmlyus.svg",
      message: "From planning to execution, their marketing strategy brought amazing ROI. Highly recommended!"
    },
    {
      name: "Sahil Jain",
      role: "Interior Designer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770740/Ellipse_29_fjoguk.svg",
      message: "Collaborating with Real Trust was a pleasure. Their vision and clarity made my job easy."
    }
  ];

  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  container.innerHTML = '';

  testimonials.forEach(client => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <img src="${client.image}" alt="${client.name}">
      <h4>${client.name}</h4>
      <span>${client.role}</span>
      <p>"${client.message}"</p>
    `;
    container.appendChild(card);
  });
}

// Footer subscription with dummy handler
function setupSubscriptionForm() {
  const form = document.querySelector('.subscribe-form');
  const emailInput = form.querySelector('input[name="email"]');
  if (!form || !emailInput) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Subscribed with email:', email);
    alert('Thank you for subscribing!');
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
