
import './App.css';
import studentPhoto from './assets/sioud.jpg';

const student = {
  name: "Sioud Abderrahmen",
  email: "sioudabderrahmen@gmail.com",
  phone: "+216 976767879",
  field: "Génie Logiciel et Systèmes d'information",
  year: "2ème année",
  group: "GLSI 2",
  city: "Mahdia",
};

function App() {
  return (
    <main className="page">
      <article className="student-card">
        <img
          src={studentPhoto}
          alt="Photo de l'étudiant"
          className="student-photo"
        />

        <h1>Fiche étudiant</h1>

        <div className="student-info">
          <p><strong>Nom & Prénom :</strong> {student.name}</p>
          <p><strong>Email :</strong> {student.email}</p>
          <p><strong>Téléphone :</strong> {student.phone}</p>
          <p><strong>Filière :</strong> {student.field}</p>
          <p><strong>Année d'étude :</strong> {student.year}</p>
          <p><strong>Groupe :</strong> {student.group}</p>
          <p><strong>Ville :</strong> {student.city}</p>
        </div>

        <a className="contact-button" href={`mailto:${student.email}`}>
          Contacter
        </a>
      </article>
    </main>
  );
}

export default App;
