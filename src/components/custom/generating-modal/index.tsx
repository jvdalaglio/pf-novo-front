import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Spinner } from '../loading-spinner'

interface ConfirmModalProps {
  isOpen: boolean
  message: string
}

export default function CustomGeneratingModal({
  isOpen,
  message
}: ConfirmModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <VisuallyHidden asChild>
            <AlertDialogTitle>Status de processamento</AlertDialogTitle>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>

        <div className="flex flex-col items-center gap-4">
          <Spinner />
          <p className="text-xl">{message}</p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
