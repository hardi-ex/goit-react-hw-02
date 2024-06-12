import css from "./Feedback.module.css";

export const Feedback = ({ variants = [], total, totalPositive }) => {
  return (
    <div>
      <ul className={css.ul}>
        {variants.map((variant) => (
          <li className={css.li} key={variant[0]}>
            {variant[0][0].toUpperCase() + variant[0].slice(1)}: {variant[1]}
          </li>
        ))}
        <li className={css.li}>Total: {total}</li>
        <li className={css.li}>Positive: {totalPositive}%</li>
      </ul>
    </div>
  );
};
export default Feedback;
