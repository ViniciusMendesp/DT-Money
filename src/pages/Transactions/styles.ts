import styled from "styled-components";

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    tr {
      display: block;
      margin-bottom: 1rem;
      background: ${(props) => props.theme["gray-700"]};
      border-radius: 6px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    td {
      display: block;
      width: 100%;
      border: none;
      height: 60px;
    }

    .description-cell {
      font-size: 1.3rem;
    }

    .price-cell {
      font-size: 1.5rem;
    }

    .category-cell,
    .date-cell {
      display: inline-block;
      width: 50%;
      color: ${(props) => props.theme["gray-400"]};
    }

    .category-cell {
      padding-right: 1rem;
    }
  }
`;

interface PriceHighLightProps {
  variant?: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant == "income"
      ? props.theme["green-500"]
      : props.theme["red-300"]};
`;
