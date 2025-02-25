
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface BookingFormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  // Location
  address: string;
  city: string;
  additionalDetails: string;
  // Service Details
  serviceId: string;
  date: Date;
  time: string;
}

const fetchServices = async () => {
  // This would be replaced with your actual API call
  return [
    { id: "1", name: "Corte de cabello", duration: "30 min", price: "$30.000" },
    { id: "2", name: "Tinte", duration: "2h", price: "$150.000" },
    { id: "3", name: "Peinado", duration: "1h", price: "$50.000" },
  ];
};

const steps = [
  { id: 1, name: "Información personal" },
  { id: 2, name: "Ubicación" },
  { id: 3, name: "Servicio y fecha" },
];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <div className="mt-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center ${
              currentStep === step.id
                ? "text-[rgba(35,164,222,1)]"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 ${
                currentStep === step.id
                  ? "border-[rgba(35,164,222,1)] text-[rgba(35,164,222,1)]"
                  : "border-gray-400"
              }`}
            >
              {step.id}
            </div>
            <span className="text-sm">{step.name}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                className="w-full p-2 border rounded-md"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-2 border rounded-md"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full p-2 border rounded-md"
                placeholder="Tu número de teléfono"
              />
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Dirección
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                className="w-full p-2 border rounded-md"
                placeholder="Dirección completa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Ciudad
              </label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="w-full p-2 border rounded-md"
                placeholder="Ciudad"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Detalles adicionales
              </label>
              <textarea
                {...register("additionalDetails")}
                className="w-full p-2 border rounded-md"
                placeholder="Apartamento, piso, referencias, etc."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Step 3: Service and Date Selection */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Selecciona el servicio
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isLoading ? (
                  <p>Cargando servicios...</p>
                ) : (
                  services?.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[rgba(35,164,222,1)]"
                    >
                      <input
                        type="radio"
                        value={service.id}
                        {...register("serviceId", { required: true })}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">
                          {service.duration} • {service.price}
                        </div>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Selecciona fecha y hora
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={es}
                  className="rounded-md border"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Horarios disponibles
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <label
                        key={time}
                        className="flex items-center p-2 border rounded hover:border-[rgba(35,164,222,1)] cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={time}
                          {...register("time", { required: true })}
                          className="mr-2"
                        />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Anterior
            </Button>
          )}
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="ml-auto"
            >
              Siguiente
            </Button>
          ) : (
            <Button type="submit" className="ml-auto">
              Confirmar reserva
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
