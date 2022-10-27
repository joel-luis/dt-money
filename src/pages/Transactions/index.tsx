import { Header } from 'components/Header'
import { Summary } from 'components/Summary'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/09/2022</td>
            </tr>
            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 59,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/09/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </>
  )
}
