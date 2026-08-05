import Button from "../ui/Button";

function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 text-white flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold">
          Good Evening 👋
        </h1>

        <p className="mt-3 text-blue-100">
          Manage your pets, appointments and medical records from one place.
        </p>
      </div>

      <div className="flex gap-4">

        <Button className="!w-auto bg-white !text-blue-600 hover:bg-slate-100">
          + Add Pet
        </Button>

        <Button className="!w-auto bg-blue-700 hover:bg-blue-800">
          Book Appointment
        </Button>

      </div>

    </div>
  );
}

export default WelcomeBanner;