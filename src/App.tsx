import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async () => {
    const res = await fetch("/user-details");
    const data = await res.json();
    setUserDetails(data);
  };

  return (
    <main>
      <h1>MSW playground</h1>
      <button onClick={fetchUserDetails}>Fetch user details</button>
      <pre>{JSON.stringify(userDetails, null, 2)}</pre>
    </main>
  );
}

export default App;
