import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextProps {
  transactions: Transaction[]
}

interface TrasactionsProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextProps)

export function TransactionsProvider({ children }: TrasactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
