import ajax from './ajax';
import { API } from '../../constants/api';

export const getSocialImg = data => {
    const url = `${API}/photos?_limit=10`;
    return ajax(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };