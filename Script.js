fetch('https://mocki.io/v1/52738e68-0913-4ae4-a9a0-f4ab16c9a6cb')
  .then(res => res.json())
  .then(doctors => {
    const container = document.getElementById('doctorList');
    doctors.forEach(doc => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${doc.image}" alt="${doc.name}" />
        <h3>${doc.name}</h3>
        <p>${doc.specialization}</p>
        <small>${doc.location}</small>
      `;
      container.appendChild(card);
    });
  });
