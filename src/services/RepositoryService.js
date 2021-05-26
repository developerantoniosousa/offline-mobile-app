import api from 'utils/api';

const resource = 'repos';

class Repository {
    static get(repository) {
        return api.get(`/${resource}/${repository}`);
    }
}

export default Repository;