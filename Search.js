exports.handler = async (event, context) => {
  // Expanded dataset of doctors
  const doctors = [
    { name: 'Dr. John Smith', specialty: 'Cardiologist', city: 'New York', description: 'Expert in heart disease treatment with 15+ years of experience.' },
    { name: 'Dr. Sarah Johnson', specialty: 'Pediatrician', city: 'Los Angeles', description: 'Specializes in child health and development.' },
    { name: 'Dr. Michael Lee', specialty: 'Neurologist', city: 'Chicago', description: 'Focuses on neurological disorders and therapies.' },
    { name: 'Dr. Emily Davis', specialty: 'Dermatologist', city: 'Houston', description: 'Specialist in skin conditions and cosmetic dermatology.' },
    { name: 'Dr. Robert Brown', specialty: 'Orthopedic Surgeon', city: 'Miami', description: 'Expert in joint replacements and sports injuries.' },
    { name: 'Dr. Lisa Wilson', specialty: 'Endocrinologist', city: 'Seattle', description: 'Manages diabetes and hormonal disorders.' },
    { name: 'Dr. James Taylor', specialty: 'Ophthalmologist', city: 'Boston', description: 'Specializes in eye care and laser surgeries.' },
    { name: 'Dr. Rachel Adams', specialty: 'Gynecologist', city: 'Phoenix', description: 'Expert in women’s health and prenatal care.' },
    { name: 'Dr. David Martinez', specialty: 'Psychiatrist', city: 'San Francisco', description: 'Focuses on mental health and therapy.' },
    { name: 'Dr. Karen White', specialty: 'Oncologist', city: 'Denver', description: 'Specialist in cancer treatment and research.' },
    { name: 'Dr. Thomas Clark', specialty: 'Gastroenterologist', city: 'Atlanta', description: 'Expert in digestive system disorders.' },
    { name: 'Dr. Nicole Harris', specialty: 'Pulmonologist', city: 'Dallas', description: 'Manages respiratory conditions like asthma.' },
    { name: 'Dr. Paul Evans', specialty: 'Urologist', city: 'San Diego', description: 'Specializes in urinary tract and male health.' },
    { name: 'Dr. Laura King', specialty: 'Rheumatologist', city: 'Portland', description: 'Expert in arthritis and autoimmune diseases.' },
    { name: 'Dr. Mark Thompson', specialty: 'ENT Specialist', city: 'Austin', description: 'Focuses on ear, nose, and throat conditions.' },
    { name: 'Dr. Jennifer Lopez', specialty: 'General Surgeon', city: 'Philadelphia', description: 'Performs a wide range of surgical procedures.' },
    { name: 'Dr. Brian Miller', specialty: 'Nephrologist', city: 'Minneapolis', description: 'Specialist in kidney health and dialysis.' },
    { name: 'Dr. Susan Green', specialty: 'Allergist', city: 'Charlotte', description: 'Manages allergies and immune system disorders.' },
    { name: 'Dr. Andrew Patel', specialty: 'Hematologist', city: 'Orlando', description: 'Expert in blood disorders and treatments.' },
    { name: 'Dr. Kelly Nguyen', specialty: 'Infectious Disease', city: 'Las Vegas', description: 'Focuses on infectious diseases and prevention.' }
  ];

  // Handle the search request
  if (event.httpMethod === 'POST') {
    const { query } = JSON.parse(event.body);
    let results = doctors;

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(doctor =>
        doctor.name.toLowerCase().includes(lowerQuery) ||
        doctor.specialty.toLowerCase().includes(lowerQuery) ||
        doctor.city.toLowerCase().includes(lowerQuery)
      );
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, results })
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ success: false, message: 'Invalid request method' })
  };
};
