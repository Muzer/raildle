import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a TIPLOC-based version of the word guessing game we all know and
        love, forked from cwackerfuss/react-wordle -{' '}
        <a
          href="https://github.com/Muzer/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The full list of words were taken from Railway Codes by Phil Deaves.
        The list of valid solutions was sent to me by Tom Cairns; I have no
        idea where he got them from.
      </p>
    </BaseModal>
  )
}
