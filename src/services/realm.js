import Realm from 'realm';

import RepositorySchema from 'schemas/RepositorySchema';

export default function getRealm() {
    return Realm.open({
        path: 'database',
        schema: [RepositorySchema]
    });
}
