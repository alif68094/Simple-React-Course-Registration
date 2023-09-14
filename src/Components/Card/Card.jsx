import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/cart";


const Card = ({handleSelectedItems}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setCourses(data))
        
    }, []);
    return (
        <div className="grid grid-cols-3 w-2/3 gap-6">
         {
          courses.map(course => <Cart key={course.id} course={course} handleSelectedItems={handleSelectedItems}></Cart>)
         }
        </div>
    );
};

export default Card;