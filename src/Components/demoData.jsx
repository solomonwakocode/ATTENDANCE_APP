const demoStudents = [
  { id: 1, name: "Adebayo Oluwaseun", track: "Frontend", phone: "08031234501", email: "adebayo.oluwaseun@gmail.com", attendance: 92 },
  { id: 2, name: "Chioma Okafor", track: "Backend", phone: "08141234502", email: "chioma.okafor@gmail.com", attendance: 88 },
  { id: 3, name: "Ibrahim Sadiq", track: "Data Science", phone: "08051234503", email: "ibrahim.sadiq@gmail.com", attendance: 95 },
  { id: 4, name: "Oluwatosin Ajayi", track: "UI/UX", phone: "07031234504", email: "oluwatosin.ajayi@gmail.com", attendance: 90 },
  { id: 5, name: "Blessing Eze", track: "Frontend", phone: "08161234505", email: "blessing.eze@gmail.com", attendance: 85 },
  { id: 6, name: "Samuel Johnson", track: "Backend", phone: "08021234506", email: "samuel.johnson@gmail.com", attendance: 93 },
  { id: 7, name: "Fatima Abdullahi", track: "Data Science", phone: "09031234507", email: "fatima.abdullahi@gmail.com", attendance: 89 },
  { id: 8, name: "Chukwudi Nnamdi", track: "UI/UX", phone: "08181234508", email: "chukwudi.nnamdi@gmail.com", attendance: 91 },
  { id: 9, name: "Maryam Bello", track: "Frontend", phone: "08091234509", email: "maryam.bello@gmail.com", attendance: 94 },
  { id: 10, name: "Daniel Olatunji", track: "Backend", phone: "07081234510", email: "daniel.olatunji@gmail.com", attendance: 87 },

  // --- continuing pattern ---
];

// Auto-generate up to 80 records
while (demoStudents.length < 80) {
  const id = demoStudents.length + 1;
  demoStudents.push({
    id,
    name: `Student ${id} Ade`,
    track: ["Frontend", "Backend", "Data Science", "UI/UX"][id % 4],
    phone: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
    email: `student${id}@gmail.com`,
    attendance: Math.floor(75 + Math.random() * 25),
  });
}

export default demoStudents;
