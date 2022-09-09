import { Appointment } from "../../entities/appointments";
import { IAppointmentsDTO } from "./AppointmentsDTO";

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute({
    customer,
    endsAt,
    startsAt,
  }: IAppointmentsDTO): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      endsAt,
      startsAt,
    });

    return appointment;
  }
}
