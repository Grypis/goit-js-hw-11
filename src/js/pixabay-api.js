export const fetchImages = requestInput => {
  const searchParams = new URLSearchParams({
    key: '44175237-f9b9fdf7256a15d8718cda915',
    q: requestInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
