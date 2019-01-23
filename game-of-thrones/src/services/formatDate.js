export const formatDate = (data) => {
  const monthes = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  if (data.indexOf('T') !== -1) {
    const date = data.split('-');
    const year = date[0];
    const month = monthes[Number(date[1]) - 1];
    const day = date[2].split('T')[0];
    return `${day} ${month} ${year}`;
  }

  const date = data.split('-');
  const year = date[0];
  const month = monthes[Number(date[1]) - 1];
  const day = date[2];
  return `${day} ${month} ${year}`;
};
