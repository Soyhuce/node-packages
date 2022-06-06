import React from 'react'

interface Helpers {
  goToNextStep: () => void
  goToPrevStep: () => void
  reset: () => void
  canGoToNextStep: boolean
  canGoToPrevStep: boolean
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const useSteps = (maxStep: number): [number, Helpers] => {
  const [currentStep, setCurrentStep] = React.useState(1)

  const canGoToNextStep = React.useMemo(() => currentStep + 1 <= maxStep, [currentStep, maxStep])

  const canGoToPrevStep = React.useMemo(() => currentStep - 1 >= 1, [currentStep])

  const setStep = React.useCallback(
    (step: unknown) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
        return
      }

      throw new Error('Step not valid')
    },
    [maxStep, currentStep]
  )

  const goToNextStep = React.useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1)
    }
  }, [canGoToNextStep])

  const goToPrevStep = React.useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1)
    }
  }, [canGoToPrevStep])

  const reset = React.useCallback(() => {
    setCurrentStep(1)
  }, [])

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset
    }
  ]
}

export { useSteps }
export default useSteps
