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

export { getJwtToken, userCreation };
