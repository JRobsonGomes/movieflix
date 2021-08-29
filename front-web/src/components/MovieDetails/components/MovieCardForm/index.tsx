import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { makePrivateRequest } from 'utils/request';

type FormState = {
  text: string;
  movieId: number;
}

type Props = {
  movieId: string;
  setReloadMovie: () => void;
}

const MovieCardForm = ({ movieId, setReloadMovie }: Props) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: '/reviews',
      method: 'POST',
      data
    })
      .then(() => {
        toast.success('🚀 Avaliação salva com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setReloadMovie();
      })
      .catch(() => {
        toast.error('💩 Erro ao salvar avaliação!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setValue('text', ''));
  }

  return (
    <form className="card-base movie-details-center-content" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("text", {
          required: "Campo obrigatório",
          minLength: {
            value: 3,
            message: "Mínimo 3 caracteres"
          }
        })}
        className={`form-control ${errors.text ? 'is-invalid' : ''}`}
        type="text"
        placeholder="Deixe sua avaliação aqui"
      />
      {errors.text && (
        <div className="invalid-feedback d-block">
          {errors.text.message}
        </div>
      )}
      <input {...register("movieId")} hidden={true} value={movieId} />
      <button className="btn btn-warning" type="submit">Salvar Avaliação</button>
    </form>
  )
}

export default MovieCardForm;