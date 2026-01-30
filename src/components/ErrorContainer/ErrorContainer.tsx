import { LABELS } from "../../constants";

interface ErrorContainerProps {
  handleRetry: () => void;
}

const ErrorContainer = ({ handleRetry }: ErrorContainerProps) => {

  const handleClick = () => {
    if (typeof handleRetry === 'function') handleRetry();
  }
  return (
    <div role="alert" className="flex flex-col items-center py-20 mx-auto">
      <p className="text-quaternary mb-3">{LABELS.ERROR_MESSAGE}</p>
      <button type="button" onClick={handleClick} className="px-3 py-2 bg-primary text-tertiary rounded-md font-medium">
        {LABELS.RETRY_BUTTON_TEXT}
      </button>
    </div>
  );
}

export default ErrorContainer;