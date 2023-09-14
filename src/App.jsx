import { useState } from "react"
import Card from "./Components/Card/Card"
import Items from "./Components/Selected-Items/Items"
function App() {

  const [items, setItems] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [cost, setCost] = useState(0)

  const handleSelectedItems =(course) => {
    const isExist = items.find((selectedCourse) => selectedCourse.id == course.id);
    let count = course.credit_hours;
    if(isExist){
      return alert('Already Selected')
    }
    else{
      items.forEach((item) =>{
        count = count + item.credit_hours;
        
      })
      const creditRemaining = 20 -count;
      
      setCost(count)
      setRemaining(creditRemaining)
      const newItems = [...items, course];
      setItems(newItems);
    }
    
    
}

  return (
    <div className=" bg-[#F3F3F3]">
      <h1 className='text-center text-3xl font-semibold mb-9'>Course Registration</h1>
      <div className="flex gap-8">
        <Card handleSelectedItems={handleSelectedItems}></Card>
        <Items items={items} remaining={remaining} cost={cost}></Items>
      </div>
    </div>
  )
}

export default App
