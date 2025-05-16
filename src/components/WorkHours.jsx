
import React from 'react';

const WorkHours = () => {
  return (
    <div className="bg-secondary/50 rounded-lg p-6 border">
      <h4 className="font-medium mb-4">Horário de Trabalho</h4>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex justify-between">
          <span>Segunda - Sexta:</span>
          <span>8:00 – 17:30</span>
        </li>
        <li className="flex justify-between">
          <span>Sábado:</span>
          <span>10:00 - 15:00</span>
        </li>
        <li className="flex justify-between">
          <span>Domingo:</span>
          <span>Fechado</span>
        </li>
      </ul>
    </div>
  );
};

export default WorkHours;
