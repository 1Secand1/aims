async function fetchData(url) {
  try {
    if (!url) throw new Error('url undefined');

    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export { fetchData };