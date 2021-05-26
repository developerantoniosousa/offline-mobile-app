import getRealm from 'services/realm';

const entity = 'Repository';

class RepositorySchema {
    static schema = {
        name: 'Repository',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            fullname: 'string',
            description: 'string',
            stars: 'int',
            forks: 'int'
        }
    }

    static async add(data) {
        const database = await getRealm();

        database.write(() => {
            database.create('Repository', data);
        });
    }
}

export default RepositorySchema;