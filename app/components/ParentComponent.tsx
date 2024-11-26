import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let fullName = "Hamza"
    let favoriteDish = "Biryani"
    let favoriteCity = "Karachi"
  return (
    <div>
      <ChildComponent fullName={fullName} 
      favoriteDish={favoriteDish} 
      favoriteCity={favoriteCity}/>
    </div>
  )
}

export default ParentComponent
