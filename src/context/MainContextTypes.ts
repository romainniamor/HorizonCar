import { Dispatch, SetStateAction } from "react";
import { CarType } from "../types";

export type MainContextType = {
  cars: CarType[];
  setCars: Dispatch<SetStateAction<CarType[]>>;
  newFilter: string;
  setNewFilter: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  resetFilter: () => void;

  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;

  carsSelected: CarType[];
  setCarsSelected: Dispatch<SetStateAction<CarType[]>>;

  handleAddCartoSelection: (car: CarType) => void;
  handleDeleteCarToSelection: (id: string) => void;

  isCarSelected: (id: string) => boolean;
  isPanelRightVisible: boolean;
  setIsPanelRightVisible: Dispatch<SetStateAction<boolean>>;
  handleRightPanel: () => void;

  emptySelection: boolean;
  setEmptySelection: Dispatch<SetStateAction<boolean>>;

  formIsSubmited: boolean;
};
