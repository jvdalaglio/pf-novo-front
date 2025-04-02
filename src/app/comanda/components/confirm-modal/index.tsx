import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
  isOpen: boolean
  closeModal: () => void
  confirmButton: () => void
}

export default function CustomConfirmModal({
  isOpen,
  closeModal,
  confirmButton
}: ConfirmModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza ?</AlertDialogTitle>
          <AlertDialogDescription>
            Deseja remover o item da comanda ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal} className="bg-red-200">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={confirmButton} className="bg-red-500">
            Remover
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
