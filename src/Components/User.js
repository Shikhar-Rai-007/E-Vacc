import React, {  useEffect,useState } from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: props.dob,
      phoneNumber: props.phNo,
    };
  }

  render() {
    const {dob, phoneNumber } = this.state;
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
          const response=await axios.get('/admin/getAllUsers');
          console.log(response);
          setUserData(response.data);
        }catch(error) {console.log(error);}
    };
    return (
      <>
      <div style={styles.container}>
        <h2 style={styles.heading}>User Profile</h2>
        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="Profile" style={styles.image} />
        <p style={styles.text}>Name: {userData.firstName+userData.lastname}</p>
        <p style={styles.text}>Date of Birth: {userData.dob}</p>
        <p style={styles.text}>Phone Number: {userData.phNo}</p>
        <p style={styles.text}>Age: {userData.age}</p>
        
       
      </div>
      </>
    );
  }
}

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

export default UserProfile;
