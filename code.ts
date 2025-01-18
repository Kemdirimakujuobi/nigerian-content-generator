// Utility functions
function formatWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function padKobo(kobo: number): string {
  return kobo.toString().padStart(2, '0');
}

// Convert number to words
function numberToWords(num: number): string {
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const scales = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';

  function recurse(n: number): string {
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
    } else if (amount >= 1000) {
      return `₦ ${(amount / 1000).toFixed(1)}K`;
    }
    return `₦ ${amount}`;
  },

  // Word format (e.g., "One Million Five Hundred Thousand Naira")
  words: () => {
    const amount = Math.floor(Math.random() * 10000000) + 100;
    return numberToWords(amount) + ' Naira';
  }
};

// Show UI
figma.showUI(__html__, { width: 240, height: 360 });

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    // Check if any text layers are selected
    const textNodes = figma.currentPage.selection.filter(
      node => node.type === "TEXT"
    ) as TextNode[];

    if (textNodes.length === 0) {
      figma.notify("Please select at least one text layer");
      return;
    }

    // Generate amount based on selected type
    const generator = amountGenerators[msg.type] || amountGenerators.standard;
    const amount = generator();
    console.log('Generated amount:', amount);

    // Update each selected text node
    for (const node of textNodes) {
      try {
        await figma.loadFontAsync(node.fontName as FontName);
        node.characters = amount;
      } catch (fontError) {
        console.error('Font loading error:', fontError);
        figma.notify("Error: Could not load font");
        continue;
      }
    }

    figma.notify("Naira amount generated! 💰");
  } catch (error) {
    console.error('Plugin error:', error);
    figma.notify("Error: Could not generate amount");
  }
};
