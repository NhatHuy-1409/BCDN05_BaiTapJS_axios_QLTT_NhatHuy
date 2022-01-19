function UserServices() {
    this.getUsers = function () {
        return axios({
            method: 'get',
            url: 'https://61d266dcda87830017e59498.mockapi.io/userManagement',
        });
    }
    this.addUser = function (user) {
        return axios({
            method: 'post',
            url: 'https://61d266dcda87830017e59498.mockapi.io/userManagement',
            data: user
        });
    }
    this.deleteUser = function (id) {
        return axios({
            method: 'delete',
            url: `https://61d266dcda87830017e59498.mockapi.io/userManagement/${id}`,
        });
    }
    this.watchUser = function (id) {
        return axios({
            method: 'get',
            url: `https://61d266dcda87830017e59498.mockapi.io/userManagement/${id}`,
        });
    }
    this.updateUser = function (id, user) {
        return axios({
            method: 'put',
            url: `https://61d266dcda87830017e59498.mockapi.io/userManagement/${id}`,
            data: user
        });
    }

}