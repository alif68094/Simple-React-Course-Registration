import { useState } from "react"
import Card from "./Components/Card/Card"
import Items from "./Components/Selected-Items/Items"
function App() {

  const [items, setItems] = useState([])

  const handleSelectedItems =(course) => {
    const isExist = items.find((selectedCourse) => selectedCourse.id == course.id);
    if(isExist){
      return alert('Already Selected')
    }
    else{
      const newItems = [...items, course];
      setItems(newItems);
    }
    
    // console.log(course)
}

  return (
    <div className=" bg-[#F3F3F3]">
      <h1 className='text-center text-3xl font-semibold mb-9'>Course Registration</h1>
      <div className="flex gap-8">
        <Card handleSelectedItems={handleSelectedItems}></Card>
        <Items items={items}></Items>
      </div>
    </div>
  )
}

export default App
