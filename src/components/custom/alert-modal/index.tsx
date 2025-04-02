import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { BadgeCheck, CircleX } from 'lucide-react'

interface ConfirmModalProps {
  isOpen: boolean
  alert: OrderMessage
  closeModal: () => void
}

export default function CustomAlertModal({
  isOpen,
  alert,
  closeModal
}: ConfirmModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <VisuallyHidden asChild>
            <AlertDialogTitle>
              {alert.status === 'success' ? 'Sucesso' : 'Erro'}
            </AlertDialogTitle>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <AlertDialogDescription>{alert.message}</AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>

        <div className="flex flex-col items-center gap-4">
          {alert.status === 'success' ? (
            <BadgeCheck size={44} color="#35af1d" strokeWidth={3} />
          ) : (
            <CircleX size={48} color="#af1d1d" />
          )}
          <p className="text-xl text-center">{alert.message}</p>
        </div>

        <AlertDialogFooter className="flex items-center justify-center">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 w-1/2 rounded-md hover:bg-red-600"
          >
            Fechar
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
