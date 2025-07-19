
function Contact() {
  return (
    <>
    <h1>Contact</h1>
    <ul>
        <li>Email</li>
        <li>Linkedin</li>
        <li>Github</li>
        <li>CV</li>
    </ul>
    <form>
        <label htmlFor="fname">First Name:</label> <br/>
        <input type="text" name="fname"/> <br/>
        <label htmlFor="lname">Last Name:</label> <br/>
        <input type="text" name="lname"/> <br/>
        <input type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default Contact