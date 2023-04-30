import { isToday, isSameDay, subMonths, addMonths, subYears, addYears, format } from "date-fns";
import { useEffect, useState, Fragment, useMemo, useCallback } from "react";
import { getCalendar, getDayText, getMonthText, getYear } from "./utils";
import { Month } from "./types";
import { DAY_OF_THE_WEEK, DEFAULT_FORMAT } from "./config";
import { Button } from "./Button";
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useTransitionStyles,
  offset,
  flip,
  shift,
} from "@floating-ui/react";

export interface DatePickerProps {
  className?: string;
  placeholder?: string;
  value?: Date | number | null;
  onSelect?: (date: Date) => void;
  onClear?: () => void;
}

const DatePicker = ({
  className,
  value,
  placeholder = "Date Picker",
  onSelect = () => undefined,
  onClear = () => undefined,
}: DatePickerProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [months, setMonths] = useState<Month[]>([]);

  const { x, y, strategy, refs, context } = useFloating({
    open: isShowing,
    onOpenChange: setIsShowing,
    middleware: [offset(8), flip(), shift()],
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 100,
    initial: {
      opacity: 0,
      transform: "scaleY(0.9)",
    },
    open: {
      opacity: 1,
      transform: "scaleY(1)",
    },
    close: {
      opacity: 0,
      transform: "scaleY(0.9)",
    },
    common: {
      transformOrigin: "top",
    },
  });
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss]);

  const handleClickNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handleClickPreviousMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleClickNextYear = () => {
    setCurrentDate((prev) => addYears(prev, 1));
  };

  const handleClickPreviousYear = () => {
    setCurrentDate((prev) => subYears(prev, 1));
  };

  const handleSelect = useCallback(
    (date: Date) => {
      setIsShowing(false);
      onSelect(date);
    },
    [onSelect]
  );

  useEffect(() => {
    setMonths(getCalendar(currentDate, 1));
  }, [currentDate]);

  const btnClassNames = useMemo(() => {
    const result = [
      "flex items-center justify-center gap-2 border rounded px-4 py-1 font-normal text-sm active:border-primary/40 hover:border-primary/60",
    ];
    if (value) {
      result.push("text-primary");
    } else if (placeholder) {
      result.push("text-zinc-400");
    }
    return result.join(" ");
  }, [value, placeholder]);

  return (
    <>
      <Button ref={refs.setReference} {...getReferenceProps()} className={`${btnClassNames} ${className}`}>
        <span>{value ? format(value, DEFAULT_FORMAT) : placeholder}</span>
        {/* TODO: improve clear icon */}
        {value ? (
          <span
            className="rounded-full border w-4 h-4 inline-flex items-center justify-center text-xs transition-colors duration-150 hover:cursor-pointer hover:border-primary/60"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            X
          </span>
        ) : null}
      </Button>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: "max-content",
            ...styles,
          }}
          {...getFloatingProps()}
        >
          <div className="border rounded-lg shadow-lg w-fit h-fit">
            {months.map((month, index) => {
              return (
                <Fragment key={index}>
                  {/* header */}
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center justify-center gap-2">
                      <Button className="hover:text-primary/60" onClick={handleClickPreviousYear}>
                        {"<<"}
                      </Button>
                      <Button className="hover:text-primary/60" onClick={handleClickPreviousMonth}>
                        {"<"}
                      </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-semibold">{getMonthText(month.month)}</span>
                      <span className="font-semibold">{getYear(month.month)}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Button className="hover:text-primary/60" onClick={handleClickNextMonth}>
                        {">"}
                      </Button>
                      <Button className="hover:text-primary/60" onClick={handleClickNextYear}>
                        {">>"}
                      </Button>
                    </div>
                  </div>

                  <div className="border-t p-2">
                    {/* day of the week */}
                    <div className="grid grid-cols-7 place-items-center place-content-between">
                      {DAY_OF_THE_WEEK.map((dayOfTheWeek, index) => (
                        <span key={index} className="font-medium">
                          {dayOfTheWeek}
                        </span>
                      ))}
                    </div>

                    {/* days */}
                    <div className="grid grid-cols-7 gap-y-[2px] place-items-center place-content-between">
                      {month.dates.map((day, index) => {
                        let hover = "hover:text-primary/60";
                        const classNames = ["w-10 h-10 rounded-full font-normal flex items-center justify-center"];

                        if (isToday(day.date)) {
                          classNames.push("text-primary"); // today
                          hover = "";
                        }
                        if (isSameDay(value || 0, day.date)) {
                          classNames.push("!bg-primary/60"); // selected day
                          hover = "";
                        }
                        if (!day.isCurrentMonth) {
                          classNames.push("text-zinc-400", "hover:cursor-not-allowed"); // not current month day
                          hover = "";
                        }
                        if (hover) {
                          classNames.push(hover);
                        }

                        return (
                          <Button
                            key={index}
                            onClick={() => handleSelect(day.date)}
                            disabled={!day.isCurrentMonth}
                            className={`${classNames.join(" ")}`}
                          >
                            {getDayText(day.date)}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DatePicker;
