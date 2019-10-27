import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdCreate } from 'react-icons/md';
import { IoMdTrash, IoMdCalendar, IoMdPin } from 'react-icons/io';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { deleteRequest } from '~/store/modules/events/actions';

import {
  Container,
  CancelButton,
  EditButton,
  BannerImg,
  DescContainer,
  DetailContainer,
} from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [event, setEvent] = useState([]);
  const [banner, setBanner] = useState('');
  const [meetDate, setMeetDate] = useState();

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

  function handleCancel() {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      <header>
        <h1>{event.title}</h1>
        <div>
          <Link to={`/edit/${id}`}>
            <CancelButton>
              <button type="submit">
                <div>
                  <MdCreate size={20} />
                  <p>Editar</p>
                </div>
              </button>
            </CancelButton>
          </Link>

          <EditButton>
            <button type="submit" onClick={handleCancel}>
              <div>
                <IoMdTrash size={20} />
                <p>Cancelar</p>
              </div>
            </button>
          </EditButton>
        </div>
      </header>

      <BannerImg>
        <img src={banner} alt="" />
      </BannerImg>

      <DescContainer>
        <p>{event.description}</p>
      </DescContainer>

      <DetailContainer>
        <IoMdCalendar size={15} color="#9f9f9f" />
        <p>{meetDate}</p>
        <IoMdPin size={15} color="#9f9f9f" />
        <p>{event.location}</p>
      </DetailContainer>
    </Container>
  );
}

Details.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
