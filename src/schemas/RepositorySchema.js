import getRealm from 'services/realm';

const ENTITY = 'Repository';

class RepositorySchema {
    static schema = {
        name: ENTITY,
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
            database.create(ENTITY, data);
        });
    }
}

export default RepositorySchema;