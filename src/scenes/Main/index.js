import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, Input, Submit, List } from './styles';
import { Repository } from 'components/Repository';

export function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handler"
        data={[]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
            <Repository data={item} />
        )}
      />
    </Container>
  );
};
