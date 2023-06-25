import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHome, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {
  Container,
  Owner,
  NavLink,
  IssuesList,
  DivList,
  MainContainer,
  ButtonLeft,
  ButtonRight,
  ContainerFilter,
} from './repository.stylis';
import api from '../../services/api';
/* import axios from 'axios'; */

const RepositorioPage = () => {
  const { repositorio } = useParams();
  const [details, setDetails] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [state, /* setState */] = useState([
    { state: 'all', active: false, label: 'All' },
    { state: 'open', active: false, label: 'Open' },
    { state: 'closed', active: true, label: 'Closed' },
  ]);

  const [finderIndex, setFinderIndex] = useState(0);

  // Buscar algo
  useEffect(() => {
    async function load() {
      try {
        const nome = repositorio;
        const [repositoryData, issuesData] = await Promise.all([
          api.get(`repos/${nome}`),
          api.get(`repos/${nome}/issues`, {
            params: {
              state: state.find((f) => f.active).state,
              per_page: 8,
            },
          }),
        ]);
        setDetails(repositoryData.data);
        setIssues(issuesData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, [repositorio]);

  useEffect(() => {
    async function loadIssues() {
      const nome = repositorio;

      const response = await api.get(`repos/${nome}/issues`, {
        params: {
          state: state[finderIndex].state,
          page,
          per_page: 8,
        },
      });
      setIssues(response.data);
    }

    loadIssues();
  }, [state, finderIndex, page, repositorio]);

  const handlePage = (direction) => {
    setPage(direction === 'back' ? page - 1 : page + 1);
  };

  const handleFilter = (index) => {
    setFinderIndex(index);
  };

  if (loading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <MainContainer>
      <ButtonLeft onClick={() => handlePage('back')} disabled={page <= 1}>
        <FaAngleLeft />
      </ButtonLeft>
      <Container>
        {details.owner && details.owner.avatar_url && (
          <Owner>
            <NavLink>
              <FaHome />
            </NavLink>
            <img src={details.owner.avatar_url} alt={details.owner.login} />
            <h1>{details.name.toUpperCase()}</h1>
            <p>{details.description}</p>
          </Owner>
        )}
        <ContainerFilter active={finderIndex}>
          {state.map((s, index) => (
            <button key={s.label} type='button' onClick={() => handleFilter(index)}>
              {s.label}
            </button>
          ))}
        </ContainerFilter>
        <IssuesList>
          {issues.map((issue) => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <DivList>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={label.id}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </DivList>
            </li>
          ))}
        </IssuesList>
      </Container>
      <ButtonRight onClick={() => handlePage('next')}>
        <FaAngleRight />
      </ButtonRight>
    </MainContainer>
  );
};

export default RepositorioPage;
