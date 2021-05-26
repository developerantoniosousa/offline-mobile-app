import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { showMessage } from "react-native-flash-message";

import { Container, Title, Form, Input, Submit, List } from './styles';
import { Repository } from 'components/Repository';

import RepositoryService from 'services/RepositoryService';
import RepositorySchema from 'schemas/RepositorySchema';

export function Main() {
  const [repositoryInputValue, setRepositoryInputValue] = useState('');
  const [addRepositoryError, setAddRepositoryError] = useState(false);

  async function handleAddRepository() {
    try {
      const { data } = await RepositoryService.get(repositoryInputValue);
      
      const repository = {
        id: data.id,
        name: data.name,
        fullname: data.full_name,
        description: data.description,
        stars: data.stargazers_count,
        forks: data.forks_count
      }

      RepositorySchema.add(repository);

      Keyboard.dismiss();
      setRepositoryInputValue('');
      setAddRepositoryError(false);
    } catch (error) {
      showMessage({
        message: 'Falha no cadastro do repositório',
        description: error.message || null,
        type: 'danger'
      });
      setAddRepositoryError(true);
    }
  }

  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          value={repositoryInputValue}
          onChangeText={setRepositoryInputValue}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
          hasError={addRepositoryError}
        />
        <Submit onPress={handleAddRepository}>
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
