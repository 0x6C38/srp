import React, {Fragment} from "react"
import PropTypes from 'prop-types'

const Pagination = ({totalItems, itemsPerPage, page, pagesToDisplay, onPageChange}) => {
    const range = (start, end) => {
        var foo = [];
        for (var i = start; i <= end; i++) {
            foo.push(i);
        }
        return foo;
    }
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const min = Math.max(1, Math.ceil(page - pagesToDisplay / 2))
    const max = Math.min(min + pagesToDisplay - 1, totalPages)

    const pageNumbers = range(min, max)
        .map(p => p === page ?
            <li className="page-item active" key={p}>
                <button className="page-link" onClick={onPageChange}>{p}</button>
            </li>
            : <li className="page-item" key={p}>
                <button className="page-link" onClick={onPageChange}>{p}</button>
            </li>)

    const pages = <Fragment>
        <ul className="pagination justify-content-center">{pageNumbers}</ul>
    </Fragment>
    return pages
}

Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    pagesToDisplay: PropTypes.number,
    onPageChange: PropTypes.func
}

Pagination.defaultProps = {
    pagesToDisplay: 5
};

export default Pagination