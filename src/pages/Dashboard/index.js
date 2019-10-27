import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, MeetList } from './styles';

export default function Dashboard() {
  const [event, setEvent] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('events', {
        params: { page },
      });

      const available = response.data.filter(item => {
        return item.past === false;
      });

      available.map(item => {
        item.date = format(parseISO(item.date), "d 'de' MMMM 'às' H'h'", {
          locale: pt,
        });
        return true;
      });
      setEvent(available);
    }
    loadSchedule();
  }, [page]);

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <Link to="/edit">
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} />
              <p>Novo Meetup</p>
            </div>
          </button>
        </Link>
      </header>
      <MeetList>
        {event.map(e => (
          <li key={e.id}>
            <h3>{e.title}</h3>
            <div>
              <p>{e.date}</p>

              <Link to={`/details/${e.id}`}>
                <MdChevronRight size={18} color="#fff" />
              </Link>
            </div>
          </li>
        ))}
      </MeetList>
    </Container>
  );
}
