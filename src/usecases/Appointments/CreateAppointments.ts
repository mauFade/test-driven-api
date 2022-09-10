import { Appointment } from "../../entities/appointments";
import { IAppointmentRepository } from "../../repositories/appointment-repository";
import { IAppointmentsDTO } from "./AppointmentsDTO";

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  async execute({
    customer,
    endsAt,
    startsAt,
  }: IAppointmentsDTO): Promise<CreateAppointmentResponse> {
    const overlappingAppointment =
      await this.appointmentRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overlappingAppointment) {
      throw new Error("Another appoint in this date already exists");
    }

    const appointment = new Appointment({
      customer,
      endsAt,
      startsAt,
    });

    await this.appointmentRepository.create(appointment);

    return appointment;
  }
}
