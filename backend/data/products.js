const products = [
  {
    name: 'Rich Dad Poor Dad',
    images: [
      { image1: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500' },
      { image1: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500' },
      { image1: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500' },
    ],
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    category: 'Book',
    Cost: {
      price: 350,
      negotiable: true,
    },
    expiresOn: 2077 - 9 - 19,
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti@gmail.com',
      phoneNo: { mobile: '9868383125', isVerified: true },
    },
  },
  {
    name: 'Fridge',
    images: [
      { image1: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500' },
      { image1: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500' },
      { image1: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500' },
    ],
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    category: 'Electronics',
    Cost: {
      price: 3500,
    },
    expiresOn: 2077 - 9 - 19,
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti1@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
  },
  {
    name: 'Nokia Mobile',
    images: [
      { image1: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500' },
      { image1: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500' },
      { image1: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500' },
    ],
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    category: 'Electronics',
    Cost: {
      price: 1350,
    },
    expiresOn: 2077 - 9 - 19,
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
  },
  {
    name: 'Daraz',
    images: [
      { image1: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500' },
      { image1: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500' },
      { image1: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500' },
    ],
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    category: 'Electronics',
    Cost: {
      price: 2500,
    },
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
    expiresOn: 2077 - 9 - 19,
  },
  {
    name: 'Dining Table',
    images: [
      { image1: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=500' },
      { image1: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
      { image1: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=500' },
    ],
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    category: 'Electronics',
    Cost: {
      price: 1500,
    },
    expiresOn: 2077 - 9 - 19,
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
  },
  {
    name: 'Old TV',
    images: [
      { image1: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500' },
      { image1: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500' },
      { image1: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500' },
    ],
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    category: 'Electronics',
    Cost: {
      price: 2100,
    },
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti Dhamala',
      selleraddress: 'Achham, Nepal',
      selleremail: 'dhamalamoti@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
    expiresOn: 2077 - 9 - 19,
  },
]

export default products
