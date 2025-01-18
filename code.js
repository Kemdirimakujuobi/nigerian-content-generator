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
  jobAreas: [
    'Lagos Island', 'Victoria Island', 'Lekki Phase 1',
    'Ikeja GRA', 'Ikoyi', 'Ajah', 'Maryland', 'Yaba'
  ]
};

// Business Data
const businessData = {
  banks: [
    'First Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Access Bank',
    'Fidelity Bank', 'Union Bank', 'Sterling Bank', 'Wema Bank'
  ],
  businessTypes: [
    'Import/Export', 'Real Estate', 'Oil & Gas', 'Fintech',
    'Agriculture', 'Manufacturing', 'Telecommunications'
  ],
  bankCodes: {
    'First Bank': '011',
    'GTBank': '058',
    'Zenith Bank': '057',
    'UBA': '033',
    'Access Bank': '044'
  }
};

// Retail Data
const retailData = {
  categories: [
    'Traditional Wear', 'Local Fabrics', 'Food Items',
    'African Jewelry', 'Nigerian Art', 'Home Decor'
  ],
  materials: [
    'Ankara', 'Aso-oke', 'Adire', 'Lace',
    'George Fabric', 'Kente', 'Batik'
  ],
  colors: [
    'Royal Blue', 'Gold', 'Forest Green', 'Burgundy',
    'Purple Rain', 'Sunset Orange', 'Ocean Blue'
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
    default:
      return null;
  }
}

function generateBusinessContent(type) {
  switch (type) {
    case 'businessName':
      return `Nigerian ${getRandomItem(businessData.businessTypes)} Limited`;
    case 'businessType':
      return getRandomItem(businessData.businessTypes);
    case 'bankName':
      return getRandomItem(businessData.banks);
    case 'accountNumber':
      return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
    case 'bankCode':
      const bank = getRandomItem(businessData.banks);
      return businessData.bankCodes[bank] || '044';
    default:
      return null;
  }
}

function generateRetailContent(type) {
  switch (type) {
    case 'category':
      return getRandomItem(retailData.categories);
    case 'productName':
      return `Premium ${getRandomItem(retailData.categories)}`;
    case 'material':
      return getRandomItem(retailData.materials);
    case 'color':
      return getRandomItem(retailData.colors);
    default:
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
    if (type.includes('Name') || type.includes('prefix') || type.includes('suffix') || type.includes('job')) {
      console.log('Attempting to generate customer content');
      content = generateCustomerContent(type);
      console.log('Generated customer content:', content);
    } 
    // Business content
    else if (type.includes('business') || type.includes('bank') || type.includes('account')) {
      console.log('Attempting to generate business content');
      content = generateBusinessContent(type);
      console.log('Generated business content:', content);
    } 
    // Retail content
    else if (type.includes('product') || type.includes('category') || type.includes('material') || type.includes('color')) {
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
