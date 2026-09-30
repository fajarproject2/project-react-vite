function SkillCard({ title, desc }) {
    return (
        <section className="skill-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </section>
    );
}

export default SkillCard;