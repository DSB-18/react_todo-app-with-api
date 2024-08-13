import React, { useEffect } from 'react';
import cn from 'classnames';
import { ErrorMessage } from '../types/Error';

type Props = {
  error: ErrorMessage | null;
  onAddTodo: (title: string) => Promise<void>;
  setError: React.Dispatch<React.SetStateAction<ErrorMessage | null>>;
  fieldTitle: React.RefObject<HTMLInputElement>;
  onChangeStatus: () => void;
  hasTodos: boolean;
};

export const ErrorNotification: React.FC<Props> = ({ error, setError }) => {
  useEffect(() => {
    if (error) {
      const timerId = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timerId);
    }

    return undefined;
  }, [error, setError]);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !error,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setError(null)}
      />
      {error}
    </div>
  );
};
