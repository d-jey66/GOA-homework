import { useEffect, useState } from "react"

export default function App() {
  const [cityName, setCityName] = useState("Batumi")
  const [apiData, setApiData] = useState([])

  const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
  const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(apiEndpoint)
        const result = await response.json()
        setApiData(result)
      } catch (error) {
        setApiData([{name: "idk", wind: {speed: 0}}])
      }
      return;
    }
    callApi()
  }, [apiEndpoint])
  console.log(apiData)

  return (
    <>
      <div className="flex-col flex-center h-screen ">
        <div className="w-[300px]">
          <div className="max-w-sm">
            <div className="card">
              <h1>WEATHER API <b>V5</b></h1>
            </div>
            <div className="card-red">
              <div>
                <span><b>City name:</b> {apiData.name}</span>
              </div>
              <div>
                <span><b>Wind Speed:</b> {apiData.wind?.speed} m/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}