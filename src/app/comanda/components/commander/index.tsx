'use client'

interface CommanderProps {
  totalPrice: number
  buttonText: string
  disabledButton: boolean
  buttonClick: () => void
}

export default function Commander({
  totalPrice,
  buttonText,
  buttonClick,
  disabledButton = false
}: CommanderProps) {
  return (
    <div className="flex flex-col gap-2 m-2">
      <span className="text-xl font-semibold">
        Total: R$ {totalPrice.toFixed(2)}
      </span>
      <button
        onClick={buttonClick}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg disabled:bg-red-200"
        disabled={disabledButton}
      >
        {buttonText}
      </button>
    </div>
  )
}
