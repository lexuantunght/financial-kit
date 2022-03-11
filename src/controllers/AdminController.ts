import Cookie from 'js-cookie';
import { useMutation } from 'react-query';
import { LoginData, UserData } from '../common/models';
import { domain, host } from '../utils/config/api.config';
import { postHelper } from '../utils/helper/AxiosHelper';

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
