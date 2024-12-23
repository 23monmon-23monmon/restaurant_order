import { useEffect, useState } from "react";
import '../../style/menulist.css';

const CategoryMenu = (props) => {
    
    const {menuList, setMenuDetailList,setCategory,activekey,setActiveKey} = props;
    const [categorycheck,setCategoryCheck] = useState('');


    useEffect(() => {
        setCategoryCheck(activekey === menuList.categoryName ? 'orderactivecard' : 'ordercard')
    },[activekey])

    const onCategoryClick = () => {
        setCategory("orderactivecard");
        setMenuDetailList(menuList.categoryItems)
        setActiveKey(menuList.categoryName);
    }

    return(
        
        <>
            <div className={`${categorycheck} pt-1 pb-1 pl-[3px] mr-2`} onClick={onCategoryClick}>
                <div className="flex justify-center">
                <img src={menuList.categoryImage} alt="Example" width="80%" />
                </div>
                <div className="flex justify-center " style={{fontSize: '10px'}}>
                    {menuList.categoryName}
                </div>
            </div>
            
        </>
    )
}

export default CategoryMenu;