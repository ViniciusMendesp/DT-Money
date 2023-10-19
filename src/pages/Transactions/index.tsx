import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              let formattedDate = "Data Não Disponível";
              if (
                transaction.createdAt &&
                !isNaN(new Date(transaction.createdAt).getTime())
              ) {
                formattedDate = dateFormatter.format(
                  new Date(transaction.createdAt)
                );
              }
              return (
                <tr key={transaction.id}>
                  <td className="description-cell" width="50%">
                    {transaction.description}
                  </td>
                  <td className="price-cell">
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>

                  <td className="category-cell">{transaction.category}</td>
                  <td className="date-cell">{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
