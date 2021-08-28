import ContentLoader from "react-content-loader"
import { generateList } from "utils/list";

const MovieCardLoader = () => {
  const loaderItems = generateList(4);

  return (
    <>
      {loaderItems.map(item => (
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-5" key={item}>
          <ContentLoader
            className="movie-card-container d-flex"
            speed={1}
            width={260}
            height={300}
            viewBox="0 0 260 300"
            backgroundColor="#3c3c3c"
            foregroundColor="#6c6c6c"
          >
            <rect x="0" y="0" rx="4" ry="4" width="260" height="300" />
          </ContentLoader>
        </div>
      ))}
    </>
  )
}

export default MovieCardLoader