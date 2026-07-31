import Container from "./Container";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 min-h-screen pt-32 pb-24">
      <Container>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Услуги
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Наши услуги
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Выберите подходящую процедуру и запишитесь к удобному мастеру.
          </p>
        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <ServiceCard
            title="Маникюр"
            description="Классический уход и аккуратная обработка ногтей."
            price="1500 ₽"
          />

          <ServiceCard
            title="Маникюр + покрытие"
            description="Стойкое покрытие гель-лаком с красивым дизайном."
            price="2200 ₽"
          />

          <ServiceCard
            title="Дизайн ногтей"
            description="Индивидуальный дизайн под ваш стиль."
            price="от 500 ₽"
          />

        </div>

      </Container>
    </section>
  );
}