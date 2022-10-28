import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import igniteLogo from 'assets/ignite-logo.svg'
import { NewTransactionModal } from 'components/NewTransactionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={igniteLogo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
