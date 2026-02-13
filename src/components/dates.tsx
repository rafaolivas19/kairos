import { useEffect, useState } from "react";
import { CopyInput } from "./ui/copy-input";
import {
  formatYYMMDDHHMM,
  formatYYMMDDHHMMSS,
} from "../utils/date-format.utils";

const DEFAULT_LOCALE: Intl.LocalesArgument =
  navigator.languages?.[0] ?? navigator.language ?? "es-MX";

export default function Dates() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());

    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <CopyInput
        key="friendly-date-time"
        value={currentDate?.toLocaleString(DEFAULT_LOCALE, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="local-date"
        value={currentDate?.toLocaleDateString(DEFAULT_LOCALE, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="local-time"
        value={currentDate?.toLocaleTimeString(DEFAULT_LOCALE, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="epoch-seconds"
        value={
          currentDate
            ? Math.floor(currentDate.getTime() / 1000).toString()
            : undefined
        }
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="epoch-ms"
        value={currentDate ? currentDate.getTime().toString() : undefined}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="yyMMddhhmm"
        value={currentDate ? formatYYMMDDHHMM(currentDate) : undefined}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
      <CopyInput
        key="yyMMddhhmmss"
        value={currentDate ? formatYYMMDDHHMMSS(currentDate) : undefined}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
    </>
  );
}
