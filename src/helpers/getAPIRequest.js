import axios from 'axios';

const TARGET = {
  PORT: process.env.TARGET_PORT || 8000,
  PREFIX: process.env.TARGET_PREFIX || '/api',
};

const headers = {
  'Content-Type': 'application/json',
};

function getRequestInstance(baseURL, config) {
  return axios.create({
    baseURL,
    ...config,
  });
}

export default function getAPIRequest() {
  const request = getRequestInstance(
    `http://localhost:${TARGET.PORT}${TARGET.PREFIX}`,
    { headers },
  );

  request.interceptors.response.use(
    ({ data }) => data,
    err => {
      const { response } = err;

      if (!response) {
        return Promise.reject();
      }

      return Promise.reject({ ...response });
    },
  );

  return request;
}
