import { formatedPrice } from "../../../../../../utils/math";

export const getCarsInfos = (carsSelected) => {
  return [
    {
      id: 1,
      label: "Version",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.description}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      label: "Prix",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {formatedPrice(car.price)}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      label: "Première Immatriculation",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.year}
            </span>
          ))}
        </div>
      ),
    },

    {
      id: 4,
      label: "Catégorie",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.category}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: 5,
      label: "Kilométrage",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.kilometer} km
            </span>
          ))}
        </div>
      ),
    },
    {
      id: 6,
      label: "Tansmission",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.gearbox}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: 7,
      label: "Carburant",
      component: (
        <div className="car-info">
          {carsSelected.map((car, index) => (
            <span className="car-data" key={index}>
              {car.energy}
            </span>
          ))}
        </div>
      ),
    },
  ];
};
