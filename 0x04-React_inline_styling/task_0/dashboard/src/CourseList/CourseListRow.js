import React from 'react'
import PropTypes from 'prop-types'

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const headerStyle = {backgroundColor: '#deb5b545'};
    const rowStyle = {backgroundColor: '#f5f5f5ab'};
    const selected_style = isHeader ? headerStyle : rowStyle;
    if (isHeader) {
        return (
            <tr style={selected_style}>
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
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
  };