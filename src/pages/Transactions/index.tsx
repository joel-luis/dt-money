import { Header } from 'components/Header'
import { Summary } from 'components/Summary'
import { SearchForm } from './components/SearchForm'
import { useTransactions } from 'contexts/TransactionContext'
import { dateFormatter, priceFormatter } from 'utils/formater'

import * as S from './styles'

export function Transactions() {
  const { transactions } = useTransactions()
  return (
    <>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </>
  )
}
