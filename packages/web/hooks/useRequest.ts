import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils";
import { useState, useEffect } from "react";

export default function useRequest(
  fn: (...arg: any[]) => Promise<any>,
  param = null,
) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | false>();

  useEffect(() => {
    async function init() {
      setLoading(true);
      setError(false);
      try {
        const result = param ? await fn(param) : await fn();
        setData(result);
      } catch (e: any) {
        setError(new Error(e));
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [param]);

  return [loading, error, data];
}
