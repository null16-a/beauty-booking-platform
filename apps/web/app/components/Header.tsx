import Container from "./Container";
export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-wide text-neutral-900">
                        Nail Room VZ
                    </h2>

                    <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
                        <a className="transition hover:text-black" href="#services">
                            Услуги
                        </a>

                        <a className="transition hover:text-black" href="#masters">
                            Мастера
                        </a>

                        <a className="transition hover:text-black" href="#reviews">
                            Отзывы
                        </a>

                        <a className="transition hover:text-black" href="#contacts">
                            Контакты
                        </a>

                    </nav>
                </div>
            </Container>
        </header>
    );
}