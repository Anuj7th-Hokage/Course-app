import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  const { courses = {}, category } = props;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (!courses) return [];

    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        if (Array.isArray(array)) {
          array.forEach((courseData) => {
            allCourses.push(courseData);
          });
        }
      });
      return allCourses;
    } else {
      return courses[category] || []; // safe return for specific category
    }
  }

  const courseList = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {courseList.length > 0 ? (
        courseList.map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p className="text-white text-lg">No courses found.</p>
      )}
    </div>
  );
};

export default Cards;
