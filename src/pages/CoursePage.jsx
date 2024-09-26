import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarC from '../components/Navbars/NavbarC';


const coursesData = [
  {
    id: 1,
    title: "The Complete 2024 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: 404017,
    students: 1344472,
    price: 449,
    originalPrice: 3099,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
    bestseller: true,
    category: "Web Development"
  },
  {
    id: 2,
    title: "The Web Developer Bootcamp 2024",
    instructor: "Colt Steele",
    rating: 4.7,
    reviews: 275936,
    students: 897654,
    price: 449,
    originalPrice: 3199,
    image: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
    bestseller: true,
    category: "Web Development"
  },
  {
    id: 3,
    title: "JavaScript - The Complete Guide 2024 (Beginner + Advanced)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: 177689,
    students: 654321,
    price: 449,
    originalPrice: 3499,
    image: "https://img-c.udemycdn.com/course/240x135/2508942_11d3_3.jpg",
    bestseller: true,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: 203456,
    students: 789012,
    price: 449,
    originalPrice: 3199,
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    bestseller: true,
    category: "React JS"
  },
  {
    id: 5,
    title: "Angular - The Complete Guide (2024 Edition)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: 185432,
    students: 675432,
    price: 449,
    originalPrice: 3299,
    image: "https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg",
    bestseller: true,
    category: "Angular"
  },
  {
    id: 6,
    title: "Java Programming Masterclass for Software Developers",
    instructor: "Tim Buchalka",
    rating: 4.6,
    reviews: 159876,
    students: 589012,
    price: 449,
    originalPrice: 3599,
    image: "https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg",
    bestseller: true,
    category: "Java"
  },
  {
    id: 7,
    title: "CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.7,
    reviews: 45678,
    students: 178901,
    price: 449,
    originalPrice: 2999,
    image: "https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg",
    bestseller: true,
    category: "CSS"
  },
  {
    id: 8,
    title: "iOS & Swift - The Complete iOS App Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 98765,
    students: 345678,
    price: 449,
    originalPrice: 3499,
    image: "https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg",
    bestseller: true,
    category: "iOS Development"
  },

];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const categories = ['All', ...new Set(coursesData.map(course => course.category))];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredCourses(coursesData);
    } else {
      setFilteredCourses(coursesData.filter(course => course.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className=" min-h-screen p-8">
        <NavbarC/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Courses</h1>
        
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap mb-2 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={`/course/${course.id}`} className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 font-bold mr-1">{course.rating}</span>
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-gray-500 ml-1">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">₹{course.price}</span>
                      <span className="text-sm line-through text-gray-500">₹{course.originalPrice}</span>
                    </div>
                    {course.bestseller && (
                      <span className="inline-block mt-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Bestseller</span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoursesPage;