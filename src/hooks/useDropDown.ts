import { useCallback, useState } from 'react';

export const useDropDown = <T extends unknown[][]>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback((index: number[], value: string) => {
    const copy = [...form];
    copy[index[0]][index[1]] = value;
  }, []);

  return { form, onChange, setForm };
};
