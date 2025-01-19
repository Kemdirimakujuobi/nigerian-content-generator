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

// Amount generators
const amountGenerators = {
  standard: () => {
    const naira = Math.floor(Math.random() * 9999900) + 100;
    const kobo = Math.floor(Math.random() * 100);
    return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
  },
  small: () => {
    const naira = Math.floor(Math.random() * 9900) + 100;
    const kobo = Math.floor(Math.random() * 100);
    return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
  },
  medium: () => {
    const naira = Math.floor(Math.random() * 90000) + 10000;
    const kobo = Math.floor(Math.random() * 100);
    return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
  },
  large: () => {
    const naira = Math.floor(Math.random() * 9900000) + 100000;
    const kobo = Math.floor(Math.random() * 100);
    return `₦ ${formatWithCommas(naira)}.${padKobo(kobo)}`;
  },
  psychological: () => {
    const naira = Math.floor(Math.random() * 9000) + 1000;
    return `₦ ${formatWithCommas(naira - 1)}.99`;
  },
  round: () => {
    const naira = (Math.floor(Math.random() * 10) + 1) * 1000;
    return `₦ ${formatWithCommas(naira)}.00`;
  },
  abbreviated: () => {
    const amount = Math.floor(Math.random() * 10000000) + 1000000;
    if (amount >= 1000000) {
      return `₦ ${(amount / 1000000).toFixed(1)}M`;
    }
    return `₦ ${amount}`;
  },
  words: () => {
    const amount = Math.floor(Math.random() * 10000000) + 100;
    return numberToWords(amount) + ' Naira';
  }
};

// Convert number to words
function numberToWords(num) {
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const scales = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';

  function recurse(n) {
    if (n < 10) return units[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + units[n % 10] : '');
    if (n < 1000) return units[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + recurse(n % 100) : '');
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

// Show UI
figma.showUI(__html__, { width: 240, height: 360 });

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    console.log('Plugin received message:', msg);

    // Check if message is properly formatted
    if (!msg || !msg.type) {
      console.error('Invalid message format:', msg);
      figma.notify("Error: Invalid message format");
      return;
    }

    const type = msg.type;
    console.log('Processing type:', type);

    // Check if any text layers are selected
    const textNodes = figma.currentPage.selection.filter(node => node.type === "TEXT");
    if (textNodes.length === 0) {
      console.log('No text layers selected');
      figma.notify("Please select at least one text layer");
      return;
    }

    let content = null;

    // Try content generators first
    console.log('Trying content generators for type:', type);

    // Customer content
    if (type.match(/^(fullName|firstName|lastName|prefix|suffix|job|social|email|url)$/)) {
      console.log('Attempting to generate customer content');
      content = generateCustomerContent(type);
      console.log('Generated customer content:', content);
    } 
    // Business content
    else if (type.match(/^(businessName|bankName|accountNumber|bankCode|transactionType|phoneNumber|phonePrefix|orderNumber)$/)) {
      console.log('Attempting to generate business content');
      content = generateBusinessContent(type);
      console.log('Generated business content:', content);
    } 
    // Retail content
    else if (type.match(/^(category|productName|modifier|productVariant|material|adjective|color)$/)) {
      console.log('Attempting to generate retail content');
      content = generateRetailContent(type);
      console.log('Generated retail content:', content);
    } 
    // Amount content
    else if (amountGenerators[type]) {
      console.log('Attempting to generate amount');
      content = amountGenerators[type]();
      console.log('Generated amount:', content);
    }

    if (content) {
      console.log('Content generated successfully:', content);
      // Load fonts and update nodes
      for (const node of textNodes) {
        try {
          console.log('Loading font for node:', node.fontName);
          await figma.loadFontAsync(node.fontName);
          node.characters = content;
          console.log('Updated node content');
        } catch (fontError) {
          console.error('Font loading error:', fontError);
          figma.notify("Error: Could not load font");
          continue;
        }
      }
      figma.notify("Content generated! 💫");
    } else {
      console.error('No content generated for type:', type);
      figma.notify("Error: Could not generate content for type: " + type);
    }
  } catch (error) {
    console.error('Plugin error:', error);
    figma.notify("Error: " + error.message);
  }
};
