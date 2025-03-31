import CardDetails from './components/card-details'

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = {
    id: 1,
    name: 'Salada Caeser',
    description: 'Salada com alface, croutons e molho especial',
    price: 25.9,
    imageUrl:
      'https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg',
    isVegan: 1,
    isGlutenFree: 0
  }
  return (
    <div>
      <CardDetails key={params.id} {...product} />
    </div>
  )
}
