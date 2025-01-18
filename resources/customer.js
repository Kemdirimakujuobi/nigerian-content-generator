// Customer Data
export const customerData = {
  firstNames: [
    'Oluwaseun', 'Chioma', 'Adebayo', 'Ngozi', 'Olayinka',
    'Babajide', 'Folake', 'Chinedu', 'Aisha', 'Oluwadamilola',
    'Tunde', 'Yetunde', 'Obinna', 'Fatima', 'Oluwabunmi',
    'Kayode', 'Amina', 'Emeka', 'Zainab', 'Oluwafemi'
  ],
  lastNames: [
    'Okonkwo', 'Adeyemi', 'Okafor', 'Oluwole', 'Adebisi',
    'Adekunle', 'Nnamdi', 'Ibrahim', 'Ogunleye', 'Abubakar',
    'Oladipo', 'Uzoma', 'Mohammed', 'Adeleke', 'Babangida',
    'Olayinka', 'Chukwu', 'Suleiman', 'Adegoke', 'Obasanjo'
  ],
  titles: [
    'Chief', 'Dr.', 'Engineer', 'Alhaji', 'Pastor',
    'Otunba', 'Professor', 'Architect', 'Barrister', 'Honourable',
    'Prince', 'Princess', 'Oba', 'Olori', 'Deacon',
    'Deaconess', 'Bishop', 'Imam', 'Elder', 'High Chief'
  ],
  suffixes: [
    'PhD', 'OON', 'CFR', 'GCON', 'MFR',
    'CON', 'OFR', 'MON', 'FCIB', 'SAN',
    'FCA', 'ICAN', 'CIBN', 'FNSE', 'FNIOB'
  ],
  jobTitles: [
    'Market Trader', 'Business Developer', 'Oil & Gas Consultant',
    'Bank Manager', 'Civil Servant', 'Software Engineer',
    'Telecommunications Expert', 'Real Estate Developer',
    'Agricultural Officer', 'Medical Doctor',
    'University Lecturer', 'Logistics Coordinator',
    'Import/Export Specialist', 'Fashion Designer',
    'Construction Manager'
  ],
  jobAreas: [
    'Lagos Island', 'Victoria Island', 'Lekki Phase 1',
    'Ikeja GRA', 'Ikoyi', 'Ajah',
    'Maryland', 'Yaba', 'Surulere',
    'Apapa', 'Festac Town', 'Magodo',
    'Gbagada', 'Ogudu', 'Banana Island'
  ],
  jobTypes: [
    'Full-time', 'Contract', 'Business Owner',
    'Consultant', 'Freelancer', 'Part-time',
    'Remote', 'Hybrid', 'Entrepreneur',
    'Self-employed', 'Commission-based', 'Project-based'
  ]
};

export function generateCustomerContent(type) {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  switch (type) {
    case 'fullName':
      return `${getRandomItem(customerData.titles)} ${getRandomItem(customerData.firstNames)} ${getRandomItem(customerData.lastNames)}`;
    case 'firstName':
      return getRandomItem(customerData.firstNames);
    case 'lastName':
      return getRandomItem(customerData.lastNames);
    case 'prefix':
      return getRandomItem(customerData.titles);
    case 'suffix':
      return getRandomItem(customerData.suffixes);
    case 'jobTitle':
      return getRandomItem(customerData.jobTitles);
    case 'jobArea':
      return getRandomItem(customerData.jobAreas);
    case 'jobType':
      return getRandomItem(customerData.jobTypes);
    case 'socialHandle':
      return '@naija_' + getRandomItem(customerData.firstNames).toLowerCase();
    case 'email':
      const fname = getRandomItem(customerData.firstNames).toLowerCase();
      const lname = getRandomItem(customerData.lastNames).toLowerCase();
      return `${fname}.${lname}@gmail.com`;
    case 'username':
      const name = getRandomItem(customerData.firstNames).toLowerCase();
      const num = Math.floor(Math.random() * 999) + 1;
      return `${name}${num}`;
    case 'password':
      const year = Math.floor(Math.random() * 10) + 2020;
      return `Naija${year}!`;
    case 'url':
      const bizName = getRandomItem(customerData.lastNames).toLowerCase();
      return `https://www.${bizName}.com.ng`;
    case 'domain':
      const domain = getRandomItem(customerData.lastNames).toLowerCase();
      return `${domain}.com.ng`;
    default:
      return null;
  }
}
