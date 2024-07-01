// api.js
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../config';

axios.interceptors.request.use(
    (config) => {
        const storedData = localStorage.getItem('persistMe');
        const user = JSON.parse(storedData);
        config.timeout = 40000;
        const AUTH_TOKEN = user?.user?.token || '';
        if (!config.headers.Authorization) {
            config.headers.Authorization = `${AUTH_TOKEN}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);
export const loginHandle = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/user/login`, data);
        return response;
    } catch (err) {
        return err;
    }
};

export const PortfolioHandle = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/user/portfoliofilter`, data);
        // return response;
    } catch (err) {
        return err;
    }
};

export const handleRefresh = async () => {
    try {
        const refreshToken = sessionStorage.getItem('refreshToken-dai214');

        if (!refreshToken) {
            throw new Error('Refresh token not found in session storage');
        }

        const response = await axios.post(
            `${REACT_APP_BASE_URL}/refresh`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            },
        );

        return response;
    } catch (err) {
        return err;
    }
};

export const handleRegister = async (data) => {
    try {
        const response = axios.post(`${REACT_APP_BASE_URL}/api/user/socialLogin`, data);
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};

export const InviteTaxProfessional = async (body) => {
    try {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authtoken = storedData?.user?.token;
        console.log('authtoken', authtoken);

        const response = await axios.post(
            `${REACT_APP_BASE_URL}/api/user/inviteTaxProfessional`,
            body,
            {
                headers: {
                    authorization: authtoken,
                },
            },
        );
        return response;
        // const result = await response.json();
        console.log('result', response);
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};

export const IsTaxProfessionalsExist = async (body) => {
    try {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authtoken = storedData?.user?.token;
        console.log('authtoken', authtoken);

        const response = await axios.get(`${REACT_APP_BASE_URL}/api/user/isTaxProfessionalsExist`, {
            headers: {
                authorization: authtoken,
            },
        });
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};

export const DeletesentInvitations = async (body) => {
    try {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authtoken = storedData?.user?.token;
        console.log('authtoken', authtoken);

        const response = await axios.post(`${REACT_APP_BASE_URL}/api/user/DeletesentInvitations`, {
            body,
            headers: {
                authorization: authtoken,
            },
        });
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};

export const incomingInvites = async (body) => {
    try {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authtoken = storedData?.user?.token;
        console.log('authtoken', authtoken);

        const response = await axios.post(`${REACT_APP_BASE_URL}/api/user/whoInvitesMe`, {
            body,
            headers: {
                authorization: authtoken,
            },
        });
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};

export const AcceptsentInvitations = async (body) => {
    try {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authtoken = storedData?.user?.token;
        console.log('authtoken', authtoken);

        const response = await axios.post(`${REACT_APP_BASE_URL}/api/user/AcceptsentInvitations`, {
            body,
            headers: {
                authorization: authtoken,
            },
        });
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};
