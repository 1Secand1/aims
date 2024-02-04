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

function getJwtToken(userData) {
  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  });
};

function userCreation(userData) {
  return fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  });
};

export { fetchData, getJwtToken, userCreation };
