import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'
import ReactPaginate from 'react-paginate';
import './styles.scss';

type Props = {
  totalPages: number;
  activePage: number;
  onChange: (item: number) => void;
};

const Pagination = ({ totalPages, activePage, onChange }: Props) => {

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={activePage}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="pagination-previous"
      nextClassName="pagination-next"
      activeLinkClassName="active"
      disabledClassName="page-inactive"

      previousLabel={<ArrowIcon />}
      nextLabel={<ArrowIcon />}
      onPageChange={(item) => onChange(item.selected)}
    />
  );
};

export default Pagination;