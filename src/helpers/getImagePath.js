export const getDrinkImagePath = type => {
  const imagesPath = `${process.env.PUBLIC_URL}/images/drinks/`;
  switch (type) {
    case 'Beer':
      return `${imagesPath}beer.png`;
    case 'Wine':
      return `${imagesPath}wine.png`;
    case 'Cider':
      return `${imagesPath}cider.png`;
    case 'Liquor':
      return `${imagesPath}liquor.png`;
    case 'Cognac':
      return `${imagesPath}cognac.png`;
    case 'Vodka':
      return `${imagesPath}vodka.png`;
    case 'Cubata':
      return `${imagesPath}cubata.png`;
    case 'Tequila':
      return `${imagesPath}tequila.png`;
    case 'Cocktail':
      return `${imagesPath}cocktail.png`;
    default:
      return `${imagesPath}beer.png`;
  }
};

export const getHealthImagePath = health => {
  const imagesPath = `${process.env.PUBLIC_URL}/images/health/`;
  switch (health) {
    case 'Vomiting':
      return `${imagesPath}vomiting.png`;
    case 'Hangover':
      return `${imagesPath}hangover.png`;
    case 'Insomnia':
      return `${imagesPath}insomnia.png`;
    case 'Stomach pain':
      return `${imagesPath}stomach_pain.png`;
    case 'All is fine':
      return `${imagesPath}all_is_fine.png`;
    default:
      return `${imagesPath}vomiting.png`;
  }
};
