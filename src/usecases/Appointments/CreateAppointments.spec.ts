import { describe, expect, it } from "vitest";
import { Appointment } from "../../entities/appointments";
import { CreateAppointment } from "./CreateAppointments";
import { getFutureDate } from "../../test/utils/get-future-date";
import { InMemoryAppointmentRepository } from "../../repositories/in-memory/in-memory-appointment";

describe("create appointment tests", () => {
  const appointmentRepository = new InMemoryAppointmentRepository();
  // System under test
  const sut = new CreateAppointment(appointmentRepository);

  it("Should create an appointment", async () => {
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-11");

    await expect(
      sut.execute({
        customer: "Jon Doe",
        endsAt,
        startsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
