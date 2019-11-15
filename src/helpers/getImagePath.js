export const getDrinkImagePath = type => {
  const imagesPath = process.env.PUBLIC_URL + '/images/drinks/';
  switch (type) {
    case 'Beer':
      return imagesPath + 'beer.png';
    default:
      return imagesPath + 'beer.png';
  }
};

export const getHealthImagePath = health => {
  const imagesPath = process.env.PUBLIC_URL + '/images/health/';
  switch (health) {
    case 'Vomiting':
      return imagesPath + 'vomiting.png';
    default:
      return imagesPath + 'vomiting.png';
  }
};
