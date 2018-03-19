export interface PurchaseTransactionHistory {
  id: number
  invoice: string
  balance: number
  buyer_name: string
  seller_name: string
  bought_date: string
  transactions: PurchaseTransaction[]
}

export interface PurchaseTransaction {
  id: number
  price: number
  amount: number
  balance: number
  item_name: string
  unit_name: string
}