import { useState } from "react";
import { Calendar } from "@heroui/react";
import { today } from "@internationalized/date";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(today(timeZone));

  return (
    <div className="flex gap-x-4 flex-col">
      <Calendar
        aria-label="Seleccionar fecha"
        value={selectedDate}
        onChange={setSelectedDate}
      />

      <p className="mt-4 text-sm text-gray-600">
        Fecha seleccionada: {selectedDate.toDate(timeZone).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Calendario;
