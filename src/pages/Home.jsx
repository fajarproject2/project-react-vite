import Hero from "../component/Hero";
import SkillCard from "../component/SkillCard";

const skills = [
    { id: 1, title: "HTML & CSS", desc: "Menusun Struktur Dan Tampilan Halaman Web." },
    { id: 2, title: "JavaSript", desc: "Menambahkan Interaksi Pada Halaman Web." },
    { id: 3, title: "React.js", desc: "Membangun Antarmuka Web Berbasis Komponen." },


];

function Home() {
    return (
        <div>
            <Hero
            title="Halo, Saya Muhammad Fajar"
            subtitle="Siswa RPL yang belajar membangun aplikasi web dengan React."
        />

        <section className="skills-grid">
            {skills.map((skill) => (
                <SkillCard key={skill.id} title={skill.title} desc={skill.desc} />
            ))}
        </section>
     </div>
    );
}

export default Home;