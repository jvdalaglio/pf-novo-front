import CardDetails from './components/card-details'

interface Props {
  params: Awaited<Promise<{ id: string }>>
}

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <CardDetails id={Number(params.id)} />
    </div>
  )
}
