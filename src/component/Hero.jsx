function Hero({ title, subtitle}) {
    return (
        <section className="hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <img src="/image/ARC.jpg" alt="Foto Profil" className="profile-photo" />
        </section>
    );
}

export default Hero;