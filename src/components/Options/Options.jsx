import css from "./Options.module.css";

export const Options = ({
  handleClickChoice,
  handleClickReset,
  totalFeedback,
}) => {
  return (
    <div className={css.div}>
      <button
        className={css.btn}
        onClick={() => handleClickChoice("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={css.btn}
        onClick={() => handleClickChoice("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={() => handleClickChoice("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={handleClickReset} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
