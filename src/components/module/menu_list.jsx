import { useEffect, useState } from "react";
import CategoryMenu from "./category_menu";
import OrderModal from "./order_modal";
import { useLocation } from "react-router-dom";

const MenuList = () => {

    const location = useLocation();
    const [menuDetailList, setMenuDetailList] = useState([]);
    const [category,setCategory] = useState('ordercard');
    const [activekey,setActiveKey] = useState(menuList[0].categoryName);
    const [isModalOpen,setModalOpen] = useState(location? location.state?.openModal : false);

    useEffect(() => {
        setMenuDetailList(menuList[0]?.categoryItems);
        console.log("location ", location);
    },[])

    const openModal = () => {
        setModalOpen(true)
    }

    return(
        <>
            <OrderModal 
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen} />
            <div className="flex justify-between px-2">
                {
                    menuList.map((menu,index) => <>
                            {console.log("menu",menu)}
                            <CategoryMenu 
                                index={index}
                                menuList = {menu}
                                setMenuDetailList = {setMenuDetailList}
                                category={category}
                                setCategory={setCategory}
                                activekey={activekey}
                                setActiveKey={setActiveKey}
                            />
                        
                        
                    </>
                    )
                } 
            </div>

            {
                menuDetailList.map((list,index) => <>
                    <div className=" px-2 pt-3" key={index}>
                        <div className="grid grid-cols-12">
                            <div className="col-span-8">
                                <div className="">{list?.itemName}</div>
                                <div className="">{list?.itemPrice}ks</div>
                                <div className="text-[10px]">{list?.note}</div>
                            </div>
                            <div className="col-span-4 flex justify-end">
                                {/* <image src='/logo/yogurt.png' alt="Passion" width="100%" /> */}
                                <img src="/logo/passionyogurt.png" alt="Example" width="70%" height="50%" />
                            </div>
                            
                    </div>
                    <div className="pt-1 flex justify-end pb-2">
                        <button style={{background : 'red', color: 'white', width : '120px', minWidth: '100px', borderRadius: '30px', padding : '2px 0px 4px 0px'}} onClick={openModal}>ORDER NOW</button>
                    </div>
                    <hr />
            </div>
                </>)
            }
        </>
    )
}

export default MenuList;

const menuList = [
    {
        categoryName : 'Yogurt',
        categoryImage : '/logo/yogurt.png',
        categoryItems : [
            {
                itemName : "Passion Yogurt",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            },
            {
                itemName : "OrangeYogurt Yogurt",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            }
        ]
    },
    {
        categoryName : 'Bubble Tea',
        categoryImage : '/logo/bubbletea.png',
        categoryItems : [
            {
                itemName : "Chocolet Bubble",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            },
            {
                itemName : "Bubble ",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            }
        ]
    },
    {
        categoryName : 'Coffee',
        categoryImage : '/logo/coffee.png',
        categoryItems : [
            {
                itemName : "Black Coffee",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            },
            {
                itemName : "Americano ",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            }
        ]
    },
    {
        categoryName : 'Smoothie',
        categoryImage : '/logo/smoothie.png',
        categoryItems : [
            {
                itemName : "Strawberry Smoothie",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            },
            {
                itemName : "Apple Smoothie ",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            }
        ]
    },
    {
        categoryName : 'Soda',
        categoryImage : '/logo/soda.png',
        categoryItems : [
            {
                itemName : "Max Soda",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            },
            {
                itemName : "Blue Soda ",
                itemPrice : 5000,
                note : 'Natural fermented yogurt from pure fresh milk and passion fruit'
            }
        ]
    },
]