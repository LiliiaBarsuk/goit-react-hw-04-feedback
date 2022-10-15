import React, { useState } from "react";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

const options = ['good', 'neutral', 'bed'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);
  const total = good + neutral + bad;
  
  const buttonClick = e => {

    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevSate => prevSate + 1)
        break;
    
        case 'neutral':
          setNeutral(prevSate => prevSate + 1)
          break;
          
            case 'bed':
              setBed(prevSate => prevSate + 1)
              break;

              default: 
              break;
    }
  }

  const countPositiveFeedbackPercentage = (tot, g) => {
    return Math.round((g / tot) * 100)
  }
 
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        height: '100vh',
        padding: 40,
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={buttonClick}/>
      </Section>
      
      <Section title="Statistics">
      {(total !== 0) ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={ countPositiveFeedbackPercentage(total, good)}/>
        ) : (
        <Notification message={"There is no feedback"}></Notification>
        )}
      </Section>
    </div>
  );
  }


