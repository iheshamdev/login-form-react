import axios from 'axios';
import { BASE_API_URL } from './contestants';
import getCookie from '../helpers/getCookie';
// import { toFormData } from './helpers';

const HTTP_REQUEST = async (
  method,
  endpoint,
  postData,
  auth = undefined,
  contentType = 'application/json'
) => {
  let token;

  if (auth === true) {
    token = getCookie('token');
    if (!token) {
      return false;
    }
  }

  const request = await axios({
    method,
    url: BASE_API_URL + endpoint,
    data: postData,
    headers: {
      'Content-Type': contentType,
      Authorization: auth ? `Bearer ${token}` : '',
    },
  })
    .then(function (res) {
      console.warn(res);
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return err;
    });
  return request;
};

export const POST = (auth, endpoint, data) => {
  return HTTP_REQUEST('post', endpoint, data, auth);
};

export const PATCH = (auth, endpoint, data) => {
  return HTTP_REQUEST('patch', endpoint, data, auth);
};

export const PUT = (auth, endpoint, data) => {
  return HTTP_REQUEST('put', endpoint, data, auth);
};

export const DELETE = (auth, endpoint, data) => {
  return HTTP_REQUEST('delete', endpoint, data, auth);
};

export const GET = (auth, endpoint) => {
  return HTTP_REQUEST('get', endpoint, {}, auth);
};
