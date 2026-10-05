export type MenuItem = {
  name: string
  price: number
  desc?: string
  veg?: boolean
  popular?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  blurb: string
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'bakery',
    label: 'From the Bakery',
    blurb: 'Out of the oven every morning. Cakes by the pound, pastries by the piece.',
    items: [
      { name: 'Butter Croissant', price: 90, veg: true },
      { name: 'Chocolate Danish', price: 110, veg: true },
      { name: 'Glazed Donut', price: 80, veg: true },
      { name: 'Fudge Brownie', price: 140, veg: true, popular: true },
      { name: 'Blueberry Muffin', price: 110, veg: true },
      { name: 'Choc Chip Cookies (3 pc)', price: 100, veg: true },
      { name: 'Swiss Roll', price: 120, veg: true },
      { name: 'Black Forest Pastry', price: 130, veg: true, popular: true },
      { name: 'White Forest Pastry', price: 130, veg: true },
      { name: 'Fresh Cream Cake', price: 950, desc: 'per pound', veg: true },
      { name: 'Chocolate Truffle Cake', price: 1250, desc: 'per pound', veg: true, popular: true },
      { name: 'Red Velvet Cake', price: 1350, desc: 'per pound', veg: true },
    ],
  },
  {
    id: 'cafe',
    label: 'Cafe',
    blurb: 'Beans ground to order, and chiya the way home makes it.',
    items: [
      { name: 'Milk Chiya', price: 40, veg: true },
      { name: 'Masala Chiya', price: 70, veg: true },
      { name: 'Espresso', price: 110, veg: true },
      { name: 'Americano', price: 130, veg: true },
      { name: 'Cappuccino', price: 180, veg: true, popular: true },
      { name: 'Cafe Latte', price: 190, veg: true },
      { name: 'Cafe Mocha', price: 210, veg: true },
      { name: 'Cold Coffee', price: 220, veg: true, popular: true },
      { name: 'Iced Americano', price: 170, veg: true },
      { name: 'Hot Chocolate', price: 200, veg: true },
      { name: 'Hot Lemon', price: 90, veg: true },
    ],
  },
  {
    id: 'fast-food',
    label: 'Fast Food',
    blurb: 'Quick plates for the lunch-break crowd.',
    items: [
      { name: 'Veg Burger', price: 160, veg: true },
      { name: 'Chicken Burger', price: 230 },
      { name: 'Cheese Burger', price: 260, popular: true },
      { name: 'French Fries', price: 140, veg: true, popular: true },
      { name: 'Peri Peri Fries', price: 170, veg: true },
      { name: 'Chicken Sandwich', price: 190 },
      { name: 'Club Sandwich', price: 230 },
      { name: 'Chicken Wings (6 pc)', price: 320 },
      { name: 'Sausage Roll', price: 90 },
      { name: 'Chicken Cutlet', price: 80 },
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese',
    blurb: 'Wok-fired and sauced properly, made only when you order.',
    items: [
      { name: 'Veg Chowmein', price: 150, veg: true },
      { name: 'Buff Chowmein', price: 170 },
      { name: 'Chicken Chowmein', price: 190, popular: true },
      { name: 'Mixed Chowmein', price: 230 },
      { name: 'Veg Fried Rice', price: 160, veg: true },
      { name: 'Chicken Fried Rice', price: 210 },
      { name: 'Chicken Chilli', price: 320, popular: true },
      { name: 'Veg Manchurian', price: 240, veg: true },
      { name: 'Chicken Thukpa', price: 220 },
      { name: 'Spring Roll (2 pc)', price: 160, veg: true },
    ],
  },
  {
    id: 'street-food',
    label: 'Street Food',
    blurb: 'The snacks you cross the road for.',
    items: [
      { name: 'Steam Momo (Veg)', price: 130, veg: true },
      { name: 'Steam Momo (Buff)', price: 150 },
      { name: 'Steam Momo (Chicken)', price: 170, popular: true },
      { name: 'C-Momo', price: 240, popular: true },
      { name: 'Jhol Momo', price: 210 },
      { name: 'Fried Momo', price: 190 },
      { name: 'Chatpate', price: 90, veg: true },
      { name: 'Pani Puri', price: 110, veg: true },
      { name: 'Samosa (2 pc)', price: 60, veg: true },
      { name: 'Pakauda Plate', price: 110, veg: true },
    ],
  },
  {
    id: 'continental',
    label: 'Continental',
    blurb: 'Slow sauces, grilled things, comfort on a plate.',
    items: [
      { name: 'White Sauce Pasta', price: 280, veg: true },
      { name: 'Red Sauce Pasta', price: 260, veg: true },
      { name: 'Mac & Cheese', price: 300, veg: true },
      { name: 'Grilled Chicken Sandwich', price: 240 },
      { name: 'Garlic Bread with Cheese', price: 180, veg: true },
      { name: 'Cream of Mushroom Soup', price: 190, veg: true },
      { name: 'Chicken Steak, Sautéed Veg', price: 450, popular: true },
      { name: 'Fish & Chips', price: 420 },
    ],
  },
  {
    id: 'south-indian',
    label: 'South Indian',
    blurb: 'Crisp dosas, soft idlis, sambar that tastes right.',
    items: [
      { name: 'Plain Dosa', price: 160, veg: true },
      { name: 'Masala Dosa', price: 220, veg: true, popular: true },
      { name: 'Onion Dosa', price: 190, veg: true },
      { name: 'Egg Dosa', price: 200 },
      { name: 'Idli Sambar (3 pc)', price: 130, veg: true },
      { name: 'Medu Vada (2 pc)', price: 110, veg: true },
      { name: 'Mix Veg Uttapam', price: 200, veg: true },
    ],
  },
  {
    id: 'punjabi',
    label: 'Punjabi',
    blurb: 'Big flavours, butter where it belongs.',
    items: [
      { name: 'Chole Bhature', price: 240, veg: true, popular: true },
      { name: 'Paneer Butter Masala', price: 340, veg: true },
      { name: 'Dal Makhani', price: 300, veg: true },
      { name: 'Butter Naan', price: 70, veg: true },
      { name: 'Tandoori Roti', price: 40, veg: true },
      { name: 'Paneer Tikka (6 pc)', price: 300, veg: true },
      { name: 'Amritsari Kulcha with Chole', price: 220, veg: true },
      { name: 'Sweet Lassi', price: 130, veg: true },
    ],
  },
  {
    id: 'mithai',
    label: 'Mithai',
    blurb: 'For Dashain, Tihar, birthdays, or just because.',
    items: [
      { name: 'Gulab Jamun (2 pc)', price: 90, veg: true },
      { name: 'Rasgulla (2 pc)', price: 90, veg: true },
      { name: 'Rasmalai (2 pc)', price: 140, veg: true, popular: true },
      { name: 'Jalebi (plate)', price: 110, veg: true },
      { name: 'Coconut Barfi', price: 50, desc: 'per piece', veg: true },
      { name: 'Kaju Katli', price: 60, desc: 'per piece', veg: true },
      { name: 'Motichoor Laddu', price: 55, desc: 'per piece', veg: true },
      { name: 'Milk Peda', price: 45, desc: 'per piece', veg: true },
      { name: 'Kheer (bowl)', price: 120, veg: true },
    ],
  },
]

export const formatRs = (n: number) => `रू ${n.toLocaleString('en-IN')}`
