import React from 'react'

const index = () => {
  const [latUser, setLatUser] = React.useState<number | null>(null)
  const [lngUser, setLngUser] = React.useState<number | null>(null)


  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude, "Longitude:", longitude);
        setLatUser(latitude)
        setLngUser(longitude)
      });
    }



  }, [])


  return (
    <>



    </>
  )
}

export default index

// chave api https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}