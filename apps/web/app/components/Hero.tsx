import Button from "./Button";
import Container from "./Container";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Nail Room VZ
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-neutral-900 md:text-7xl">
            Маникюр,
            <br />
            который хочется рекомендовать
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Современный салон красоты с онлайн-записью.
            Выберите мастера, удобное время и запишитесь всего за пару минут.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button>
              Выбрать мастера
            </Button>

            <Button variant="secondary">
              Наши услуги
            </Button>
          </div>


          <HeroImage />


        </div>
      </Container>
    </section>
  );
}