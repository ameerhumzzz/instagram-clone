import axios from 'axios';

const invokeApi = async ({method, path, data = {}, headers = {}}) => {
  try {
    let requestObject = {
      method: method,
      baseURL: 'https://app.fakejson.com/q/',
      url: path,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
    if (method === 'GET') {
      requestObject.params = {...data};
    } else {
      requestObject.data = {...data};
    }
    console.log('requestObject: ', requestObject);
    const result = await axios(requestObject);
    console.log('ander result: ', result);
    return result;
  } catch (error) {
    console.log('ander error: ', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      throw new Error(error.response.data.error);
      // if (error.response.status === 401) {
      //     throw new Error(error.response.data.error)
      // }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(
        'The request was made but no response was received',
        error.request,
      );
      throw new Error('There was some error');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(
        'Something happened in setting up the request that triggered an Error',
        error.message,
      );
      throw new Error(error.message);
    }

    throw new Error('There was some error');
  }
};

export default invokeApi;
