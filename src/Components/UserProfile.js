// import React from 'react'
import React, {  useEffect,useState } from 'react';
import axios from 'axios';
function UserProfile(props) {
const styles = {
        container: {
          margin: '2px solid black',
          paddingtop: '100px',
          textAlign: 'center',
          paddingTop: '150px',
          paddingBottom: '50px',
          backgroundColor: '#f2f2f2',
          borderRadius: '8px',
        },
        heading: {
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '16px',
        },
        image: {
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          marginBottom: '16px',
        },
        text: {
          fontSize: '16px',
          marginBottom: '8px',
        },
        h:{
          textAlign: 'center',
          padding: '15px',
          fontSize: '40px',
          marginBottom: '4px',
        },
      };

    const dob= props.dob;
    const phoneNumber= props.phNo;
    const [userData, setUserData] = useState([]);
    //const navigate = useNavigate();
    useEffect(() => {
    // Simulating fetching data from a database
    fetchUserData()
      .then(data => setUserData(data))
      .catch(error => console.log(error));
    }, []);

    const fetchUserData = async () => {
      try{
          const response=await axios.post('/user/UserLogin',{dob,phoneNumber});
          console.log(response);
          setUserData(response.data);
        }catch(error) {console.log(error);}
    };
  return (
    <div>
      <>
      <div style={styles.container}>
        <h2 style={styles.heading}>User Profile</h2>
        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="Profile" style={styles.image} />
{/*         
        // <div>
        // <p style={styles.text}>Name: {user.firstName}</p>
        // <p style={styles.text}>Date of Birth: {user.dob}</p>
        // <p style={styles.text}>Phone Number: {user.phNo}</p>
        // <p style={styles.text}>Age: {user.age}</p>
        // </div> */}
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.map(user => (
              <tr key={user.phNo}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phNo}</td>
                <td>{user.dob}</td>
                <td>{user.age}</td>
                <td><button onClick={handleOnclick}>Send message</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
       
      </div>
      </>
    </div>
  )
}

export default UserProfile
