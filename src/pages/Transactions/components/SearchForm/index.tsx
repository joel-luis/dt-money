import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from 'contexts/TransactionContext'

import * as S from './styles'

const searchFormSchema = z.object({
  search: z.string()
})

type SeachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })
  async function handleSearchTransactions(data: SeachFormInputs) {
    await fetchTransactions(data.search)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('search')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}
