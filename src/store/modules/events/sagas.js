import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

export function* editEvent({ payload }) {
  try {
    const {
      host_id,
      banner_id,
      date,
      title,
      description,
      location,
      meetup_id,
    } = payload;

    if (!meetup_id) {
      yield call(api.post, 'events', {
        host_id,
        banner_id,
        date,
        title,
        description,
        location,
      });
      toast.success('Meetup criado com sucesso!');
    } else {
      yield call(api.put, `events/${meetup_id}`, {
        host_id,
        banner_id,
        date,
        title,
        description,
        location,
      });
      toast.success('Meetup Atualizado com sucesso!');
    }

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao atualizar o Meetup. Por favor, confira os dados.');
  }
}

export function* deleteEvent({ payload }) {
  try {
    const { meetup_id } = payload;

    yield call(api.delete, `events/${meetup_id}`);

    toast.success('Meetup cancelado com sucesso!');
    history.push('/dashboard');
  } catch (e) {
    toast.error('Falha ao cancelar Meetup. Tente novamente.');
  }
}

export default all([
  takeLatest('@events/DELETE_REQUEST', deleteEvent),
  takeLatest('@events/MEETUP_REQUEST', editEvent),
]);
