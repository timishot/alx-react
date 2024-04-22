import React from 'react'
import CourseListRow from './CourseListRow'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

export default function  CourseList({listCourses}) {
  return (
    <table className={css(styles.table)} id='CourseList'>
        <thead>
                <CourseListRow isHeader = {true} textFirstCell="Available courses" />
                <CourseListRow isHeader = {true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
                {listCourses.length > 0 ? (listCourses.map(({ id,  name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)) : (<CourseListRow textFirstCell="No course available yet" />)}     
        </tbody>
    </table>
  )
}

CourseList.prototype = {
  listCourses: PropTypes.arrayOf(CourseShape).isRequired,
}

CourseList.defaultProps = {
  listCourses: [],
}

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
    margin: '0 auto', // Center the table
  },
  th: {
    borderBottom: '1px solid #ddd',
    textAlign: 'left', // Align text left in header cells
  },
  td: {
    width: '100%',
  },
  rowSecond: {
    textAlign: 'left', // Align text left in second row (nth-child(2))
  },
});