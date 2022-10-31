import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from 'api/axios'

interface TrasactionsProviderProps {
  children: ReactNode
}

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

const TransactionContext = createContext({} as TransactionContextProps)

export function TransactionsProvider({ children }: TrasactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })
    setTransactions(response.data)
  }

  async function createTransaction({
    category,
    description,
    price,
    type
  }: CreateTransactionInput) {
    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date()
    })
    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
