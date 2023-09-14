

const cart = ({course, handleSelectedItems}) => {
    const {course_title, course_image, course_description, course_price, credit_hours} = course;



    
    return (
        <div className="shadow-2xl p-3 rounded">
            <img src={course_image} alt="" />
            <h1 className=" font-semibold text-base">{course_title}</h1>
            <p className="text-sm text-gray-500">{course_description}</p>
            <div className="flex justify-between">
                <p className="text-lg" ><small>Price: {course_price}</small></p>
                <p className=" text-lg"><small>Credit: {credit_hours} hr</small></p>
            </div>
            <button onClick={() => handleSelectedItems(course)} className="p-2 w-full rounded text-white bg-[#2F80ED]">Select</button>
        </div>
    );
};

export default cart;