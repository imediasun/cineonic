import axios from 'axios'

export default async function (email,token,pwd,pwd_confirmation) {
    console.log(process.env.VUE_APP_CLIENT_ID)
    let data = new FormData()
    data.append('email', email)
    data.append('password', pwd)
    data.append('password_confirmation', pwd_confirmation)
    data.append('token', token)
    data.append('client_id', process.env.VUE_APP_CLIENT_ID)
    data.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
    data.append('grant_type', 'password')

    let config = {
        method: 'post',
        url: `${process.env.VUE_APP_API_CLEAR}auth/password/reset`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        xhrFields: {withCredentials: true},
        data: data
    }


    await axios(config)
        .then(async function (response) {

            //reload
            localStorage.access_token = await response.data.access_token
            setTimeout(() => {
                window.location.href = '/'
            }, 400)

        })
        .catch(function (error) {
            console.log(JSON.stringify(error.response), 123)
            alert(error)
        })
}