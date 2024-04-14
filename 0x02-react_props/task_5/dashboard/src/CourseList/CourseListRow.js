import React from 'react'
import PropTypes from 'prop-types'

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    if (isHeader) {
        return (
            <tr>
                { textSecondCell === null ?  (<th colSpan={2}>{textFirstCell}</th>) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )}
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};