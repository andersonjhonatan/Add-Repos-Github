import React, { useState, useCallback, useEffect } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaRegTrashAlt, FaBars } from 'react-icons/fa';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  Carregando,
  Ul,
  DeleteButton,
} from '../style/Apllication.stylis';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Repositorio = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repository, setRepository] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //Buscar no localStorage

  useEffect(() => {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      setRepository(JSON.parse(repositories));
    }
  }, []);

  //Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repository));
  }, [repository]);

  const handleChange = ({ target: { value } }) => {
    setNewRepo(value);
    setError(null);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const submit = async () => {
        setLoading(true);
        setError(null);
        try {
          if (newRepo === '') {
            throw new Error('Digite o nome do repositório');
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepos = repository.find((repo) => repo.nome === newRepo);

          if (hasRepos) {
            throw new Error('Repositório já existe');
          }

          const data = {
            nome: response.data.full_name,
          };

          setRepository([...repository, data]);
          setNewRepo('');
          setError(false);
        } catch (err) {
          console.log(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      submit();
    },
    [newRepo, repository]
  );

  const handleDelete = useCallback(
    (repo) => {
      setRepository(repository.filter((r) => r.nome !== repo.nome));
    },
    [repository]
  );

  /*  const callDetails = useCallback(() => {
    console.log('oi');
  }, []); */

  return (
    <Container>
      <Title>
        <FaGithub size={30} />
        Meus Repositórios
      </Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='repositorio'></label>
        <Input
          type='text'
          placeholder='Adicionar Repositórios'
          id='repositorio'
          onChange={handleChange}
          value={newRepo}
          alerterro={error}
        />
        <Button loading={loading ? 1 : 0}>
          {loading ? <FaSpinner size={18} /> : <FaPlus size={18} />}
        </Button>
      </Form>
      <Ul>
        {loading ? (
          <Carregando>Carregando...</Carregando>
        ) : (
          repository.map((repo, index) => (
            <li key={index}>
              <span>
                <DeleteButton onClick={() => handleDelete(repo)}>
                  <FaRegTrashAlt />
                </DeleteButton>
                {repo.nome}
              </span>
              <Link to={`/repositorio/${encodeURIComponent(repo.nome)}`} >
                <FaBars/>
              </Link>
            </li>
          ))
        )}
      </Ul>
    </Container>
  );
};

export default Repositorio;
