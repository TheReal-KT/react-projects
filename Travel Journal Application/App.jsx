import Header from "./components/header"
import Entry from "./components/entry"
const fujiImgUrl = 'https://scrimba.com/links/travel-journal-japan-image-url'
const jpnMapLink = "https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
const ausImgUrl = "https://scrimba.com/links/travel-journal-australia-image-url"
const ausMapLink = "https://maps.app.goo.gl/duDez2RPXcEkkyvr8"
const norImgUrl = "https://scrimba.com/links/travel-journal-norway-image-url"
const norMapLink = "https://maps.app.goo.gl/duDez2RPXcEkkyvr8"
import './App.css'


function App() {
    return (
      <> 
        <Header />
        <Entry 
          img={fujiImgUrl}
          location="Japan"
          title ="Mount Fuji"
          date="Dates: 12 Jan, 2021 - 24 Jan, 2021"
          link={jpnMapLink}
          info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          
        />
        <Entry 
          img={ausImgUrl}
          location="Australia"
          title ="Sydney Opera House"
          date="Dates: 27 May, 2021 - 8 Jun, 2021"
          link={ausMapLink}
          info="The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings."
        />
        <Entry 
           img={norImgUrl}
            location="Norway"
            title ="Geirangerfjord"
            date="Dates: 01 Oct, 2021 - 18 Nov, 2021"
            link={norMapLink}
            info="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />

      </> 
    )
}

export default App
