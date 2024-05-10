import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const [isChecked, setIsChecked] = useState(false);

    const headerStyle = { backgroundColor: '#deb5b545' };
    const rowStyle = { backgroundColor: '#f5f5f5ab' };
    const checkedStyle = { backgroundColor: '#e6e4e4' };
    const selectedStyle = isHeader ? headerStyle : rowStyle;
    const finalStyle = isChecked ? { ...selectedStyle, ...checkedStyle } : selectedStyle;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    if (isHeader) {
        return (
            <tr style={finalStyle}>
                {textSecondCell === null ? (<th colSpan={2}>{textFirstCell}</th>) : (
                    <>
                        <th className={css(styles.th)}>{textFirstCell}</th>
                        <th className={css(styles.th)}>{textSecondCell}</th>
                    </>
                )}
            </tr>
        );
    } else {
        return (
            <tr style={finalStyle}>
                <td>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    {textFirstCell}
                </td>
                <td className={css(styles.rowSecond)}>{textSecondCell}</td>
            </tr>
        );
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

const styles = StyleSheet.create({
    th: {
        borderBottom: '1px solid #ddd',
        textAlign: 'left', // Align text left in header cells
    },
    rowSecond: {
        textAlign: 'left', // Align text left in second row (nth-child(2))
    },
});
