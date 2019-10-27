import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha antiga"
        />

        <Input type="password" name="password" placeholder="Sua nova senha" />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme nova senha"
        />

        <button type="submit">
          <div>
            <MdAddCircleOutline size={22} />
            <p> Salvar Perfil</p>
          </div>
        </button>
      </Form>
    </Container>
  );
}
