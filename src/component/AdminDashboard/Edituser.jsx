import React from 'react'
import { useEffect, useState } from 'react';
function Edituser() {


  const [userdatalist, setuserdatalist] = useState(null)
  useEffect(() => {
    async function userlist() {
      try {
        const response = await fetch('http://localhost:4000/dashboard/Edituser');

        if (!response.ok) {
          console.log('Failed to fetch user data');
          return;
        }

        const data = await response.json();
        setuserdatalist(data); // update your state with the fetched user data
        console.log('User data:', data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    userlist()
  }, [])
  return (
    <>
      <div>
      {userdatalist ? (
          <>


            <div className='overflow-scroll'>
              {Object.entries(userdatalist).map(([key, user], index) => (
                <div key={index}>
                  <div className='container-fluid w-75 border border-dark rounded mt-3'>

                    <p><strong>{user.username}</strong></p>
                    <p><strong>{user.email}</strong></p>
                    <p><strong>{user.role}</strong></p>

                  </div>


                </div>
              ))}
            </div>


          </>
        ) : (
          <p>Loading user...</p>
        )}

      </div>
    </>
  )
}
export default Edituser;