import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline } from 'react-icons/md';

import * as Yup from 'yup';
import BannerInput from './BannerInput';
import DatePicker from './DateInput';

import { Container } from './styles';

import api from '~/services/api';

import { meetupRequest } from '~/store/modules/events/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrogatória'),
  location: Yup.string().required('A localização é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  banner_id: Yup.number(),
});

export default function Edit({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [event, setEvent] = useState([]);
  const [banner, setBanner] = useState('');
  const [meetDate, setMeetDate] = useState();

  const initialData = {
    banner_id: banner,
    title: event.title,
    description: event.description,
    location: event.location,
    date: meetDate,
  };

  console.tron.log(initialData.description);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`schedule/${id}`);
      const formattedDate = format(
        parseISO(response.data.date),
        "d 'de' MMMM 'às' H'h'",
        {
          locale: pt,
        }
      );

      if (response.data.banner !== null) {
        let tmp = JSON.stringify(response.data.banner.url).toString();
        tmp = tmp.replace(/"/g, '');
        setBanner(tmp);
      }
      setMeetDate(formattedDate);
      setEvent(response.data);
    }

    loadMeetup();
  }, [id]);

  console.tron.log(`ED: ${event.description}`);

  console.tron.log(typeof event.description);

  function handleSubmit({ banner_id, title, description, date, location }) {
    const host_id = 10;
    dispatch(
      meetupRequest(host_id, banner_id, title, description, date, location, id)
    );
  }

  return (
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          name="description"
          placeholder="Descrição completa do meetup"
          multiline
          rows="10"
        />

        <DatePicker className="datePicker" name="date" />

        <Input name="location" placeholder="Localização" />
        <button type="submit" className="saveButton">
          <div>
            <MdAddCircleOutline size={20} />
            <p>Salvar Meetup</p>
          </div>
        </button>
      </Form>
    </Container>
  );
}
