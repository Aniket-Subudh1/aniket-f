import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      category: "Web Development",
      description: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
      lastUpdated: "08/2024",
      language: "English",
      subtitles: ["English", "Arabic [Auto]", "14 more"],
      whatYoullLearn: [
        "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
        "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
        "After the course you will be able to build ANY website you want.",
        "Build fully-fledged websites and web apps for your startup or business.",
        "Work as a freelance web developer.",
        "Master frontend development with React.",
        "Master backend development with Node.",
        "Learn professional developer best practices.",
      ],
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
      category: "Web Development",
      description: "Everything you need to know to become a web developer in 2024, including HTML, CSS, JS, Node, and more.",
      lastUpdated: "07/2024",
      language: "English",
      subtitles: ["English", "French [Auto]", "10 more"],
      whatYoullLearn: [
        "Understand the basics of web development.",
        "Build a full-stack app using Node.js and MongoDB.",
        "Learn backend technologies like Express.",
        "Create responsive layouts with Flexbox and Grid.",
        "Work with REST APIs and build server-side apps.",
      ],
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
      bestseller: false,
      category: "JavaScript",
      description: "Master JavaScript with the most complete course on the market! Projects, challenges, quizzes, and theory.",
      lastUpdated: "06/2024",
      language: "English",
      subtitles: ["English", "Spanish [Auto]", "7 more"],
      whatYoullLearn: [
        "Become a pro in using advanced JavaScript techniques.",
        "Master closures, callbacks, and promises.",
        "Understand async and modern ES6+ features.",
        "Build complex apps using JavaScript frameworks.",
      ],
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
      category: "React JS",
      description: "Dive into React, Hooks, and Redux, and build powerful single-page apps with JavaScript.",
      lastUpdated: "05/2024",
      language: "English",
      subtitles: ["English", "German [Auto]", "5 more"],
      whatYoullLearn: [
        "Master React fundamentals and hooks.",
        "Work with React Router for navigation.",
        "Implement Redux for state management.",
        "Build reusable components for large-scale apps.",
      ],
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
      category: "Angular",
      description: "Master Angular, build modern, dynamic web applications, and become a full-stack developer.",
      lastUpdated: "06/2024",
      language: "English",
      subtitles: ["English", "Hindi [Auto]", "4 more"],
      whatYoullLearn: [
        "Learn Angular fundamentals and advanced concepts.",
        "Create dynamic single-page applications.",
        "Understand and implement Angular architecture.",
        "Work with RxJS and reactive programming in Angular.",
      ],
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
      bestseller: false,
      category: "Java",
      description: "Learn Java in-depth with this comprehensive course, from beginner to advanced level.",
      lastUpdated: "05/2024",
      language: "English",
      subtitles: ["English", "Portuguese [Auto]", "3 more"],
      whatYoullLearn: [
        "Understand the Java programming language from the ground up.",
        "Build complex apps with object-oriented programming.",
        "Work with Java Swing to build GUIs.",
        "Develop Java-based server applications.",
      ],
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
      bestseller: false,
      category: "CSS",
      description: "Master CSS with Flexbox, Grid, and Sass, and become proficient in designing modern websites.",
      lastUpdated: "06/2024",
      language: "English",
      subtitles: ["English", "Chinese [Auto]", "2 more"],
      whatYoullLearn: [
        "Learn advanced CSS techniques and layouts.",
        "Master responsive design with Flexbox and Grid.",
        "Use Sass to streamline your CSS workflow.",
        "Create visually stunning websites with animations.",
      ],
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
      category: "iOS Development",
      description: "Learn iOS app development with Swift and build iPhone and iPad apps from scratch.",
      lastUpdated: "04/2024",
      language: "English",
      subtitles: ["English", "Japanese [Auto]", "6 more"],
      whatYoullLearn: [
        "Master Swift programming language.",
        "Build professional iOS apps for iPhone and iPad.",
        "Work with Apple’s latest frameworks like SwiftUI.",
        "Create apps for real-world scenarios with core data.",
      ],
    }
  ];
  
  
const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    
    <motion.div 
      className=" min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <NavbarC/>
        
      <div className="max-w-7xl mx-auto p-8 flex gap-4 ">
      
         <div>
         <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl mb-4">{course.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 font-bold mr-1">
              {course.rating}
            </span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500 ml-1">
              ({course.reviews.toLocaleString()} ratings)
            </span>
            <span className="ml-4">
              {course.students.toLocaleString()} students
            </span>
          </div>
          <p>
            Created by{" "}
            <span className="font-semibold">{course.instructor}</span>
          </p>
          <div className="flex space-x-4 mt-2">
            <span>Last updated {course.lastUpdated}</span>
            <span>{course.language}</span>
            <span>{course.subtitles.join(", ")}</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <motion.div className="lg:w-2/3 pr-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYoullLearn.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
         </div>

        <motion.div className="lg:w-1/2 mt-1 lg:mt-0" variants={itemVariants}>
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <motion.div 
                className="relative cursor-pointer mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                {!isVideoPlaying ? (
                  <>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-black opacity-75" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-48 bg-black rounded flex items-center justify-center text-black">
                    Video is playing
                  </div>
                )}
              </motion.div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold">₹{course.price}</span>
                <span className="text-lg line-through text-gray-500">
                  ₹{course.originalPrice}
                </span>
              </div>
              <motion.button 
                className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded mb-4 hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to cart
              </motion.button>
              <p className="text-center text-sm text-gray-600 mb-4">
                30-Day Money-Back Guarantee
              </p>
              <p className="text-center text-sm">Full Lifetime Access</p>
            </div>
          </motion.div>   
      </div>

      
    </motion.div>
  );
};

export default CourseDetailsPage;