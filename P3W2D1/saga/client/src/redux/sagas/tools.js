export const getDataFromServer = async (url) => {
  const response = await fetch(url);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw Error(result.message);
};

export const createBookFromServer = async (url, newBook) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw Error(result.message);
};
