import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import outputs from '../amplify_outputs.json'
import { Amplify } from 'aws-amplify'

Amplify.configure(outputs)

const client = generateClient()

function App() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      const { data } = await client.models.UserProfile.list()
      setProfile(data[0])
    }
    loadProfile()
  }, [])

  return (
    <>
      <h1>Your Profile</h1>
      {profile && (
        <p>Email: {profile.email}</p>
      )}
    </>
  )
}

export default App
