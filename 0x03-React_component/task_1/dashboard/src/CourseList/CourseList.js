import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

export default function  CourseList({listCourses}) {
  return (
    <table id='CourseList'>
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