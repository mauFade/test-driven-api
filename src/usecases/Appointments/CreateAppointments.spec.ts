import { describe, expect, it } from "vitest";
import { Appointment } from "../../entities/appointments";
import { CreateAppointment } from "./CreateAppointments";

describe("create appointment tests", () => {
  // System under test
  const sut = new CreateAppointment();

  it("Should create an appointment", async () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);

    await expect(
      sut.execute({
        customer: "Jon Doe",
        endsAt,
        startsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
