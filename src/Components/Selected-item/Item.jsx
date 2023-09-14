
const Item = ({item}) => {
    const {course_title} = item;
    return (
        <div>
           <ul>{course_title}</ul>
        </div>
    );
};

export default Item;