export const getDataFromServer = async (url) => {
  const response = await fetch(url);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw Error(response.message);
};

export const postDataOnServer = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw Error(response.message);
};
