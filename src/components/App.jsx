import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [count, setCount] = useLocalStorage("count", {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setCount((count) => ({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  const deleteFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <Section>
      <Description />
      <Options
        handleClickChoice={updateFeedback}
        handleClickReset={deleteFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          variants={Object.entries(count)}
          total={totalFeedback}
          totalPositive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </Section>
  );
};

export default App;
