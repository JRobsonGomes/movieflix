import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { text, theme } from '../styles';

type Props = {
  movieId: number;
  setReloadMovie: () => void;
};

const MovieCardForm: React.FC<Props> = ({ movieId, setReloadMovie }) => {
  return (
    <View style={theme.movieDetailsCenterContent}>
      <TextInput style={theme.formInput} placeholder="Deixe sua avaliação aqui" />
      <TouchableOpacity style={theme.saveBtn} activeOpacity={0.8}>
        <Text style={text.saveBtn}>Salvar Avaliação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCardForm;
