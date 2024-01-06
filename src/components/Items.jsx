import React, { useState, useEffect } from 'react'

const Items = () => {

    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect( () => {
        const fetchdata = async () => {
            try{
                const res = await fetch('https://fakestoreapi.com/products');
                const result = await res.json();
                setData(result);
            } catch(error) {
                console.log("Error: " + error);
            }
        };
        fetchdata();
    }, []);

    const fetchDetails = async (Id) => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${Id}`);
            const result = await res.json();
            console.log()
            setSelectedProduct(result);
            }
        catch {
            console.log('Error while fetching Product Detail');
        }
    }

    console.log(data);
  return (
    
    <div className='grid grid-cols-2 gap-4 justify-between space-y-10 mt-10'>
        <div className='flex flex-wrap gap-4 justify-between space-y-10 mt-10'>
            {data.map((item, index) => (
                <div key={index} className='w-full ml-16 bg-slate-900 rounded-xl'>
                    <button onClick={()=>fetchDetails(item.id)}><p className="text-xl block hover:underline hover:text-cyan-500 m-3">{item.title}</p></button>
                    <div className="flex flex-row m-5">
                        <img src={item.image} alt={item.title} className='box-border w-2/5 inline m-5'/>
                        <div className="block-inline item-center justify-between m-5">
                            <span className='underline text-cyan-500'>Price:</span><span> {item.price}</span><br />
                            <span className='underline text-cyan-500'>Description:</span><span className='break-word'> {item.description}</span><br />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='justify-between items-center mt-10'>
                {selectedProduct && (
                    <div className='w-full ml-16 bg-slate-900 rounded-xl'>
                    <p className="text-xl block hover:underline hover:text-cyan-500 m-3">{selectedProduct.title}</p>
                    <div className="flex flex-row m-5">
                        <img src={selectedProduct.image} alt={selectedProduct.title} className='box-border w-2/5 inline m-5'/>
                        <div className="block-inline item-center justify-between m-5">
                            <span className='underline text-cyan-500'>Price:</span><span> {selectedProduct.price}</span><br />
                            <span className='underline text-cyan-500'>Description:</span><span className='break-word'> {selectedProduct.description}</span><br />
                            <span className='underline text-cyan-500'>Rating:</span><span> {selectedProduct.rating.rate}</span><br />
                            <span className='underline text-cyan-500'>Rating Count:</span><span> {selectedProduct.rating.count}</span><br />
                            <span className='underline text-cyan-500'>Category:</span><span> {selectedProduct.category}</span><br />
                        </div>
                    </div>
                    </div>
                )}
            </div>

    </div>
    );
};

export default Items