import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { makePrivateRequest } from '../services/requests';
import { Genre } from '../@types/Genre';
import { colors, theme } from '../styles';

type Props = {
  handleChangeGenre: (genre: Genre) => void;
};

const MovieFilter: React.FC<Props> = ({ handleChangeGenre }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingGenres(true);
      await makePrivateRequest({ url: '/genres' })
        .then((response) => {
          setGenres(response.data);
        })
        .catch(() => {
          console.log('Erro fetchData Filtro');
        })
        .finally(() => setIsLoadingGenres(false));
    };

    fetchData();
  }, []);

  return (
    <View style={theme.filterContainer}>
      <View style={theme.filterContent}>
        <Picker
          style={{ color: colors.white }}
          selectedValue={selectedGenre}
          dropdownIconColor={colors.borderGray}
          onValueChange={(value: Genre) => {
            handleChangeGenre(value);
            setSelectedGenre(value);
          }}
        >
          <Picker.Item label="Todos os gêneros" value={null} />
          {!isLoadingGenres &&
            genres.map((g) => {
              return <Picker.Item label={g.name} value={g} key={g.id} />;
            })}
        </Picker>
      </View>
    </View>
  );
};

export default MovieFilter;
