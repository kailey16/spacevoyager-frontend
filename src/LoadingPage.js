import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
 
export const LoadingSpinnerComponent = (props) => {
  const { promiseInProgress } = usePromiseTracker();
 
  return (
    <div>
    {(promiseInProgress === true) ?
      <div>
        <h3>Loading</h3>
        <div className="ui active centered inline huge loader"></div>
      </div>
      :
        null}
    </div>
  )
};