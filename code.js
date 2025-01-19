// Customer Data
const customerData = {
  firstNames: [
    'Oluwaseun', 'Chioma', 'Adebayo', 'Ngozi', 'Olayinka',
    'Babajide', 'Folake', 'Chinedu', 'Aisha', 'Oluwadamilola',
    'Tunde', 'Yetunde', 'Obinna', 'Fatima', 'Oluwabunmi'
  ],
  lastNames: [
    'Okonkwo', 'Adeyemi', 'Okafor', 'Oluwole', 'Adebisi',
    'Adekunle', 'Nnamdi', 'Ibrahim', 'Ogunleye', 'Abubakar',
    'Oladipo', 'Uzoma', 'Mohammed', 'Adeleke', 'Babangida'
  ],
  titles: [
    'Chief', 'Dr.', 'Engineer', 'Alhaji', 'Pastor',
    'Otunba', 'Professor', 'Architect', 'Barrister', 'Honourable'
  ],
  suffixes: [
    'PhD', 'OON', 'CFR', 'GCON', 'MFR',
    'CON', 'OFR', 'MON', 'FCIB', 'SAN'
  ],
  jobTitles: [
    'Market Trader', 'Business Developer', 'Oil & Gas Consultant',
    'Bank Manager', 'Civil Servant', 'Software Engineer',
    'Telecommunications Expert', 'Real Estate Developer'
  ],
  jobTypes: [
    'Full Time', 'Part Time', 'Contract', 'Freelance',
    'Remote', 'Hybrid', 'On-site', 'Temporary'
  ],
  jobAreas: [
    'Lagos Island', 'Victoria Island', 'Lekki Phase 1',
    'Ikeja GRA', 'Ikoyi', 'Ajah', 'Maryland', 'Yaba'
  ],
  domains: [
    'com.ng', 'ng', 'africa', 'com', 'net',
    'org', 'co.uk', 'io', 'tech', 'digital'
  ],
  emailProviders: [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
    'live.com', 'aol.com', 'mail.com', 'proton.me'
  ],
  socialPrefixes: ['@', '_', '.', 'real_', 'iam_', 'the_', 'official_'],
  socialSuffixes: ['_ng', '_234', '_africa', '_lagos', '_naija', '_official', '_real']
};

// Business Data
const businessData = {
  companies: [
    'Shoprite Nigeria Ltd', 'Dangote Group', 'MTN Nigeria', 'Globacom Limited',
    'First Bank Nigeria', 'Jumia Nigeria', 'Nigerian Breweries Plc', 'Nestle Nigeria',
    'Unilever Nigeria', 'PZ Cussons Nigeria', 'Cadbury Nigeria', 'Flour Mills Nigeria',
    'Oando Plc', 'Total Nigeria', 'Shell Nigeria', 'Guinness Nigeria',
    'Nigerian Bottling Company', 'Ebano Supermarket', 'SLOT Systems Limited',
    'Chicken Republic', 'Mr Biggs', 'Tantalizers', 'Sweet Sensation'
  ],
  banks: [
    'Access Bank', 'Zenith Bank', 'First Bank', 'UBA', 'GTBank',
    'Union Bank', 'Fidelity Bank', 'Ecobank', 'FCMB', 'Sterling Bank',
    'Stanbic IBTC', 'Unity Bank', 'Wema Bank', 'Heritage Bank', 'Keystone Bank',
    'Polaris Bank', 'Standard Chartered', 'Citibank', 'Titan Trust Bank'
  ],
  bankCodes: {
    'Access Bank': '044',
    'Zenith Bank': '057',
    'First Bank': '011',
    'UBA': '033',
    'GTBank': '058',
    'Union Bank': '032',
    'Fidelity Bank': '070',
    'Ecobank': '050',
    'FCMB': '214',
    'Sterling Bank': '232',
    'Stanbic IBTC': '221',
    'Unity Bank': '215',
    'Wema Bank': '035',
    'Heritage Bank': '030',
    'Keystone Bank': '082',
    'Polaris Bank': '076',
    'Standard Chartered': '068',
    'Citibank': '023',
    'Titan Trust Bank': '102'
  },
  transactionTypes: [
    'Cash', 'Card', 'Split Payment', 'Credit',
    'Bank Transfer', 'USSD', 'QR Code', 'POS'
  ],
  phoneAreaCodes: [
    '703', '706', '803', '806', '810', '813', '814', '816', '903', '906',
    '705', '805', '807', '811', '815', '905', '915',
    '701', '708', '802', '808', '812', '902', '907'
  ]
};

// Retail Data
const retailData = {
  categories: [
    'Traditional Wear', 'Local Fabrics', 'Food Items',
    'African Jewelry', 'Nigerian Art', 'Home Decor',
    'Fashion Accessories', 'Beauty Products', 'Electronics',
    'Kitchen Utensils', 'Handmade Crafts', 'Books'
  ],
  products: [
    'Ankara Fabric', 'Adire Cloth', 'Aso Oke',
    'Beaded Necklace', 'Waist Beads', 'Talking Drum',
    'Mortar and Pestle', 'Palm Wine Gourd', 'Shea Butter',
    'Black Soap', 'Leather Sandals', 'Woven Basket',
    'Clay Pot', 'Calabash', 'Dashiki Shirt'
  ],
  modifiers: [
    'Extra Spicy', 'Sugar Free', 'With Garnish',
    'Double Portion', 'Family Size', 'Party Pack',
    'Gift Wrapped', 'Express Delivery', 'Custom Made',
    'Limited Edition', 'Handcrafted', 'Organic'
  ],
  sizes: [
    'Small', 'Medium', 'Large', 'XL', '2XL',
    '6 Yards', '12 Yards', '500g', '1kg',
    'One Size', 'Regular', 'Family Size'
  ],
  materials: [
    'Ankara', 'Aso-oke', 'Adire', 'Lace',
    'George Fabric', 'Kente', 'Batik',
    'Cotton', 'Silk', 'Wool', 'Leather'
  ],
  colors: [
    'Royal Blue', 'Gold', 'Forest Green', 'Burgundy',
    'Purple Rain', 'Sunset Orange', 'Ocean Blue',
    'Earth Brown', 'Desert Sand', 'Coral Red'
  ],
  adjectives: [
    'Premium', 'Luxurious', 'Traditional', 'Authentic',
    'Handcrafted', 'Exclusive', 'Classic', 'Elegant',
    'Beautiful', 'Exquisite', 'Royal', 'Pristine',
    'Custom', 'Limited Edition', 'Artisanal'
  ]
};

// Amount Data
const amountData = {
  ranges: [
    { min: 100, max: 999 },
    { min: 1000, max: 9999 },
    { min: 10000, max: 99999 },
    { min: 100000, max: 999999 },
    { min: 1000000, max: 9999999 }
  ]
};

// Retail Units Data
const retailUnitsData = {
  units: [
    'kg', 'g', 'mg', 'L', 'mL',
    'cm', 'm', 'mm', 'pcs', 'dz',
    'box', 'set', 'pack', 'bag', 'ctn'
  ],
  skuPrefixes: ['NGR', 'LAG', 'ABJ', 'PH', 'KD', 'IB']
};

// Address Data
const addressData = {
  states: [
    'Lagos', 'Abuja', 'Rivers', 'Kano', 'Kaduna',
    'Oyo', 'Delta', 'Ogun', 'Imo', 'Enugu'
  ],
  cities: {
    'Lagos': ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Surulere'],
    'Abuja': ['Wuse', 'Garki', 'Maitama', 'Asokoro', 'Gwarinpa'],
    'Rivers': ['Port Harcourt', 'Bonny', 'Eleme', 'Obio-Akpor', 'Oyigbo'],
    'Kano': ['Kano Municipal', 'Nassarawa', 'Dala', 'Gwale', 'Tarauni']
  },
  lgas: {
    'Lagos': ['Ikeja', 'Eti-Osa', 'Lagos Island', 'Surulere', 'Alimosho'],
    'Abuja': ['AMAC', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali']
  },
  streets: [
    'Broad Street', 'Marina Road', 'Allen Avenue', 'Awolowo Road', 
    'Adeola Odeku Street', 'Ademola Adetokunbo Street', 'Kofo Abayomi Street'
  ],
  africanCountries: [
    'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt',
    'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda', 'Senegal'
  ]
};

// Nigerian Content Data
const nigerianContentData = {
  words: [
    'Oga', 'Wahala', 'Oyinbo', 'Abeg', 'Wetin',
    'Naija', 'Jollof', 'Amebo', 'Shakara', 'Gbese'
  ],
  proverbs: [
    'A child who washes his hands can dine with elders.',
    'When the right hand washes the left hand, the right hand becomes clean also.',
    'The same sun that melts wax hardens clay.',
    'A wise person will always find a way.',
    'What an elder sees sitting down, a youth cannot see standing up.'
  ],
  multiLineProverbs: [
    'The death that killed the dog\nis the same death that will kill the fox.',
    'When the mouse laughs at the cat\nthere is a hole nearby.',
    'A child who asks questions\ndoes not become a fool.',
    'The river that forgets its source\nwill dry up.',
    'When two elephants fight\nthe grass suffers.'
  ]
};

// Utility functions
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function padKobo(kobo) {
    return kobo.toString().padStart(2, '0');
}

// Amount generators
const amountGenerators = {
    // Regular amounts with kobo
    standard: () => {
        const naira = Math.floor(Math.random() * 9999900) + 100;
        const kobo = Math.floor(Math.random() * 100);
        return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
    },
    // Small amounts (₦100 - ₦9,999)
    small: () => {
        const naira = Math.floor(Math.random() * 9900) + 100;
        const kobo = Math.floor(Math.random() * 100);
        return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
    },
    // Medium amounts (₦10,000 - ₦99,999)
    medium: () => {
        const naira = Math.floor(Math.random() * 90000) + 10000;
        const kobo = Math.floor(Math.random() * 100);
        return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
    },
    // Large amounts (₦100,000 - ₦10,000,000)
    large: () => {
        const naira = Math.floor(Math.random() * 9900000) + 100000;
        const kobo = Math.floor(Math.random() * 100);
        return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
    },
    // Psychological pricing (e.g., ₦99.99, ₦999.99)
    psychological: () => {
        const bases = [99, 999, 9999, 99999];
        const base = bases[Math.floor(Math.random() * bases.length)];
        return `₦ ${formatWithCommas(base)}.99`;
    },
    // Round numbers (e.g., ₦1,000.00, ₦5,000.00)
    round: () => {
        const bases = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
        const base = bases[Math.floor(Math.random() * bases.length)];
        return `₦ ${formatWithCommas(base)}.00`;
    },
    // Abbreviated large amounts (e.g., "₦1.5M")
    abbreviated: () => {
        const amount = Math.floor(Math.random() * 10000000) + 100000;
        if (amount >= 1000000) {
            return `₦ ${(amount / 1000000).toFixed(1)}M`;
        }
        else if (amount >= 1000) {
            return `₦ ${(amount / 1000).toFixed(1)}K`;
        }
        return `₦ ${amount}`;
    },
    // Word format (e.g., "One Million Five Hundred Thousand Naira Only")
    words: () => {
        const amount = Math.floor(Math.random() * 10000000) + 100;
        const kobo = Math.floor(Math.random() * 100);
        const nairaWords = numberToWords(amount);
        const koboWords = numberToWords(kobo);
        return `${nairaWords} Naira${kobo > 0 ? ` and ${koboWords} Kobo` : ''} Only`;
    },
    // Amount range (new functionality)
    amountRange: () => {
        const range = getRandomItem(amountData.ranges);
        const start = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        const end = Math.floor(Math.random() * (range.max - start + 1)) + start;
        return `₦ ${formatWithCommas(start)} → ₦ ${formatWithCommas(end)}`;
    }
};

// Content Generators
function generateCustomerContent(type) {
  console.log('Generating customer content for type:', type);
  
  let result = null;
  switch (type) {
    case 'fullName':
      result = `${getRandomItem(customerData.titles)} ${getRandomItem(customerData.firstNames)} ${getRandomItem(customerData.lastNames)}`;
      break;
    case 'firstName':
      result = getRandomItem(customerData.firstNames);
      break;
    case 'lastName':
      result = getRandomItem(customerData.lastNames);
      break;
    case 'prefix':
      result = getRandomItem(customerData.titles);
      break;
    case 'suffix':
      result = getRandomItem(customerData.suffixes);
      break;
    case 'jobTitle':
      result = getRandomItem(customerData.jobTitles);
      break;
    case 'jobType':
      result = getRandomItem(customerData.jobTypes);
      break;
    case 'jobArea':
      result = getRandomItem(customerData.jobAreas);
      break;
    case 'socialHandle':
      console.log('Generating social handle...');
      const socialName = getRandomItem(customerData.firstNames).toLowerCase();
      const socialPrefix = getRandomItem(customerData.socialPrefixes);
      const socialSuffix = Math.random() > 0.5 ? getRandomItem(customerData.socialSuffixes) : '';
      result = `${socialPrefix}${socialName}${socialSuffix}`;
      console.log('Generated social handle:', result);
      break;
    case 'email':
      console.log('Generating email...');
      const emailFirst = getRandomItem(customerData.firstNames).toLowerCase();
      const emailLast = getRandomItem(customerData.lastNames).toLowerCase();
      const emailProvider = getRandomItem(customerData.emailProviders);
      const emailFormats = [
        `${emailFirst}.${emailLast}@${emailProvider}`,
        `${emailFirst}${emailLast}@${emailProvider}`,
        `${emailFirst[0]}${emailLast}@${emailProvider}`,
        `${emailFirst}${emailLast[0]}@${emailProvider}`,
        `${emailFirst}_${emailLast}@${emailProvider}`
      ];
      result = getRandomItem(emailFormats);
      console.log('Generated email:', result);
      break;
    case 'url':
      console.log('Generating URL...');
      const urlFirst = getRandomItem(customerData.firstNames).toLowerCase();
      const urlDomain = getRandomItem(customerData.domains);
      result = `www.${urlFirst}.${urlDomain}`;
      console.log('Generated URL:', result);
      break;
    default:
      console.log('Unknown type:', type);
      return null;
  }
  
  console.log('Generated result:', result);
  return result;
}

function generateBusinessContent(type) {
  console.log('Generating business content for type:', type);
  
  try {
    let result = null;
    
    switch (type) {
      case 'businessName':
        result = getRandomItem(businessData.companies);
        break;
        
      case 'bankName':
        result = getRandomItem(businessData.banks);
        break;
        
      case 'accountNumber':
        // Generate 10-digit account number
        const accNum = Math.floor(Math.random() * 9000000000 + 1000000000);
        result = accNum.toString();
        break;
        
      case 'bankCode':
        const selectedBank = getRandomItem(businessData.banks);
        result = businessData.bankCodes[selectedBank] || '000';
        break;
        
      case 'transactionType':
        result = getRandomItem(businessData.transactionTypes);
        break;
        
      case 'phoneNumber':
        const areaCode = getRandomItem(businessData.phoneAreaCodes);
        const subscriberNumber = Math.floor(Math.random() * 10000000)
          .toString()
          .padStart(7, '0');
        result = `+234${areaCode}${subscriberNumber}`;
        break;
        
      case 'phonePrefix':
        result = '+234';
        break;
        
      case 'orderNumber':
        // Generate 6-digit order number with # prefix
        const orderNum = Math.floor(Math.random() * 900000 + 100000);
        result = `#${orderNum}`;
        break;
        
      default:
        console.log('Unknown business type:', type);
        return null;
    }
    
    console.log('Generated business result:', result);
    return result;
    
  } catch (error) {
    console.error('Error generating business content:', error);
    return null;
  }
}

function generateRetailContent(type) {
  console.log('Generating retail content for type:', type);
  
  try {
    let result = null;
    
    switch (type) {
      case 'category':
        result = getRandomItem(retailData.categories);
        break;
        
      case 'productName':
        const product = getRandomItem(retailData.products);
        // 30% chance to add an adjective
        if (Math.random() < 0.3) {
          const adj = getRandomItem(retailData.adjectives);
          result = `${adj} ${product}`;
        } else {
          result = product;
        }
        break;
        
      case 'modifier':
        result = getRandomItem(retailData.modifiers);
        break;
        
      case 'productVariant':
        const variantProduct = getRandomItem(retailData.products);
        const color = getRandomItem(retailData.colors);
        const size = getRandomItem(retailData.sizes);
        result = `${variantProduct} / ${color} / ${size}`;
        break;
        
      case 'material':
        result = getRandomItem(retailData.materials);
        break;
        
      case 'adjective':
        result = getRandomItem(retailData.adjectives);
        break;
        
      case 'color':
        result = getRandomItem(retailData.colors);
        break;
        
      default:
        console.log('Unknown retail type:', type);
        return null;
    }
    
    console.log('Generated retail result:', result);
    return result;
    
  } catch (error) {
    console.error('Error generating retail content:', error);
    return null;
  }
}

function generateAmountRange() {
  const range = getRandomItem(amountData.ranges);
  const start = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  const end = Math.floor(Math.random() * (range.max - start + 1)) + start;
  return `₦ ${formatWithCommas(start)} → ₦ ${formatWithCommas(end)}`;
}

function generateSKU() {
  const skuPrefix = getRandomItem(retailUnitsData.skuPrefixes);
  const skuNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${skuPrefix}${skuNumber}`;
}

function generateRetailUnit() {
  const amount = Math.floor(Math.random() * 99999) + 1;
  const unit = getRandomItem(retailUnitsData.units);
  return `${amount}${unit}`;
}

// Address Generators
function generateAddress(type) {
  switch (type) {
    case 'city':
      const state = getRandomItem(addressData.states);
      return getRandomItem(addressData.cities[state]);
    case 'state':
      return getRandomItem(addressData.states);
    case 'lga':
      const lgaState = getRandomItem(addressData.states);
      return getRandomItem(addressData.lgas[lgaState] || ['Central']);
    case 'street':
      return getRandomItem(addressData.streets);
    case 'fullAddress':
      const fullState = getRandomItem(addressData.states);
      const city = getRandomItem(addressData.cities[fullState]);
      const street = getRandomItem(addressData.streets);
      return `${street}, ${city}, ${fullState}, Nigeria`;
    case 'africanCountry':
      return getRandomItem(addressData.africanCountries);
    case 'country':
      return 'Nigeria';
    default:
      return null;
  }
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  return `${hours}:${minutes} ${ampm}`;
}

function generateDate(type) {
  const startYear = 1980;
  const endYear = 2025;
  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1; // Using 28 to avoid invalid dates
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  
  const date = new Date(year, month, day, hours, minutes);
  
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  switch (type) {
    case 'date':
      return formatDate(date);
    case 'dateTime':
      return `${formatDate(date)} • ${formatTime(date)}`;
    case 'dayOfWeek':
      return weekDays[date.getDay()];
    case 'month':
      return monthNames[date.getMonth()];
    case 'year':
      return year.toString();
    default:
      return null;
  }
}

function generateNigerianContent(type) {
  switch (type) {
    case 'word':
      return getRandomItem(nigerianContentData.words);
    case 'words':
      const wordCount = Math.floor(Math.random() * 3) + 2;
      return Array.from({ length: wordCount }, () => getRandomItem(nigerianContentData.words)).join(' ');
    case 'proverb':
      return getRandomItem(nigerianContentData.proverbs);
    case 'multiLineProverb':
      return getRandomItem(nigerianContentData.multiLineProverbs);
    default:
      return null;
  }
}

// Convert number to words
function numberToWords(num) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion'];
    if (num === 0)
        return 'Zero';
    function recurse(n) {
        if (n < 10)
            return units[n];
        if (n < 20)
            return teens[n - 10];
        if (n < 100)
            return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + units[n % 10] : '');
        if (n < 1000)
            return units[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + recurse(n % 100) : '');
        for (let i = scales.length - 1; i > 0; i--) {
            const scale = Math.pow(1000, i);
            if (n >= scale) {
                return recurse(Math.floor(n / scale)) + ' ' + scales[i] + (n % scale ? ' ' + recurse(n % scale) : '');
            }
        }
        return '';
    }
    return recurse(num);
}

// Recent items storage
let recentItems = [];
const MAX_RECENT_ITEMS = 3;

function addToRecent(type) {
  // Remove if already exists
  recentItems = recentItems.filter(item => item !== type);
  
  // Add to front
  recentItems.unshift(type);
  
  // Keep only last 3
  if (recentItems.length > MAX_RECENT_ITEMS) {
    recentItems.pop();
  }
  
  // Update UI
  updateRecentItemsUI();
}

function updateRecentItemsUI() {
  figma.ui.postMessage({
    type: 'updateRecent',
    items: recentItems
  });
}

function getButtonLabel(type) {
  const buttonMap = {
    'small': 'Small Amount',
    'medium': 'Medium Amount',
    'large': 'Large Amount',
    'psychological': 'Psychological Pricing',
    'round': 'Round Numbers',
    'abbreviated': 'Abbreviated Format',
    'words': 'Amount in Words',
    'amountRange': 'Amount Range',
    'category': 'Category',
    'productName': 'Product Name',
    'modifier': 'Modifier',
    'productVariant': 'Product Variant',
    'material': 'Material',
    'adjective': 'Product Adjective',
    'color': 'Color',
    'retailUnit': 'Unit',
    'sku': 'SKU',
    'city': 'City',
    'state': 'State',
    'lga': 'LGA',
    'street': 'Street',
    'fullAddress': 'Full Address',
    'africanCountry': 'African Country',
    'country': 'Country',
    'date': 'Date',
    'dateTime': 'Date + Time',
    'dayOfWeek': 'Day of Week',
    'month': 'Month',
    'year': 'Year',
    'nigerianWord': 'Single Nigerian Word',
    'nigerianWords': 'Multiple Nigerian Words',
    'proverb': 'Single Line Proverb',
    'multiLineProverb': 'Multiple Line Proverbs'
  };
  return buttonMap[type] || type;
}

// Show UI
figma.showUI(__html__, { width: 240, height: 360 });

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    console.log('Plugin received message:', msg);

    if (!msg || !msg.type) {
      console.error('Invalid message format:', msg);
      figma.notify("Error: Invalid message format");
      return;
    }

    const type = msg.type;
    console.log('Processing type:', type);

    const textNodes = figma.currentPage.selection.filter(node => node.type === "TEXT");
    if (textNodes.length === 0) {
      console.log('No text layers selected');
      figma.notify("Please select at least one text layer");
      return;
    }

    let content = null;

    if (type.match(/^(fullName|firstName|lastName|prefix|suffix|job|social|email|url)$/)) {
      content = generateCustomerContent(type);
    } 
    else if (type.match(/^(businessName|bankName|accountNumber|bankCode|transactionType|phoneNumber|phonePrefix|orderNumber)$/)) {
      content = generateBusinessContent(type);
    } 
    else if (type.match(/^(category|productName|modifier|productVariant|material|adjective|color|retailUnit)$/)) {
      content = type === 'retailUnit' ? generateRetailUnit() : generateRetailContent(type);
    }
    else if (type === 'amountRange') {
      content = generateAmountRange();
    }
    else if (type.match(/^(city|state|lga|street|fullAddress|africanCountry|country)$/)) {
      content = generateAddress(type);
    }
    else if (type.match(/^(date|dateTime|dayOfWeek|month|year)$/)) {
      content = generateDate(type);
    }
    else if (type.match(/^(nigerianWord|nigerianWords|proverb|multiLineProverb)$/)) {
      content = generateNigerianContent(type);
    }
    else if (amountGenerators[type]) {
      content = amountGenerators[type]();
    }

    if (content) {
      for (const node of textNodes) {
        try {
          await figma.loadFontAsync(node.fontName);
          node.characters = content;
        }
        catch (fontError) {
          console.error('Font loading error:', fontError);
          figma.notify("Error: Could not load font");
          continue;
        }
      }
      // Add to recent items after successful generation
      addToRecent(type);
      figma.notify("Content generated! 💫");
    }
  }
  catch (error) {
    console.error('Plugin error:', error);
    figma.notify("Error: Could not generate content");
  }
};
