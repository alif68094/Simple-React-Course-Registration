import { useState } from "react"
import Card from "./Components/Card/Card"
import Items from "./Components/Selected-Items/Items"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [items, setItems] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [cost, setCost] = useState(0)

  const handleSelectedItems =(course) => {
    const isExist = items.find((selectedCourse) => selectedCourse.id == course.id);
    let count = course.credit_hours;
    if(isExist){
      return toast.warning('Already Selected')
    }
    else{
      items.forEach((item) =>{
        count = count + item.credit_hours;
        
      })
      const creditRemaining = 20 -count;
      if(count > 20){
        return toast ('You can not add more than 20 Credits')
      }
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
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
