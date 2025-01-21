// Utility functions
function formatWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function padKobo(kobo) {
    return kobo.toString().padStart(2, '0');
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

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

// Date formatting functions
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

function generateRandomDate() {
    const startYear = 1980;
    const endYear = 2025;
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return new Date(year, month, day, hours, minutes);
}

// Customer Data
const customerData = {
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
    ]
};

// Business Data
const businessData = {
    banks: [
        'First Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Access Bank',
        'Fidelity Bank', 'Union Bank', 'Sterling Bank', 'Wema Bank',
        'Polaris Bank', 'Heritage Bank', 'Keystone Bank', 'Unity Bank',
        'Stanbic IBTC', 'Standard Chartered'
    ],
    businessTypes: [
        'Import/Export', 'Real Estate', 'Oil & Gas', 'Fintech',
        'Agriculture', 'Manufacturing', 'Telecommunications',
        'Transportation', 'Fashion & Textiles', 'Food & Beverages',
        'Construction', 'Education', 'Healthcare', 'Media & Entertainment',
        'Retail & Distribution'
    ],
    businessNames: [
        'Shoprite Nigeria Ltd', 'Dangote Group', 'GTBank Plc', 'MTN Nigeria',
        'Jumia Nigeria', 'Globacom Limited', 'Nigerian Breweries Plc', 'Flour Mills Nigeria',
        'Nestle Nigeria Plc', 'Unilever Nigeria', 'First Bank Nigeria', 'Access Bank Plc',
        'Oando Plc', 'Total Nigeria Plc', 'PZ Cussons Nigeria', 'Cadbury Nigeria',
        'Guinness Nigeria Plc', 'UAC Nigeria', 'Julius Berger Nigeria', 'Zenith Bank Plc',
        'Konga Online Shopping', 'Airtel Nigeria', '9mobile Nigeria', 'Honeywell Flour Mills',
        'Nigerian Bottling Company'
    ],
    domains: [
        '.com.ng', '.ng', '.africa', '.store.ng', '.co',
        '.biz', '.online', '.net', '.com', '.org'
    ],
    bankCodes: {
        'First Bank': '011',
        'GTBank': '058',
        'Zenith Bank': '057',
        'UBA': '033',
        'Access Bank': '044',
        'Fidelity Bank': '070',
        'Union Bank': '032',
        'Sterling Bank': '232',
        'Wema Bank': '035'
    },
    accountPatterns: {
        'First Bank': '3',
        'GTBank': '0',
        'Zenith Bank': '1',
        'UBA': '2',
        'Access Bank': '0',
        'Fidelity Bank': '4',
        'Union Bank': '0',
        'Sterling Bank': '2',
        'Wema Bank': '0'
    },
    paymentTypes: [
        'Cash', 'Debit Card', 'Credit Card', 'POS', 'Bank Transfer',
        'USSD', 'Mobile Money', 'QR Code', 'E-Wallet', 'Cryptocurrency'
    ]
};

// Retail Data
const retailData = {
    categories: [
        'Traditional Wear', 'Local Fabrics', 'Food Items',
        'African Jewelry', 'Nigerian Art', 'Home Decor',
        'Traditional Musical Instruments', 'Ceremonial Items',
        'Nigerian Spices', 'Local Cosmetics', 'Handmade Crafts',
        'Traditional Footwear', 'Cultural Accessories'
    ],
    materials: [
        'Ankara', 'Aso-oke', 'Adire', 'Lace',
        'George Fabric', 'Kente', 'Batik', 'Linen',
        'Cotton', 'Silk', 'Damask', 'Jacquard',
        'Velvet', 'Chiffon', 'Organza'
    ],
    colors: [
        'Royal Blue', 'Gold', 'Forest Green', 'Burgundy',
        'Purple Rain', 'Sunset Orange', 'Ocean Blue',
        'Desert Sand', 'Palm Green', 'Coral Red',
        'African Sky', 'Earth Brown', 'Savanna Yellow'
    ],
    products: [
        'Kaftan', 'Agbada', 'Buba', 'Iro', ' Wrapper',
        'Dashiki', 'Kente Cloth', 'Adire', 'Aso-oke',
        'Ankara', 'Lace', 'George Fabric', 'Batik',
        'Brocade', 'Damask', 'Jacquard', 'Velvet'
    ],
    units: [
        'kg', 'g', 'pcs', 'yards', 'm',
        'cm', 'litres', 'ml', 'boxes', 'sets',
        'pairs', 'bundles', 'rolls', 'sheets'
    ]
};

// Nigerian Content
const nigerianContent = {
    words: [
        'Naija', 'Wahala', 'Oyinbo', 'Abeg', 'Oga',
        'Shakara', 'Jollof', 'Amebo', 'Tokunbo', 'Ajebutter',
        'Danfo', 'Okada', 'Asun', 'Suya', 'Owambe'
    ],
    proverbs: [
        'A child who washes his hands can dine with kings',
        'The patient dog eats the fattest bone',
        'When the right hand washes the left hand, the left hand washes the right hand',
        'A single tree cannot make a forest',
        'The river that forgets its source will dry up'
    ]
};

// Address Data
const addressData = {
    cities: [
        'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan',
        'Kaduna', 'Enugu', 'Benin City', 'Calabar', 'Warri',
        'Ilorin', 'Abeokuta', 'Onitsha', 'Aba', 'Jos',
        'Maiduguri', 'Owerri', 'Sokoto', 'Akure', 'Bauchi'
    ],
    states: [
        'Lagos', 'FCT Abuja', 'Rivers', 'Kano', 'Oyo',
        'Kaduna', 'Enugu', 'Edo', 'Cross River', 'Delta',
        'Kwara', 'Ogun', 'Anambra', 'Abia', 'Plateau',
        'Borno', 'Imo', 'Sokoto', 'Ondo', 'Bauchi'
    ],
    lgas: [
        'Alimosho', 'Amuwo-Odofin', 'Surulere', 'Ikeja', 'Eti-Osa',
        'Agege', 'Mushin', 'Oshodi-Isolo', 'Ikorodu', 'Kosofe',
        'Yaba', 'Ifako-Ijaiye', 'Somolu', 'Agboyi-Ketu', 'Apapa',
        'Bariga', 'Lagos Island', 'Lagos Mainland', 'Ojodu', 'Ojo'
    ],
    streets: [
        'Awolowo Road', 'Broad Street', 'Allen Avenue', 'Adeniran Ogunsanya',
        'Adeola Odeku', 'Ajose Adeogun', 'Opebi Road', 'Ademola Adetokunbo',
        'Marina Street', 'Balogun Street', 'Kofo Abayomi', 'Akin Adesola',
        'Ahmadu Bello Way', 'Adetokunbo Ademola', 'Ligali Ayorinde',
        'Bourdillon Road', 'Falomo Road', 'Ozumba Mbadiwe', 'Idejo Street'
    ],
    africanCountries: [
        'Nigeria', 'Ghana', 'South Africa', 'Kenya', 'Egypt',
        'Morocco', 'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda',
        'Senegal', 'Ivory Coast', 'Cameroon', 'Angola', 'Zimbabwe'
    ],
    countries: [
        'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Australia',
        'Germany', 'France', 'Japan', 'China', 'India',
        'Brazil', 'South Africa', 'UAE', 'Singapore', 'Netherlands'
    ]
};

// Content generators
const contentGenerators = {
    // Amount generators
    amount: {
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
            const bases = [99, 999, 9999, 99999];
            const base = getRandomItem(bases);
            return `₦ ${formatWithCommas(base)}.99`;
        },
        round: () => {
            const bases = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
            const base = getRandomItem(bases);
            return `₦ ${formatWithCommas(base)}.00`;
        },
        abbreviated: () => {
            const amount = Math.floor(Math.random() * 10000000) + 100000;
            if (amount >= 1000000) {
                return `₦ ${(amount / 1000000).toFixed(1)}M`;
            }
            return `₦ ${(amount / 1000).toFixed(1)}K`;
        },
        words: () => {
            const amount = Math.floor(Math.random() * 10000000) + 100;
            return numberToWords(amount) + ' Naira';
        },
        amountRange: () => {
            const min = Math.floor(Math.random() * 90000) + 10000;
            const max = min + Math.floor(Math.random() * 90000) + 10000;
            return `₦ ${formatWithCommas(min)} - ₦ ${formatWithCommas(max)}`;
        }
    },

    // Retail generators
    retail: {
        category: () => getRandomItem(retailData.categories),
        material: () => getRandomItem(retailData.materials),
        color: () => getRandomItem(retailData.colors),
        productName: () => getRandomItem(retailData.products),
        modifier: () => getRandomItem(['Premium', 'Classic', 'Traditional', 'Modern', 'Luxury', 'Handcrafted']),
        productVariant: () => {
            const product = getRandomItem(retailData.products);
            const material = getRandomItem(retailData.materials);
            const color = getRandomItem(retailData.colors);
            return `${product} / ${material} / ${color}`;
        },
        sku: () => {
            const prefix = 'NGR';
            const number = Math.floor(Math.random() * 100000).toString().padStart(6, '0');
            return `${prefix}-${number}`;
        }
    },

    // Nigerian content generators
    nigerian: {
        nigerianWord: () => getRandomItem(nigerianContent.words),
        nigerianWords: () => {
            const count = Math.floor(Math.random() * 3) + 2;
            return Array.from({length: count}, () => getRandomItem(nigerianContent.words)).join(' ');
        },
        proverb: () => getRandomItem(nigerianContent.proverbs),
        multiLineProverb: () => {
            const count = Math.floor(Math.random() * 2) + 2;
            return Array.from({length: count}, () => getRandomItem(nigerianContent.proverbs)).join('\n');
        }
    },

    // Date generators
    date: {
        date: (date) => formatDate(date || generateRandomDate()),
        dateTime: (date) => {
            date = date || generateRandomDate();
            return `${formatDate(date)} • ${formatTime(date)}`;
        },
        dayOfWeek: (date) => {
            date = date || generateRandomDate();
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
        },
        month: (date) => {
            date = date || generateRandomDate();
            return ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
        },
        year: (date) => {
            date = date || generateRandomDate();
            return date.getFullYear().toString();
        }
    },

    // Customer generators
    customer: {
        fullName: () => `${getRandomItem(customerData.firstNames)} ${getRandomItem(customerData.lastNames)}`,
        firstName: () => getRandomItem(customerData.firstNames),
        lastName: () => getRandomItem(customerData.lastNames),
        prefix: () => {
            const prefix = getRandomItem(customerData.titles);
            const firstName = getRandomItem(customerData.firstNames);
            const lastName = getRandomItem(customerData.lastNames);
            return `${prefix} ${firstName} ${lastName}`;
        },
        suffix: () => getRandomItem(customerData.suffixes),
        jobTitle: () => getRandomItem(customerData.jobTitles),
        jobArea: () => getRandomItem(customerData.jobAreas),
        email: () => {
            const fname = getRandomItem(customerData.firstNames).toLowerCase();
            const lname = getRandomItem(customerData.lastNames).toLowerCase();
            return `${fname}.${lname}@gmail.com`;
        },
        socialHandle: () => '@naija_' + getRandomItem(customerData.firstNames).toLowerCase()
    },

    // Business generators
    business: {
        bankName: () => getRandomItem(businessData.banks),
        businessType: () => getRandomItem(businessData.businessTypes),
        businessName: () => getRandomItem(businessData.businessNames),
        accountNumber: () => {
            const bank = getRandomItem(businessData.banks);
            const prefix = businessData.accountPatterns[bank] || '0';
            const remaining = Math.floor(Math.random() * 100000000).toString().padStart(9, '0');
            return prefix + remaining;
        },
        bankCode: () => {
            const bank = getRandomItem(businessData.banks);
            return businessData.bankCodes[bank] || '000';
        },
        orderNumber: () => {
            const prefix = 'NGR';
            const number = Math.floor(Math.random() * 100000).toString().padStart(6, '0');
            return `${prefix}${number}`;
        },
        paymentType: () => getRandomItem(businessData.paymentTypes),
        website: () => {
            const business = getRandomItem(businessData.businessNames)
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '')
                .replace(/\s+/g, '');
            const domain = getRandomItem(businessData.domains);
            return `www.${business}${domain}`;
        }
    },

    // Address generators
    address: {
        city: () => getRandomItem(addressData.cities),
        state: () => getRandomItem(addressData.states),
        lga: () => getRandomItem(addressData.lgas),
        street: () => getRandomItem(addressData.streets),
        fullAddress: () => {
            const number = Math.floor(Math.random() * 200) + 1;
            return `${number} ${getRandomItem(addressData.streets)}, ${getRandomItem(addressData.lgas)}, ${getRandomItem(addressData.cities)}`;
        },
        africanCountry: () => getRandomItem(addressData.africanCountries),
        country: () => getRandomItem(addressData.countries)
    }
};

// Show UI
figma.showUI(__html__, { width: 240, height: 360 });

// Message handler
figma.ui.onmessage = async (msg) => {
    try {
        // Check if any text layers are selected
        const textNodes = figma.currentPage.selection.filter(node => node.type === "TEXT");
        if (textNodes.length === 0) {
            figma.notify("Please select at least one text layer");
            return;
        }

        // Load fonts for all text nodes first
        for (const node of textNodes) {
            try {
                await figma.loadFontAsync(node.fontName);
            } catch (fontError) {
                console.error('Font loading error:', fontError);
                figma.notify("Error: Could not load font");
                return;
            }
        }

        const type = msg.type;
        let contentGenerated = false;

        // Find the appropriate generator and generate unique content for each node
        for (const [category, generators] of Object.entries(contentGenerators)) {
            if (type in generators) {
                textNodes.forEach(node => {
                    const content = generators[type]();
                    node.characters = content;
                });
                contentGenerated = true;
                break;
            }
        }

        if (contentGenerated) {
            figma.notify("Content generated! ✨");
        } else {
            figma.notify("Unknown content type");
        }
    } catch (error) {
        console.error('Plugin error:', error);
        figma.notify("Error: Could not generate content");
    }
};
