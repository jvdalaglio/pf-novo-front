'use client'
import CustomAlertModal from '@/components/custom/alert-modal'
import CustomGeneratingModal from '@/components/custom/generating-modal'
import { CommandProvider, useCommand } from '@/contexts/command/CommandContext'
import useOrder from '@/hooks/order/useOrder'
import CommandList from './components/command-list'
import Commander from './components/commander'

export default function Comanda() {
  const { commandItems, totalPrice } = useCommand()
  const {
    postOrder,
    isLoadingOrder,
    orderConfirmed,
    closeConfirmedModal,
    modalIsOpen
  } = useOrder()
  return (
    <div className="px-4">
      <CustomGeneratingModal
        isOpen={isLoadingOrder}
        message="Processando pedido..."
      />
      <CustomAlertModal
        isOpen={modalIsOpen}
        alert={orderConfirmed}
        closeModal={closeConfirmedModal}
      />
      {commandItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl font-bold">Nenhum item adicionado</h1>
          <p className="text-gray-500">Adicione um item à comanda</p>
        </div>
      ) : (
        <>
          <CommandProvider>
            <Commander
              key={'commander'}
              buttonText="Finalizar Pedido"
              totalPrice={totalPrice}
              buttonClick={() => postOrder(commandItems)}
              disabledButton={isLoadingOrder}
            />
            <CommandList commandItems={commandItems} />
          </CommandProvider>
        </>
      )}
    </div>
  )
}
