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
    this.props = props;
  }
}
