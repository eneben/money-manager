import styled from "styled-components";

export default function Transaction({ transaction }) {
  if (!transaction) {
    return null;
  }

  const { date, type, category, amount, description } = transaction;

  return (
    <li>
      <ul>
        <div>
          <li>{date}</li>
          <li>{category}</li>
          <li>
            {type === "income" && "+"}
            {amount}
          </li>
        </div>
        {description && <li>{description}</li>}
      </ul>
    </li>
  );
}
