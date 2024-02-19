async function useAIMSFetch(url, method = 'GET', body = '') {
  try {
    if (!url) {
      throw new Error('URL is undefined');
    }

    const authorizedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
    if (!authorizedMethods.includes(method)) {
      throw new Error('Unauthorized method');
    }

    const fetchOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: method ?? null
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export { useAIMSFetch };
