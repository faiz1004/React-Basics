import React1, {useEffect} from 'react'

const Navbar = ({color}) => {
 
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey! I will run on every render")
   })

   // Case 2: Run only on first render
 useEffect(() => {
  alert("Hey Welcome to my page. This is the first render")
 }, [])

 // Case 3: Run only when certain values changed
 useEffect(() => {
  alert("Hey! I am running because Color was Changed")
 }, [color])

  
  return (
    <div>
      I am a Navbar {color} color hehe..
    </div>
  )
}

export default Navbar
