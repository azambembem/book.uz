import { useReduxSelector, useReduxDispatch } from "@/hooks/useRedux";
import { setBooks } from "@/redux/slices/order";
import { IBook } from "@/types";
import { useMemo } from "react";

type ON_ADD = (T: IBook) => void;
type ON_REMOVE = (T: IBook) => void;
type ON_PLUS = (T: IBook) => void;
type ON_MINUS = (T: IBook) => void;

type OrderService = {
  books: (IBook & {quantity: number})[];
  onAdd: ON_ADD;
  onRemove: ON_REMOVE;
  onPlus: ON_PLUS;
  onMinus: ON_MINUS;
  totalSum: number;
  totalCount: number;
}


export const useOrderService = (): OrderService => {
const dispatch = useReduxDispatch();
  const {books} = useReduxSelector(({order})=> order)
  const onAdd: ON_ADD  = (book) => {
    const exists = books.find((b)=> b._id === book._id);

    if (exists) {
      return dispatch(setBooks(books.map((b)=> b._id === book._id ? {...book, quantity: b.quantity + 1 }: b)))
    }

dispatch(setBooks([...books, {...book,  quantity: 1}]))
  }

  const onRemove: ON_REMOVE = (book) =>{
    dispatch(setBooks(books.filter((b)=> b._id !== book._id)))

  }
  const onPlus: ON_PLUS = (book) =>{
    dispatch(setBooks(books.map((b)=> b._id === book._id? {...book, quantity: b.quantity + 1 }: b)))
  }
  const onMinus: ON_MINUS = (book) =>{
    dispatch(setBooks(books.map((b)=> b._id === book._id && b.quantity > 1? {...book, quantity: b.quantity - 1 }: b)))
  }

  const totalSum = useMemo(()=> {
    return books.reduce((acc, book)=> acc + book.bookPrice * book.quantity, 0)
  }, [books])


  const totalCount = useMemo(()=>{
    return books.reduce((acc, book)=> acc + book.quantity, 0)
  }, [books])

  return {
    books,
    onAdd,
    onRemove,
    onPlus,
    onMinus,
    totalSum,
    totalCount
  };
}