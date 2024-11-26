const ChildComponent = (props: any) => {
    console.log(props)
  return (
    <div>
      <div className="text-center text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-8">ChildComponent</div>
      <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-8 ">
       FullName: {props.fullName} <br />
       FavoriteDish: {props.favoriteDish} <br />
       FavoriteCity: {props.favoriteCity} <br />
      </h1>
    </div>
    
  )
}

export default ChildComponent
