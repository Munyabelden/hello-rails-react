import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingActions";

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  const handleFetchGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div>
      <button onClick={handleFetchGreeting} disabled={loading}>
        Fetch Greeting
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Greeting: {greeting}</p>
      )}
    </div>
  );
}

export default Greeting;
