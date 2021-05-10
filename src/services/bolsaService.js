import axiosRequest from './axiosRequest';

class bolsaService {
  constructor() {
    this.urlBase = 'b3-ticker';
  }

  obterTicker(ticker, data) {
    return new Promise((resolve, reject) => {
      try {
        data = '2021-05-06';
        axiosRequest.post(`${this.urlBase}/${ticker}/${data}`)
          .then((response) => {
            resolve(response.data);
          }).catch((e) => {
            reject(e);
          });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default bolsaService;
