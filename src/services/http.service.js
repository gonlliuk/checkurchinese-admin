import axios from 'axios';
import config from '../../configs';

const { apiURL, tokenName } = config;
const token = window.localStorage.getItem(tokenName);

export default class HTTPService {
    constructor(baseUrl = '/', headers = {}) {
        this.http = axios.create({
            baseURL: apiURL || baseUrl,
            headers: {
                common: {
                    Authorization: token || '',
                    ...headers.common,
                },
                post: {
                    'Content-Type': 'application/json',
                    ...headers.post,
                },
            },
        });
    }

    get(url = '', params = {}, headers = {}) {
        return this.http.get(url, { params, headers }).then(res => res.data);
    }

    post(url = '', data = {}, params = {}, headers = {}) {
        return this.http.post(url, data, { params, headers }).then(res => res.data);
    }

    put(url = '', data = {}, params = {}, headers = {}) {
        return this.http.put(url, data, { params, headers }).then(res => res.data);
    }

    patch(url = '', data = {}, params = {}, headers = {}) {
        return this.http.patch(url, data, { params, headers }).then(res => res.data);
    }

    delete(url = '', params = {}, headers = {}) {
        return this.http.delete(url, { params, headers }).then(res => res.data);
    }
}
