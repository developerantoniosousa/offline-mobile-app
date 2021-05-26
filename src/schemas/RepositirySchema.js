export class RepositorySchema {
    static schema = {
        name: 'Repository',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            fullname: 'stirng',
            description: 'string',
            stars: 'int',
            forks: 'int'
        }
    }
}