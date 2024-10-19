import React, { useState, useEffect } from 'react';



const Profile = () => {

  const [user, setUser] = useState(null);



  useEffect(() => {

    const fetchUserProfile = async () => {

      try {

        const response = await fetch('http://localhost:5000/api/profile', {

          headers: {

            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token

          },

        });

        const data = await response.json();

        setUser(data);

      } catch (error) {

        console.error('Failed to fetch user profile:', error);

      }

    };



    fetchUserProfile();

  }, []);



  if (!user) {

    return <div>Loading...</div>;

  }



  return (

    <div className="max-w-md mx-auto">

      <h2 className="text-2xl mb-4">Profile</h2>

      <div>

        <p><strong>Name:</strong> {user.name}</p>

        <p><strong>Email:</strong> {user.email}</p>

      </div>

    </div>

  );

};



export default Profile;