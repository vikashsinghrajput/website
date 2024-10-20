import React, { useState } from 'react'
import Data from './Data'
import Card from './PcardOne'
import Button from './Button'
const AppCard = () => {

    const [item,setItems] =useState(Data)
    const menuItems =[...new Set(Data.map((val)=>val.category))]
    const filterItems =(cat)=>{
        const newItems =Data.filter((newval)=>newval.category === cat)
        setItems(newItems)
    }
  return (
    <div>
    
      <Button 
      menuItems = {menuItems}
      filterItems = {filterItems}
      setItems ={setItems}
      />
      <Card item ={item}/>
      
    </div>
  )
}

export default AppCard
