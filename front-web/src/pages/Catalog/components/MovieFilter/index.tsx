import { useEffect, useState } from 'react';
import Select from 'react-select'
import { Genre } from 'types/Genre';
import { makePrivateRequest } from 'utils/request';
import './styles.scss';

type Props = {
  handleChangeGenre: (genre: Genre) => void;
}

const MovieFilter = ({ handleChangeGenre }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: '/genres' })
      .then(response => setGenres(response.data))
      .finally(() => setIsLoadingGenres(false));
  }, []);

  return (
    <nav className="card-base catalog-navbar">
      <Select
        isClearable
        isLoading={isLoadingGenres}
        options={genres}
        getOptionLabel={(option: Genre) => option.name}
        getOptionValue={(option: Genre) => String(option.id)}
        classNamePrefix="catalog-nav-select"
        placeholder="Selecione um gênero"
        onChange={value => handleChangeGenre(value as Genre)}
      />
    </nav>
  )
}

export default MovieFilter;