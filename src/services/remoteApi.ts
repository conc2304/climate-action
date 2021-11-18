const basePostConfig: RequestInit = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const remoteApiPostData = async (
  url: string,
  data = {},
  customConfig: RequestInit = {}
) => {
  const response = await fetch(url, {
    ...basePostConfig,
    ...customConfig,
    body: JSON.stringify(data),
  });

  return response.json();
};

export const remoteApiGetData = async (url: string, config = {}) => {
  const response = await fetch(url, config);

  return response.json();
};
