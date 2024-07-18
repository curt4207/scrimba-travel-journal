import { useState } from 'react'
import './App.css'
import TravelJournal from './components/TravelJournal'
import travelInfo from './components/travelInfo'

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"

function App() {

  const card = travelInfo.map(item => {
    console.log(item)
    return(
      <TravelJournal
      key={item.title}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
       />
    )
  }) 

  return (
    <>
        <header>My Travel journal</header>
     {card}
    </>
  )
}

export default App
