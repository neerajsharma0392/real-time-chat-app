import {getAuth} from 'firebase/auth'

export const postApi = async (url, data) => {
    url = "http://4.213.171.237:8080" + url;
    const currentUser = getAuth().currentUser;

    const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            AuthToken: await currentUser.getIdToken(),
            'Content-Type': "application/json"
        }
    })

    return res;

}
