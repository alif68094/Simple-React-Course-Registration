import Item from "../Selected-item/Item";


const Items = ({items}) => {
    return (
        <div className="w-1/3 shadow-2xl p-4">

            <h1 className="text-[#2F80ED] text-2xl mb-5">Credit Hour Remaining 20 hr</h1>
            < hr />
            <h1 className="text-xl font-semibold mb-5">Course Name</h1>
            <div className="mb-5">
               
                {
                    items.map((item, idx) => <Item key={idx} item={item}></Item>)
                }
            </div>
            <hr />
            <h1 className="text-xl font-semibold">Total Credit: </h1>
            
        </div>
    );
};

export default Items;