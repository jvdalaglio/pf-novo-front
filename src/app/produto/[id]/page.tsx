import CardDetails from './components/card-details'

type Params = {
  params: {
    id: string
  }
}

export default async function ProductDetails({ params }: Params) {
  const {id} = await params

  return (
    <div>
      <CardDetails key={id} id={+id} />
    </div>
  )
}