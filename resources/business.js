// Business Data
import { customerData } from './customer';

export const businessData = {
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
  transactionTypes: [
    'Bank Transfer', 'USSD Payment', 'POS Transaction',
    'Mobile Banking', 'ATM Withdrawal', 'Web Payment',
    'Standing Order', 'Direct Debit', 'Cheque Payment',
    'International Transfer'
  ],
  businessPrefixes: [
    'Nigerian', 'Lagos', 'Abuja', 'Royal', 'Golden',
    'Premium', 'Elite', 'Supreme', 'Global', 'African',
    'West African', 'Pan-African', 'Mega', 'Universal', 'National'
  ],
  businessSuffixes: [
    'Limited', 'Enterprises', 'Industries', 'International',
    'Ventures', 'Solutions', 'Services', 'Corporation',
    'Consolidated', 'Integrated', 'Holdings', 'Group',
    'Incorporated', 'Associates', 'Partners'
  ]
};

export function generateBusinessContent(type) {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generatePhoneNumber() {
    const prefixes = ['0803', '0805', '0806', '0807', '0808', '0809', '0810', '0811', '0812', '0813', '0814', '0815', '0816', '0817', '0818', '0819'];
    const suffix = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return `${getRandomItem(prefixes)} ${suffix.slice(0,3)} ${suffix.slice(3)}`;
  }

  function generateOrderNumber() {
    const prefix = 'ORD';
    const timestamp = new Date().getTime().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
  }

  switch (type) {
    case 'businessName':
      return `${getRandomItem(businessData.businessPrefixes)} ${getRandomItem(businessData.businessTypes)} ${getRandomItem(businessData.businessSuffixes)}`;
    case 'businessType':
      return getRandomItem(businessData.businessTypes);
    case 'bankName':
      return getRandomItem(businessData.banks);
    case 'accountNumber':
      return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
    case 'accountName':
      return `${getRandomItem(customerData.firstNames)} ${getRandomItem(customerData.lastNames)} ${getRandomItem(businessData.businessSuffixes)}`;
    case 'bankCode':
      const bank = getRandomItem(businessData.banks);
      return businessData.bankCodes[bank] || '044';
    case 'transactionType':
      return getRandomItem(businessData.transactionTypes);
    case 'businessAddress':
      const plotNumber = Math.floor(Math.random() * 300) + 1;
      const street = getRandomItem(['Broad', 'Marina', 'Allen', 'Awolowo', 'Bourdillon', 'Adeola Odeku', 'Ademola Adetokunbo', 'Kofo Abayomi']);
      return `${plotNumber} ${street} Street, ${getRandomItem(customerData.jobAreas)}`;
    case 'phoneNumber':
      return generatePhoneNumber();
    case 'orderNumber':
      return generateOrderNumber();
    default:
      return null;
  }
}
