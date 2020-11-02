import InvokeApi from '../../invokeApi';

export const newsFeedAPI = async ({token}) => {
  const data = {
    token: token,
  };

  let requestObject = {
    method: 'GET',
    path: 'ACxg7IhT',
    data: data,
  };
  const result = await InvokeApi(requestObject);
  return result.data;
};
