// Retail Data
export const retailData = {
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
  patterns: [
    'Traditional', 'Modern', 'Geometric', 'Floral',
    'Abstract', 'Tribal', 'Animal Print', 'Cultural',
    'Contemporary', 'Classic', 'Vintage', 'Royal'
  ],
  sizes: [
    'Small', 'Medium', 'Large', 'XL', '2XL',
    'Free Size', 'Custom Size', '38', '40', '42',
    '44', '46', '48', '50', '52'
  ],
  modifiers: [
    'Premium', 'Luxury', 'Handcrafted', 'Limited Edition',
    'Custom Made', 'Designer', 'Exclusive', 'Traditional',
    'Modern', 'Classic', 'Vintage', 'Royal Collection'
  ],
  foodItems: [
    'Jollof Rice', 'Pounded Yam', 'Egusi Soup', 'Suya',
    'Moi Moi', 'Chin Chin', 'Akara', 'Puff Puff',
    'Kilishi', 'Ogbono Soup', 'Efo Riro', 'Asun',
    'Pepper Soup', 'Amala', 'Ewedu'
  ],
  spices: [
    'Cameroon Pepper', 'Ehuru', 'Uziza', 'Uda',
    'Alligator Pepper', 'Calabash Nutmeg', 'Dried Ginger',
    'African Basil', 'Locust Bean', 'Dried Garlic'
  ]
};

export function generateRetailContent(type) {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateSKU() {
    const prefix = getRandomItem(['NGR', 'LGS', 'ABJ', 'PHC']);
    const category = getRandomItem(['TW', 'LF', 'FI', 'AJ', 'NA', 'HD']);
    const number = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${category}-${number}`;
  }

  switch (type) {
    case 'category':
      return getRandomItem(retailData.categories);
    case 'productName':
      return `${getRandomItem(retailData.modifiers)} ${getRandomItem(retailData.categories)}`;
    case 'modifier':
      return getRandomItem(retailData.modifiers);
    case 'productVariant':
      return `${getRandomItem(retailData.categories)}/${getRandomItem(retailData.colors)}/${getRandomItem(retailData.sizes)}`;
    case 'material':
      return getRandomItem(retailData.materials);
    case 'pattern':
      return getRandomItem(retailData.patterns);
    case 'color':
      return getRandomItem(retailData.colors);
    case 'size':
      return getRandomItem(retailData.sizes);
    case 'sku':
      return generateSKU();
    case 'foodItem':
      return getRandomItem(retailData.foodItems);
    case 'spice':
      return getRandomItem(retailData.spices);
    default:
      return null;
  }
}
