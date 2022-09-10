import { describe, expect, it } from "vitest";
import { Appointment } from "../../entities/appointments";
import { CreateAppointment } from "./CreateAppointments";
import { getFutureDate } from "../../test/utils/get-future-date";
import { InMemoryAppointmentRepository } from "../../repositories/in-memory/in-memory-appointment";

describe("create appointment tests", () => {
  const appointmentRepository = new InMemoryAppointmentRepository();
  // System under test
  const sut = new CreateAppointment(appointmentRepository);

  it("Should not create an appointment with overlapping dates", async () => {
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-15");

    await sut.execute({
      customer: "Jon Doe",
      endsAt,
      startsAt,
    });

    expect(
      sut.execute({
        customer: "Jon Doe",
        endsAt: getFutureDate("2022-08-14"),
        startsAt: getFutureDate("2022-08-18"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
