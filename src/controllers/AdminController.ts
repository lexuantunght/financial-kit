import Cookie from 'js-cookie';
import { useMutation, useQuery } from 'react-query';
import { LoginData, UserData } from '../common/models';
import { domain, host } from '../utils/config/api.config';
import { postHelper, getHelper } from '../utils/helper/AxiosHelper';

export const useLogin = () => {
    return useMutation(async ({ username, password }: LoginData) => {
        const res = await postHelper(`${host}/user/signin`, {
            username,
            password,
        });
        if (res.status === 'success') {
            Cookie.set('token', res.data.accessToken, { domain: domain });
        }
        return res.data as UserData;
    });
};

export const useFetchCurrent = () => {
    return useQuery<UserData, Error>(['posts'], async () => {
        const headerWithToken = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token': Cookie.get('token'),
        };
        const res = await getHelper(`${host}/user/current`, headerWithToken);
        return res.data;
    });
};
