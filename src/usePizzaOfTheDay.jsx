// Name of this file starts with a lowercase letter because
// it returns a hook and not a component. It also starts with 'use'
// because it is a convention to include that in react hooks

import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay
      ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}`
      : "loading --",
  );

  /**
    
   * This fetching operations can also be executed using something like tanstack's react-query
   * as it includes client-side caching. 
    
   * Why you should use that approach instead of fetching apis in useEffect can be found here: 
   * https://react.dev/reference/react/useEffect#what-are-good-alternatives-to-data-fetching-in-effects
   
   * If you want to execute a task that does not include fetching data from server (like talking to local storage),
   * you can use useEffect() for that purpose. 
  */

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
