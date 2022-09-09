import { IAppointmentsDTO } from "../usecases/Appointments/AppointmentsDTO";

export class Appointment {
  private props: IAppointmentsDTO;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: IAppointmentsDTO) {
    const { endsAt, startsAt } = props;

    // Data de início não pode ser diferente do momento atual
    if (startsAt <= new Date()) {
      throw new Error("Start date cannot de different than now");
    }

    if (endsAt <= startsAt) {
      throw new Error("Start date cannot be equal or lesser than end date.");
    }

    this.props = props;
  }
}
