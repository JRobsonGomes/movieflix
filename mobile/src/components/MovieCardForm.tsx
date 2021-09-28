import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast';
import { makePrivateRequest } from '../services/requests';
import { colors, text, theme } from '../styles';

type Props = {
  movieId: number;
  setReloadMovie: () => void;
};

type FormState = {
  text: string;
};

const MovieCardForm: React.FC<Props> = ({ movieId, setReloadMovie }) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: '/reviews',
      method: 'POST',
      data: { ...data, movieId }
    })
      .then(() => {
        setReloadMovie();
        Toast.showSuccess('Comentário inserido com sucesso!');
      })
      .catch(() => {
        Toast.show('Erro ao salvar...');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <View style={theme.loadContainer}>
        <ActivityIndicator size="large" color={colors.warning} />
      </View>
    );
  }

  return (
    <View style={theme.movieDetailsCenterContent}>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={theme.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Deixe sua avaliação aqui"
          />
        )}
        name="text"
        defaultValue=""
      />
      {errors.text && <Text style={text.textError}>Campo requerido!</Text>}
      <TouchableOpacity style={theme.saveBtn} activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
        <Text style={text.saveBtn}>Salvar Avaliação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCardForm;
